import React from 'react';
class TdInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: { id: '', name: '', lastname: '', about: '', listAPI: {} } }

    }
    componentDidMount() {
        // console.log(this.props);

        const { user } = this.props;
        this.setState({
            value: {
                id: user.id,
                name: user.name,
                lastname: user.lastname,
                about: user.about,
                listAPI: user.listAPI
            }
        })

    }
    handleChangeName(e) {
        this.setState({
            value:
            {
                id: this.state.value.id,
                name: e.target.value,
                lastname: this.state.value.lastname,
                about: this.state.value.about,
                listAPI: this.state.value.listAPI
            }
        })
    }
    handleChangeLastName(e) {
        this.setState({
            value:
            {
                id: this.state.value.id,
                name: this.state.value.name,
                lastname: e.target.value,
                about: this.state.value.about,
                listAPI: this.state.value.listAPI
            }
        })

    }
    handleChangeAbout(e) {
        this.setState({
            value:
            {
                id: this.state.value.id,
                name: this.state.value.name,
                lastname: this.state.value.lastname,
                about: e.target.value,
                listAPI: this.state.value.listAPI
            }
        })
    }
    render() {
        const { user, activeEditMode, Cancel, deactiveEditMode, editmode } = this.props;
        return (
            editmode ?
                <>
                    {
                        user.id === this.props.val.id ?
                            <>
                                <td>{user.id}</td>
                                <td><input type="text" name="name" value={this.state.value.name} onChange={this.handleChangeName.bind(this)} /></td>
                                <td><input type="text" name="lastname" value={this.state.value.lastname} onChange={this.handleChangeLastName.bind(this)} /></td>
                                <td><input type="text" name="about" value={this.state.value.about} onChange={this.handleChangeAbout.bind(this)} /></td>
                                <td>
                                    <button className="btn btn-outline-primary" disabled><i className="fas fa-edit"></i></button>
                                    <button className="btn btn-outline-secondary" onClick={() => deactiveEditMode(this.state.value)}><i className="fas fa-save"></i></button>
                                    <button className="btn btn-outline-dark" onClick={() => Cancel()}>Cancel</button>
                                </td>
                                 </> :
                            <>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>{user.about}</td>
                                <td>
                                    <button className="btn btn-outline-primary" onClick={() => { activeEditMode(user) }}><i className="fas fa-edit"></i></button>
                                    <button className="btn btn-outline-secondary" disabled><i className="fas fa-save"></i></button>
                                    <button className="btn btn-outline-dark" disabled>Cancel</button>
                                </td>
                            </>
                    }
                </>
                :
                <>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.about}</td>
                    <td>
                        <button className="btn btn-outline-primary" onClick={() => { activeEditMode(user) }}><i className="fas fa-edit"></i></button>
                        <button className="btn btn-outline-secondary" disabled><i className="fas fa-save"></i></button>
                        <button className="btn btn-outline-dark" disabled>Cancel</button>
                    </td>
                </>

        );
    }
}
export default TdInput;