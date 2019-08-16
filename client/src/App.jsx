import React from 'react';
import axios from 'axios';
import Login from './Login'
import Signup from './Signup'
import Shelters from './Shelters'
import Meals from './Meals'
import Map from './Map'
import ShelterMap from './ShelterMap'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user: null,
      errorMessage: '',
      apiDate: null,
      meals: []
     
    }
    this.checkForLocalToken = this.checkForLocalToken.bind(this);
    this.liftToken = this.liftToken.bind(this);
    this.logout = this.logout.bind(this);
  }

  checkForLocalToken() {
    var token = localStorage.getItem('mernToken')
    if (!token || token === 'undefined') {
      //  token is invalid or missing
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      })
    } else {
      // we found a token in localStorage, verify it
      axios.post('/auth/me/from/token', { token })
        .then(res => {
          if (res.data.type === 'error') {
            localStorage.removeItem('mernToken')
            this.setState({
              token: '',
              user: null,
              errorMessage: res.data.message
            })
          } else {
            localStorage.setItem('mernToken', res.data.token);
            this.setState({
              token: res.data.token,
              user: res.data.user,
              errorMessage: ''
            }, this.displayAllMeals)
          }
        })
    }
  }

  liftToken(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    // Remove token from localStore
    localStorage.removeItem('mernToken')
    // Remove user and token from state
    this.setState({
      token: '',
      user: null
    })
  }

  componentDidMount() {
    this.checkForLocalToken();
    console.log("trying to display meals")
    let config = {
        headers: {
            "X-App-Token": "XUdLH5yC5LHLJ7qdLtMw62GVe"
        }
    }
    axios.get('https://data.seattle.gov/resource/hmzu-x5ed.json?$limit=10', config).then( result => {
    this.setState({
    meals: result.data
          })
        })
  }

  displayAllMeals(e) {
    console.log("trying to display meals")
    let config = {
        headers: {
            "X-App-Token": "XUdLH5yC5LHLJ7qdLtMw62GVe"
        }
    }
    axios.get('https://data.seattle.gov/resource/hmzu-x5ed.json?$limit=10', config).then( result => {
    this.setState({
    meals: result.data
          })
        })
      }
    

  render() {
    var user = this.state.user
    var contents = ''
    if (user) {
      contents = (
        <div className="Login">
          <p>Hello, {user.name}</p>
          <p onClick={this.logout}>Logout</p>
        {/*<Meals meals={this.state.meals}/>*/}
        <Router>
        <nav>
        <Link to='/'>Home</Link> |
        <Link to='/Meals'>Find Meals</Link> |
        <Link to='/Map'>View on Map</Link> |
        <Link to='/Shelters'>Find Shelters</Link> |
        <Link to='/ShelterMap'>View on map</Link>
        </nav>
        <Route exact path = "/Shelters" render={() => (
          <Shelters />
        )} />
        <Route exact path = "/ShelterMap" render={() => (
          <ShelterMap />
        )} />
        <Route exact path = "/Map" render={() => (
          <Map />
          )} />
        <Route exact path = "/Meals" render={() => (
          <Meals meals={this.state.meals} />
        )} />
      </Router>
        </div>
      )
    } else {
      contents = (
        <div className="logout">
          <p>PLease signup or login</p>

          <Login liftToken={this.liftToken} />
          <Signup liftToken={this.liftToken} />
        </div>
      );
    }
    return (
      <div className="App">
        {contents}
      </div>

      
     

    );
  }
}










export default App;
