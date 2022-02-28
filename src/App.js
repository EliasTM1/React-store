import React from 'react';
//  * Componentes
import Header from './components/header/header.component'
//  * Pages
import Hompage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signIn-signOut/signIn-signOut.component';
import CheckOutPage from './pages/checkout/checkout.component';
// * Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
//  * Router 
import { Switch, Route, Redirect } from 'react-router-dom'
//  * Redux
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/users/users.actions'
//  * Reselect
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/users/user.selector'

/*



? Router Notes
* Route is a component that mainly takes 3 props
! In case we decide not tu use exact, router will show all the routes that partially matched
* "exact"     : boolean =  If true, the path need to be exact for the router to show 
* "path"      : string  =  Is the path Where this component will be shown
* "component" : string  =  Is the compone
*/

// * In case you decide to use <Switch><Switch/> 
// ! Only one component will be shown as soon as it matches with. 


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth)

    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* No entiendo que le pasa a mi equipo */}
          <Route exact path='/' component={Hompage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route
            exact
            path='/signIn'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUp />
              )
            }
          />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
