import React from 'react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const CentralBoard = () => {
    return (
        <>
            <div className="centralBoard">
                <h1>Paper Search</h1>
                <h3>Query Papers on Scopus</h3>
                {/* <Link to="/whatever">Check here!</Link> */}
            </div>
            <div className="cardHolder">
                <Link to="author">
                    <Card title="Author Page" id={1}>
                        If you are an author who publishes on Scopus, this is
                        the perfect page to check your publications and personal
                        metrics. If you do not have an account yet, do it! Its
                        free!
                    </Card>
                </Link>
                <Link to="form">
                    <Card title="Search for Papers" id={2}>
                        Always stay up with the latest research from your
                        favorite authors! All you gotta do to use this feature
                        is signing up for your free API key at Scopus!
                    </Card>
                </Link>
                <a href="https://github.com/MatheusBonavite/scopus_tracker">
                    <Card title="GitHub" id={3}>
                        If you like developing React apps, this page was built
                        on React and it is open source! You can contribute here!
                    </Card>
                </a>
            </div>
        </>
    );
};

export default CentralBoard;
