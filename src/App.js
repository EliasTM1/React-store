import React from 'react';

//  * Componentes
import Header from './components/header/header.component'

//  * Pages
import Hompage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/signIn-signOut/signIn-signOut.component';
// * Firebase
import { auth } from './firebase/firebase.utils'

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

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
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
