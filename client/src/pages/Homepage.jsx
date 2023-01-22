import React from 'react'
import Appbar from '../components/Appbar';
import MainDisplay from '../components/MainDisplay';


function Homepage() {
    return (
        <>
            <Appbar />
            <MainDisplay />
            <hr className="divider" />
            <h1>Homepage</h1>
        </>
    );
}

export default Homepage;