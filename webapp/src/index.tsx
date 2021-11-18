import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import CentralBoard from './assets/Components/CentralBoard/CentralBoard';
import './assets/index.scss';
import AuthorPage from './routes/AuthorPage';
import FormSearch from './routes/FormSearch';

const Application: React.FunctionComponent<Record<string, unknown>> = () => {
    return <CentralBoard />;
};

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Application />} />
                <Route path="author" element={<AuthorPage />} />
                <Route path="form" element={<FormSearch />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root')
);
