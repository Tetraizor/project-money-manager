import { formatCurrency } from "../util/formatter";
import ProgressBar from "./ProgressBar";

const data = {
    totalMoney: 458.20,
    netThisMonth: 2320,
    savingGoal: 600
}

function StatusCard() {
    return (
        <>
            <div className="statusCardWrapper">
                <div className="accountChooserWrapper">
                    <p>
                        Kişisel Hesap
                    </p>
                    <img src="/RightArrow.png" alt="Arrow pointing right" />
                </div>
                <h1 className="money">₺458,20</h1>
                <h2 className="money green">₺2.320,00 (Nisan)</h2>
                <ProgressBar currentState={.2} height={"16px"} color={"#555655"} className={"progressBar"} />
                <span className="progressBarDesc">
                    <p>Birikim Hedefi: <b>{formatCurrency(data.savingGoal)}</b></p>
                    <p>24%</p>
                </span>
                <div className="buttonContainer">
                    <button className="roundButton accentRed unselectable">
                        <p>Harcama</p>
                        <div class="buttonBackdrop--red" />

                    </button>
                    <button className="roundButton accentGreen unselectable">
                        <p>Kazanç</p>
                        <div class="buttonBackdrop--green" />
                    </button>
                </div>
            </div>
            <hr className="divider" />
        </>
    );
}

export default StatusCard;