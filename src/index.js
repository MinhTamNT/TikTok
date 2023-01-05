import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '~/App';
import GlobleStyle from '~/Compontens/GlobleStyle';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobleStyle>
            <App />
        </GlobleStyle>
    </React.StrictMode>,
);

reportWebVitals();
