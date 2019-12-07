import React, { Component } from 'react';
import Projects from './Components/Projects';
import $ from 'jquery'
import uuid from 'uuid';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    };
  }
  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ todos: data }, function () {
          console.log(this.state);
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }

    })
  }
  componentDidMount() {
    this.setState({
      projects: [{
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web devlopement'
      },
      {
        id: uuid.v4(),
        title: 'Social Website',
        category: 'Mobile devlopement'
      },
      {
        id: uuid.v4(),
        title: 'E - Commerce Website',
        category: 'Web devlopement'
      }]
    });
    this.getTodos();
  }
  handleAddedItems(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }
  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddedItems.bind(this)} />
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
        <hr/>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}


export default App;
