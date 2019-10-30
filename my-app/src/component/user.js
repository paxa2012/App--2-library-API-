import React from 'react';
//import Option from './option';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        //console.log(event.target.value);
        let user = this.props.allUser;
        user.map(u =>  u.id === +event.target.value ?  this.props.activeUser(u) : '')

    }
    render() {

        return (
            <select id="user" onChange={this.onChange}>
                <option value="Выбирите пользователя">Выбирите пользователя</option>
                {
                    this.props.allUser.map(user => {
                        // console.log(user);                        
                        return (
                            <option
                                key={user.id}
                                value={user.id}
                            >
                                {user.name + ' ' + user.lastname}
                            </option>
                        )
                    })

                }

                })
            })
        }
            </select>
        )
    }
}

export default User;