import React,{Component} from 'react';

class TodosItem extends Component {
  
    render() {
        console.log(this.props);
        return (
          <li className="ProjectItem">
          <strong>{this.props.todos.title}</strong> 
          </li>
        );
    }
}

export default TodosItem;
