import React from 'react'
import Router from 'next/router'

class Logout extends React.Component
{
    componentDidMount() {
        fetch(
            'http://localhost:4000/auth/logout', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        .then((res) => {
            Router.push("/");
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render () {
        //LOGOUT DISPLAY SPINNER FOR EXAMPLE
        return (<></>)
    }
}

export default Logout;