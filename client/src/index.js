import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FavoriteMoviesProvider } from './context/FavoriteMoviesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <FavoriteMoviesProvider>
        <App />
    </FavoriteMoviesProvider>);

