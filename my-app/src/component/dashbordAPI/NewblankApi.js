import React from 'react';

class NewblankApi extends React.Component {
    render() {
        return (
            this.props.allUser.map((u, index) => {
                if (u.id === this.props.activeuser.id) {
                    return (
                        <div className="container" key={index}>
                            <div className="row">
                                {u.listAPI.map((api, index) => {
                                    let id = parseInt(this.props.match.params.id);
                                    if (api.id === id) {
                                        return (
                                            api.id === 3 ?    
                                            <div className="flex-container" key={index}>
                                            {
                                                api.database.map((d, i) => {
                                                    return(
                                                        <div className="col-md-4 col-sm-12" key={i}>
                                                            <div className="card">
                                                                <div className="card-head">{d.author.key}  </div>
                                                                <div className="card-body">{d.timestamp}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div> 
                                        :
                                            <div className="flex-container" key={index}>
                                                {
                                                    api.database.map((d, i) => {
                                                        return(
                                                            <div className="col-md-4 col-sm-12" key={i}>
                                                                <div className="card">
                                                                    <div className="card-head">{d.title}  </div>
                                                                    <div className="card-body">{d.value}<img className="responsive-img" src={`http://image.tmdb.org/t/p/original${d.poster_path}`} alt={d.title} /></div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        );
                                    }
                                })
                                }
                            </div>
                        </div>
                    );
                }
            })
        )

    }
}
export default NewblankApi;