/* eslint-disable react/prop-types */
import React from "react";
import { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from "react-router-dom";

class MTable extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log("Papers Table is being rendered...");
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.props.paramsOfInterest.map((interestParam) => {
                            return <th key={interestParam}>{interestParam}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.papersList["search-results"]?.entry?.map(
                        (paper) => {
                            return (
                                <tr key={paper["dc:identifier"]}>
                                    <td key={paper["article-number"]}>
                                        {paper["article-number"]}
                                    </td>

                                    <td key={paper["prism:doi"]}>
                                        {paper["prism:doi"]}
                                    </td>

                                    <td key={paper["dc:title"]}>
                                        <Link
                                            to={`/details/${paper[
                                                "dc:creator"
                                            ].replaceAll(" ", "")}`}
                                        >
                                            {paper["dc:title"]}
                                        </Link>
                                    </td>

                                    <td key={paper["prism:coverDate"]}>
                                        {paper["prism:coverDate"]}
                                    </td>

                                    <td key={paper["dc:creator"]}>
                                        {paper["dc:creator"]}
                                    </td>

                                    <td key={paper["citedby-count"]}>
                                        {paper["citedby-count"]}
                                    </td>
                                </tr>
                            );
                        }
                    )}
                </tbody>
            </table>
        );
    }
}

export default MTable;
