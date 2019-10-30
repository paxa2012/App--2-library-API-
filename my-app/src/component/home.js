import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import TdInput from './tdInput';
export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editmode: false , val: {}}
    }
    activeEditMode(user) {
       console.log(user);
        
        this.setState({ editmode: true, val: user})

    }
    deactiveEditMode(user) {
        this.setState({ editmode: false })
        //console.log(user)
        this.props.editUser(user);
    }
    Cancel() {
        this.setState({ editmode: false })


    }
    render() {
        //console.log(this.state.val)
        return (
            <div>
                <div className="container">
                    <div className="users">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Имя</th>
                                    <th scope="col">Фамилия</th>
                                    <th scope="col">О себе</th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.props.allUser.map((user, i = Math.random ) => {
                                        // console.log(user)
                                        
                                            return (
                                                <tr name={user.id} key={i}>
                                                    <TdInput user={user} Cancel={this.Cancel.bind(this)} activeEditMode={this.activeEditMode.bind(this)} deactiveEditMode={this.deactiveEditMode.bind(this)} editmode={this.state.editmode} val={this.state.val} editUser={this.props.editUser} />
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
}
