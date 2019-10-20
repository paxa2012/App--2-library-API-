import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';


class Dashbord extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(url, id) {

        this.props.fetchPopular(url, id);
    }
    componentDidMount() {
        
        this.props.getId(this.props.activeuser.id);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.activeuser.listAPI.map(list => {
                            //console.log(list.database[0]);  
                            if (list.database[0] === undefined) {
                                return (
                                    <div className="col-md-6 col-sm-12 mb-4" key={list.id}>
                                        <div className="card">
                                            <div className="card bg-light">
                                                <div className="card-header"><i className={list.img}></i>{list.name}</div>
                                                <div className="card-body">
                                                    <i className={list.img}></i>
                                                    <div className="card-container mt-4">
                                                        <div className="row no-gutters">
                                                            <div className="card-container-text col-md-7 col-sm-12">
                                                                <h5 className="card-title">{list.name}</h5>
                                                                <p className="card-text">{list.desc}</p>
                                                            </div>
                                                            <div className="card-container-btn col-md-5 col-sm-12">
                                                                <NavLink to={`/newblank/${list.id}`}
                                                                    className="btn btn-primary"
                                                                    onClick={
                                                                        () => {
                                                                            this.handleClick(list.url, list.id)
                                                                }
                                                            }
                                                                >Получить данные</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                );
            }
                            return <Redirect to={`/newblank/${list.id}`} key={list.id} />
                })
            }

                </div>
            </div >
        );
    }
}




export default Dashbord;