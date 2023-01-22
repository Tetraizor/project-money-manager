import { useContext, useEffect, useRef, useState } from "react";
import { MainDisplayContext } from "../contexts/MainDisplayContext";

export default function NewEntryPositive() {

    const [windowState, setWindowState] = useContext(MainDisplayContext);
    const prevWindowState = useRef();
    const isAnimating = useRef(false);

    const [currentClasses, setCurrentClasses] = useState("right");

    useEffect(() => {

        if (prevWindowState.value != null) {

            isAnimating.value = true;

            if (prevWindowState.value == "left") {      // left to mid 

            }
            else if (prevWindowState.value == "mid") {
                if (windowState == "left") {     // mid to right

                }
                else if (windowState == "right") {        // mid to left
                    setCurrentClasses("rightTransition mid")
                    finishAnimation("mid");
                }
                else {
                    isAnimating.value = false;
                }
            }
            else { // right                      // right to mid
                setCurrentClasses("midTransition right")
                finishAnimation("right");
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
        <div className={"newEntryScreenContainer " + currentClasses}>
            <button onClick={() => { switchWindowState("mid") }}>Back to middle</button>
        </div>
    );
}