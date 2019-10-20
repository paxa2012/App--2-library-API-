import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
export const Home = (props) => {
    const { allUser, activeUser } = props
    //console.log(allUser);
    return (
        <div>
           <div className="container">
                <div className="users">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Имя</th>
                                <th scope="col">Фамилия</th>
                                <th scope="col">О себе</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                allUser.map(user => {
                                   // console.log(user)
                                    return (
                                        <tr key={user.id} onClick={()=> activeUser(user)}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.about}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="movetoadduswr h-20vh">
                    <NavLink to="/user" className="btn btn-primary" >Добавить пользователя</NavLink>
                </div>
            </div>
        </div>
    );
}
