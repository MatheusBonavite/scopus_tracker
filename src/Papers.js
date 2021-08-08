/* eslint-disable react/prop-types */

import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from "react-router-dom";
import MTable from "./materialize_comp/MTable.js";

// import { useEffect, useState } from "react";

const Papers = ({ papersList, status }) => {
    return (
        <>
            {status == "loading" && (
                // Materialize Loader
                <div className="loader">
                    <div className="preloader-wrapper active">
                        <div className="spinner-layer spinner-red-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {papersList?.length != 0 && (
                //Materialize Table
                <div className="api-result">
                    <MTable
                        paramsOfInterest={[
                            "Article Number",
                            "DOI",
                            "Title",
                            "Cover Date",
                            "Author",
                            "Cited By:",
                        ]}
                        papersList={papersList}
                    />
                </div>
            )}
        </>
    );
};

export default Papers;
