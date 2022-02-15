import React from 'react';
//  * Components
import SignIn from '../../components/sign-in/signIn.component'
import SignUp from '../../components/sign-up/signUp.component'
//  * Styles
import './signIn-signOut.styles.scss'


const SignInSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)


export default SignInSignUp