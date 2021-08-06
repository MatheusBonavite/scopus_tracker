/* eslint-disable react/prop-types */

import React from "react";
// import { useEffect, useState } from "react";

const Papers = ({ papersList, status }) => {
    return (
        <>
            {status == "loading" && (
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
            
            {papersList?.length !=0 && (
                <div className="api-result">
                    <h4>
                        {
                            papersList["search-results"]?.entry[0][
                                "article-number"
                            ]
                        }
                    </h4>
                </div>
            )}
        </>
    );
};

export default Papers;
