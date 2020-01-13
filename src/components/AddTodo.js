import React from 'react';

export default class AddTodo extends React.Component {
  state = {
    title: ''
  }; //component level state - only live inside this component

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add a new Todo...'
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: '10', padding: '5px' }}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
