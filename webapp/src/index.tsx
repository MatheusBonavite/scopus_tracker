import React from 'react';
import ReactDOM from "react-dom";
import { StrictMode } from 'react';
import './assets/index.scss';

const Application: React.FunctionComponent<{}> = () => {
    return (
        <h1>My Scopus Tracker App!</h1>
    );
}

ReactDOM.render(
    <StrictMode>
        <Application />
    </StrictMode>,
    document.getElementById("root")
);