const React = require('react')

class Keypad extends React.Component {

  constructor(){
    super()
    this.handleKeyUp = this.handleKeyUp.bind(this)

  }

  handleKeyUp(){
    console.log('Entering password...')
  }

  render(){
    return(
      <input type="password" onKeyUp={ this.handleKeyUp }/>
    )
  }

}

module.exports = Keypad
