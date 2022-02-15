import React from 'react';

//  * Componentes
import Header from './components/header/header.component'

//  * Pages
import Hompage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signIn-signOut/signIn-signOut.component';
// * Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

//  * Router 
import { Switch, Route } from 'react-router-dom'


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
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        })
      }
    })

  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <div className="App">
            <Route exact path='/' component={Hompage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signIn' component={SignInSignUp} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
