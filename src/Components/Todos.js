import React, { Component } from 'react';
import TodosItem from './TodosItem';

class Todos extends Component {  
  render() {
    let todosItems;
    if (this.props.todos) {
        todosItems = this.props.todos.map(todo => {
        return (<TodosItem key={todo.title}  todos={todo} />);
      });
    }
    return (
      <div className="Todos">
        <h3>Todos List</h3>
        <br/>  
        {todosItems}
      </div>
    );
  }
}

Todos.propTypes={
   // todos:React.PropTypes.array
}
export default Todos;
