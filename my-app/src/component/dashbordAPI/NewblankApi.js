import React from 'react';

class NewblankApi extends React.Component {
    render() {
        return (
            <div className="container" >
                <div className="row">
                    {
                        
                        this.props.allUser.map(u => {
                            return (
                                u.listAPI.map((api, index) => {
                                    let id = parseInt(this.props.match.params.id);
                                    if (api.id === 2) {
                                        //console.log(api)
                                        return (
                                            <div className="flex-container" key={index}>
                                                {
                                                    api.database.map((f, i) => {
                                                        return (
                                                            <div className="col-md-4 col-sm-12" key={i}>
                                                                <div className="card-film">
                                                                    <div className="card-head">{f.title}</div>
                                                                    <div className="card-body"><img className="responsive-img" src={`http://image.tmdb.org/t/p/original${f.poster_path}`} alt={f.title} /></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        );
                                    }
                                    else if (api.id === 1) {
                                        console.log(api)
                                        return (
                                            <div className="flex-container" key={index}>
                                                {
                                                    api.database.map((c, i) => {
                                                        //console.log(c.name)
                                                        return (
                                                            <div className="col-md-4 col-sm-12" key={i}>
                                                                <div className="card-curency">
                                                                    <div className="card-head">{c.name}</div>
                                                                    <div className="card-body">{c.value}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        );
                                    }

                                })
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
export default NewblankApi;