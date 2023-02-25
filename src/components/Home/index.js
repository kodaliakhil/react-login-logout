// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  changeLoginStatus = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  button = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn) {
      return <Logout onClick={this.changeLoginStatus} />
    }
    return <Login onClick={this.changeLoginStatus} />
  }

  render() {
    const {isLoggedIn} = this.state
    const greetingMsg = isLoggedIn ? 'Welcome User' : 'Please Login'
    return (
      <div className="bg-container">
        <div className="box">
          <Message greeting={greetingMsg} />
          {this.button()}
        </div>
      </div>
    )
  }
}

export default Home
