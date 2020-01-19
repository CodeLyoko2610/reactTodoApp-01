import React from 'react';
import './App.css';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import components
import About from './components/pages/About';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Focus when coding',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Plan ahead what to say',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Less social media, more active things',
        completed: false
      }
    ]
  };

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
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //Add todo
  addTodo = title => {
    let newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
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
