import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from '../forms/LoginForm'
import { login } from '../../actions/auth'

class LoginPage extends Component {
    submit = (data) => 
        this.props.login(data).then(() => this.props.history.push('/'))

    render() {
        return (
            <React.Fragment>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit} />
            </React.Fragment>
        )
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
}

export default connect(null, { login })(LoginPage)