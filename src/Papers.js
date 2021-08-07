/* eslint-disable react/prop-types */

import React from "react";
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
                    <table>
                            <thead>
                            <tr>
                                <th>Article Number</th>
                                <th>DOI</th>
                                <th>Title</th>
                                <th>Cover Date</th>
                                <th>Author</th>
                                <th>Cited By:</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                papersList["search-results"]?.entry?.map(paper => {
                                    return(
                                        <tr key={paper['dc:identifier']}>
                                            <td key={paper['article-number']}>{paper['article-number']}</td>
                                            <td key={paper['prism:doi']}>{paper['prism:doi']}</td>
                                            <td key={paper['dc:title']}>{paper['dc:title']}</td>
                                            <td key={paper['prism:coverDate']}>{paper['prism:coverDate']}</td>
                                            <td key={paper['dc:creator']}>{paper['dc:creator']}</td>
                                            <td key={paper['citedby-count']}>{paper['citedby-count']}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Papers;
