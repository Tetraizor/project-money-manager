function Appbar() {
    return (
        <>
            <div className="appbarWrapper">
                <div className="hamburgerIcon">
                    <img src="/Hamburger.png"></img>
                </div>
                <div className="profileIcon">
                    <img src="/ProfilePicture.png"></img>
                </div>
            </div>
            <hr className="divider" />
        </>
    );
}

export default Appbar;