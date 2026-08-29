import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold">404 - Not Found</h1>
            <p className="mt-4">This is Not Found Page.</p>
            <Link to="/" className="btn btn-primary mt-4">Go Home</Link>
        </div>
    );
};

export default NotFound;