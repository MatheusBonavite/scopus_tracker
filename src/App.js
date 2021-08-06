import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./Card.js";
import { StrictMode } from "react";
import PaperDetails from "./PaperDetails.js";


const App = () => {
    return (
        <>
            <div className="rootReact">
                <Router>
                    <Switch>
                        <Route path="/details/:id">
                            <PaperDetails />
                        </Route>
                        <Route path="">
                            <Card cardTitle={"Paper Search"} cardSubtitle={"Query Papers on Scopus!"}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </>
    );
};

ReactDOM.render(
    <StrictMode><App /></StrictMode>,
    document.getElementById("root")
);
