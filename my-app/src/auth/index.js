import React from 'react';
import auth0 from 'auth0-js';
import { withRouter } from 'react-router-dom';

const { Provider, Consumer: AuthConsumer } = React.createContext({
    isAuthorized: false
});
class AuthProvider extends React.Component {
    state = { isAuthorized: false }

    auth0 = new auth0.WebAuth({
        //name: 'google-oauth2',
        domain: 'dev-mjm9k5zf.auth0.com',
        clientID: 'orS5ROHBkeX1K2dJMK9uQuiasKTHt21k',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid'
    })


    authorized = () => {
        this.auth0.authorize();

    };
    handleAuthentication = () => {
        this.auth0.parseHash((err, authRewsult) => {
            if (authRewsult && authRewsult.accessToken) {
                localStorage.setItem('token', authRewsult.accessToken)
                this.setState({ isAuthorized: true }, () => {
                    this.props.history.push('/home')
                })
            }
            else {
                console.log(err)
            }
        })
    };


    render() {
        const { isAuthorized } = this.state
        return (
            <Provider value={{ isAuthorized, authorized: this.authorized, handleAuthentication: this.handleAuthentication }}>
                {this.props.children}
            </Provider>
        );
    }

}
export function withAuth(WrappedComponent) {
    return class AuthHOC extends React.Component {
        render() {
            return (
                <AuthConsumer>
                    {contextprops => (
                        <WrappedComponent {...contextprops} {...this.props} />
                    )}
                </AuthConsumer>
            );
        }
    }

}

const AuthProviderwithRouter = withRouter(AuthProvider);
export { AuthProviderwithRouter as AuthProvider };