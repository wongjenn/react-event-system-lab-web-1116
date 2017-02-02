const React = require('react')

class EyesOnMe extends React.Component {
  constructor(){
    super()
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)

  }

  handleFocus(){
    console.log('Good!')
  }

  handleBlur(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <button type="text" onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
    )
  }

}

module.exports = EyesOnMe
