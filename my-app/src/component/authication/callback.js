import React from 'react';
import { withAuth } from '../../auth';

class Callback extends React.Component {
    componentDidMount(){
        const { handleAuthentication } = this.props;
        if(handleAuthentication){
            handleAuthentication()
        }
    }
    render() {
        return (
            <div className="movetoadduswr">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}
export default withAuth(Callback);