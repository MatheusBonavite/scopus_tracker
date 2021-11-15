import React from 'react';
import ReactDOM from "react-dom";

const Application: React.FunctionComponent<{}> = () => {
    return (
        <h1>My Scopus Tracker App!</h1>
    );
}

ReactDOM.render(
    <Application></Application>,
    document.getElementById("root")
);