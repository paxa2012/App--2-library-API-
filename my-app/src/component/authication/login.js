import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { withAuth } from '../../auth';

export default withAuth(({ isAuthorized, authorized }) =>
    isAuthorized ? <Redirect to="/home" /> :
        <div className="container h-100">
            <div className="movetoadduswr m-auto">
                <h2>Вы не авторизованы</h2>
                <NavLink to="/login" className="btn btn-primary" onClick={authorized} >Авторизоватся</NavLink>
            </div>
        </div>
);
