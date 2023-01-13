function ProgressBar({ currentState, height, color }) {
    const barStyle = {
        height: height,
        borderRadius: height,
        borderStyle: "solid",
        borderColor: color
    }
    const progressStyle = {
        height: "100%",
        borderRadius: height,
        width: `${currentState * 100}%`,
        backgroundColor: color
    }

    return (
        <>
            <div className="progressBarContainer" style={barStyle}>
                <div className="progressBar" style={progressStyle}></div>
            </div>
        </>
    );
}

export default ProgressBar;