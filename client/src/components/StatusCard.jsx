import { useContext, useState, useEffect, useRef } from "react";
import { formatCurrency } from "../util/formatter";
import ProgressBar from "./ProgressBar";
import { MainDisplayContext } from "../contexts/MainDisplayContext";

const data = {
    totalMoney: 458.20,
    netThisMonth: 2320,
    savingGoal: 600
}

function StatusCard() {

    const [windowState, setWindowState] = useContext(MainDisplayContext);
    const prevWindowState = useRef();
    const isAnimating = useRef(false);

    const [currentClasses, setCurrentClasses] = useState("mid");

    useEffect(() => {

        if (prevWindowState.value != null) {

            isAnimating.value = true;

            if (prevWindowState.value == "left") {      // left to mid 
                setCurrentClasses("rightTransition mid")
                finishAnimation("mid");
            }
            else if (prevWindowState.value == "mid") {
                if (windowState == "left") {     // mid to right
                    setCurrentClasses("midTransition right")
                    finishAnimation("right");
                }
                else if (windowState == "right") {        // mid to left
                    setCurrentClasses("midTransition left")
                    finishAnimation("left");
                }
                else {
                    isAnimating.value = false;
                }
            }
            else { // right                      // right to mid
                setCurrentClasses("leftTransition mid")
                finishAnimation("mid");
            }
        }

        prevWindowState.value = windowState;
    }, [windowState]);

    function switchWindowState(state) {
        if (!isAnimating.value)
            setWindowState(state);
    }

    function finishAnimation(state) {
        setTimeout(() => { setCurrentClasses(state); isAnimating.value = false; }, 500);
    }

    return (
        <div className={"statusCardWrapper" + " " + currentClasses}>
            <div className={"accountChooserWrapper"}>
                <p>
                    Kişisel Hesap
                </p>
                <img src="/RightArrow.png" alt="Arrow pointing right" />
            </div>
            <h1 className={"money"}>₺458,20</h1>
            <h2 className={"money green"}>₺2.320,00 (Nisan)</h2>
            <ProgressBar currentState={.2} height={"16px"} color={"#555655"} className={"progressBar"} />
            <span className={"progressBarDesc"}>
                <p>Birikim Hedefi: <b>{formatCurrency(data.savingGoal)}</b></p>
                <p>24%</p>
            </span>
            <div className={"buttonContainer"}>
                <button
                    className={"roundButton accentRed unselectable"}
                    onClick={() => { switchWindowState("left") }}>
                    <p>Harcama</p>
                    <div className={"buttonBackdrop--red"} />
                </button>
                <button
                    className={"roundButton accentGreen unselectable"}
                    onClick={() => { switchWindowState("right") }}>
                    <p>Kazanç</p>
                    <div className={"buttonBackdrop--green"} />
                </button>
            </div>
        </div >
    );
}

export default StatusCard;