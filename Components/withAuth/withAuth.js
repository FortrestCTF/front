import Router from 'next/router'
import React from "react";

// NON CO | CO | ADMIN
// CLASS => TOUT

const Authorized = (authorized, value) => {
    var user = "";

    if (value.token === "incorrect")
        user = "non-login"
    if (value.token === "correct" && value.admin === 0)
        user = "login";
    if (value.token === "correct" && value.admin === 1)
        user = "admin";
    for (var i = 0; authorized[i]; i++) {
        if (user === authorized[i]) {
            return true;
        }
    }
    return false;
}

/** @brief Allow users the access in certain components
 *  @param Component
 *  @param options object with pathAfterFailure and authorized
 *  @param pathAfterFailure string
 *  @param authorized array ["non-login", "login", "admin"]
*/
const withAuth = (Component = null, options = {}) => {
  class withAuth extends React.Component {
    state = {
      loading: true,
    };
    
    componentDidMount() {
        fetch(
            'http://localhost:4000/auth/isLog', {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        .then((res) => {
            const json = res.json();
            json.then((value) => {
                const vret = Authorized(options.authorized, value);
                console.log(vret);
                if (vret)
                    this.setState({loading: false});
                else
                    Router.push(options.pathAfterFailure || "/");
            })
        })
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div />;
      }

      return <Component {...this.props} />;
    }
  }

  return withAuth;
};

export default withAuth;