import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import CentralBoard from './assets/Components/CentralBoard/CentralBoard';
import './assets/index.scss';

const Application: React.FunctionComponent<Record<string, unknown>> = () => {
    return <CentralBoard />;
};

ReactDOM.render(
    <StrictMode>
        <Application />
    </StrictMode>,
    document.getElementById('root')
);
