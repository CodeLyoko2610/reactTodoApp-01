import React from 'react';
import './App.css';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

//import components
import About from './components/pages/About';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  state = {
    todos: []
  };

  //Get todos from the "fake server" once the component is mounted
  //componentDidMount() is a lifecycle method, just like render()
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({
          todos: res.data
        });
      });
  }

  //Toggle todo's complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete todo
  delTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
      });
  };

  //Add todo
  //NOTICE: due to jsonplaceholder api settings, id is automatically changed to 201, even though set differently
  //Will cause problem when add new todos (same id) and delete todos (todos with same id deleted)
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        id: uuid.v4(),
        title,
        completed: false
      })
      .then(res => {
        this.setState({
          todos: [...this.state.todos, res.data]
        });
      });
  };

  render() {
    //console.log(this.state.todos); //Output information from the state

    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />

            <Route
              exact
              path='/'
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />{' '}
                </React.Fragment>
              )}
            />

            <Route path='/about' component={About} />
            {/* Take information from state to component as a prop */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
