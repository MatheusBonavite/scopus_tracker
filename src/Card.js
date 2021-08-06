/* eslint-disable react/prop-types */
import M from "materialize-css";
import React from "react";
import { useState } from "react";
import Papers from "./Papers";
import usePapersList from "./usePapersList";

const Card = ({ cardTitle, cardSubtitle }) => {
    const [location, setLocation] = useState("");
    const [compromise, setCompromise] = useState("");
    const [apiKey, setApiKey] = useState("");

    const [papersList, requestPapersList, status] = usePapersList();

    function handleSubmit(event) {
        requestPapersList(compromise, location);
        console.log("paper list >", papersList);

        event.preventDefault();
        setLocation("");
        setCompromise("");
    }

    function handleModalSubmit(event){
        localStorage.setItem("@apiKey",apiKey);
        event.preventDefault();
    }
    //To access the materialize modal structure!
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
    });

    return (
        <>
            <div className="card z-depth-2">
                <div className="search-params">
                    <div className="card-title">
                        <h5>
                            <span>{cardTitle}</span>
                        </h5>
                        {cardSubtitle}
                    </div>
                    <form onSubmit={handleSubmit} className="form-handle">
                        <label className="search-location" htmlFor="location">
                            <br />
                            <input
                                id="location"
                                onChange={(event) => {
                                    setLocation(event.target.value);
                                }}
                                value={location}
                                placeholder="Location"
                            />
                        </label>

                        <label
                            className="search-compromise"
                            htmlFor="compromise"
                        >
                            <br />
                            <input
                                id="compromise"
                                onChange={(event) => {
                                    setCompromise(event.target.value);
                                }}
                                value={compromise}
                                placeholder="Subject of Study"
                            />
                        </label>

                        <button
                            className="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                        >
                            Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
                <abbr title="Set Your API Key!">
                    {/* Modal Trigger  */}
                    <a className="modal-trigger" href="#storeApiKey">
                        <span id="api-key" className="material-icons pin">
                            pin
                        </span>
                    </a>
                </abbr>
                {/* Modal Structure  */}
                <div id="storeApiKey" className="modal">
                    <div className="modal-content">
                        <h4>Add your Scopus API Key!</h4>
                        <p>The scopus API Key is unique and you can get it for free! Just access: <a href="https://dev.elsevier.com/">Scopus Dev</a></p>
                        <form className="modal-form" onSubmit={handleModalSubmit}>
                            <label className="api-key-form" htmlFor="apiKey">
                                <br />
                                <input
                                    id="apiKey"
                                    onChange={(event) => {
                                        setApiKey(event.target.value);
                                    }}
                                    value={apiKey}
                                    placeholder="Your Api Key"
                                />
                            </label>
                            <button
                                className="btn waves-effect waves-light"
                                type="submit"
                                name="action"
                            >
                                Set Key
                                <i className="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Got it!</a>
                    </div>
                </div>
            </div>
            <Papers papersList={papersList} status={status} />
        </>
    );
};

export default Card;
