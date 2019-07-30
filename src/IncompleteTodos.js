import React, { Component} from 'react'
import { connect } from 'react-redux'
import Todos from './Todos'

class IncompleteTodos extends Component {
 render(){   
  return(
    <div>
      <Todos todos={this.props.notCompleted}/>
    </div>
  )  
 }
}

const mapStateToProps = state => {
  return{
    notCompleted: state.filter(todo => !todo.complete)
  }
}

export default connect(mapStateToProps)(IncompleteTodos)