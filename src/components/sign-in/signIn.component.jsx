import React from 'react';
//  * Firebase
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
//  * Components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
//  * Styles
import './signIn.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault()



        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        label='email'

                    />
                    <FormInput
                        handleChange={this.handleChange}
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        label='password'

                    />
                    <div className='buttons'>
                        <CustomButton
                            type='submit'
                            value='Submit Form'>
                            Hola
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}Sign In with Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div >
        )
    }
}

export default SignIn