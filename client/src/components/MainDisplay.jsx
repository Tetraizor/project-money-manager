import MainDisplayProvider from "../contexts/MainDisplayContext";
import NewEntryPositive from "./NewEntryPositive";
import NewEntryNegative from "./NewEntryNegative";
import StatusCard from "./StatusCard";

export default function MainDisplay() {

    function changeCurrentScreen(screenIndex) {

    }

    return (
        <MainDisplayProvider onWindowChange={changeCurrentScreen}>
            <div className={"mainDisplayContainer"}>
                <StatusCard />
                <NewEntryPositive />
                <NewEntryNegative />
            </div>
        </MainDisplayProvider >
    );
}