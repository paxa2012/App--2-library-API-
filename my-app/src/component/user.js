import React from 'react';
//import Option from './option';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = { value: '1', val: [] };
    }
    onChange(event) {

        this.setState({ value: event.target.value });
        //  console.log(this.state.value);

        // this.props.activeUser(this.state.val)
    }
   /* componentWillUpdate() {
        //this.props.activeUser(this.state.val)
    }*/

    render() {

        return (
            <select id="user" onChange={this.onChange}>
                <option value="Выбор пользователя">Выбор пользователя</option>
                {/*
                    this.props.allUser.map(user => {
                        let val = user.name + ' ' + user.lastname === this.state.value;
                        if (val) {
                           // this.setState({ val: user })
                        }
                        return (
                            <option
                                key={user.id}
                                value={user.name + ' ' + user.lastname}
                                onClick={() => this.props.activeUser(user)}
                            >
                                {user.name + ' ' + user.lastname}
                            </option>
                        );


                    })
                */}

            </select>

        )
    }
}

export default User;