import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo } from '../actions'

const Todos = ({todos, dispatch}) =>(
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={e=> {
      if(e.keyCode == 13){
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    {todos.map(todo => <p key={todo}>{todo}</p>)}
  </div>
)

function mapStateToProps(todos){
  return {
    todos
  }
}

//connect allows us to choose what parts of our state we want to give to our React component
export default connect (mapStateToProps)(Todos)
