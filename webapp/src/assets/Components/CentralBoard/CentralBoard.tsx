import React from 'react';
import Card from '../Card/Card';

const CentralBoard = () => {
    return (
        <>
            <div className="centralBoard">
                <h1>Paper Search</h1>
                <h3>Query Papers on Scopus</h3>
                {/* <Link to="/whatever">Check here!</Link> */}
            </div>
            <Card title="Author Page">
                If you are an author who publishes on Scopus, this is the
                perfect page to check your publications and personal metrics. If
                you do not posses an account yet, do it! Its free!
            </Card>
            <Card title="Search for Papers">
                Always stay up with the latest research from your favorite
                authors! All you gotta do to use this feature is signing up for
                your free API key at Scopus!
            </Card>
        </>
    );
};

export default CentralBoard;
