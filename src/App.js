import React from 'react';
import './App.css';

//import components
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Focus when coding',
        completed: false
      },
      {
        id: 2,
        title: 'Plan ahead what to say',
        completed: false
      },
      {
        id: 3,
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

  render() {
    //console.log(this.state.todos); //Output information from the state

    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />{' '}
          {/* Take information from state to component as a prop */}
        </div>
      </div>
    );
  }
}

export default App;
