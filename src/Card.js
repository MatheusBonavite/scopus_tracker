/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-onchange */

import M from "materialize-css";
import React from "react";
import { useState } from "react";
import Papers from "./Papers";
import usePapersList from "./usePapersList";
import listOfSubjects from "./staticSubjOptions";

const Card = ({ cardTitle, cardSubtitle }) => {
    const [location, setLocation] = useState("");
    const [studyObj, setStudyObj] = useState("AGRI");
    const [apiKey, setApiKey] = useState("");

    const [papersList, requestPapersList, status] = usePapersList();

    function handleSubmit(event) {
        let formatLocation = location.toLowerCase();
        formatLocation = formatLocation.replaceAll(" ", "+");
        console.log(formatLocation, studyObj);
        requestPapersList(studyObj, formatLocation);
        event.preventDefault();
        setLocation("");
        console.log(papersList);
    }

    function handleModalSubmit(event) {
        localStorage.setItem("@apiKey", apiKey);
        event.preventDefault();
    }

    //To access the materialize modal structure!
    document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll(".modal");
        M.Modal.init(elems);
    });

    //To open the options menu
    document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll("select");
        M.FormSelect.init(elems);
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

                        <div className="input-field col s12">
                            <select
                                name="select_input"
                                id="select_input"
                                onChange={(event) => {
                                    setStudyObj(event.target.value);
                                }}
                            >
                                {listOfSubjects.map((subj) => {
                                    let subjVal = subj
                                        .split("-")[0]
                                        .replaceAll(" ", "");
                                    return (
                                        <option key={subjVal} value={subjVal}>
                                            {subj}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

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
                        <p>
                            The scopus API Key is unique and you can get it for
                            free! Just access:
                            <a href="https://dev.elsevier.com/">Scopus Dev</a>
                        </p>
                        <form
                            className="modal-form"
                            onSubmit={handleModalSubmit}
                        >
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
                        <a
                            href="#!"
                            className="modal-close waves-effect waves-green btn-flat"
                        >
                            Got it!
                        </a>
                    </div>
                </div>
            </div>
            <Papers papersList={papersList} status={status} />
        </>
    );
};

export default Card;
