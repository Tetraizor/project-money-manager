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
                <div className="buttonContainer">
                    <button className="roundButton accentRed">Harcama</button>
                    <button className="roundButton accentGreen">Kazanç</button>
                </div>
            </div>
            <hr className="divider" />
        </>
    );
}

export default StatusCard;