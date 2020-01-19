import React from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends React.Component {
  state = {
    title: ''
  }; //component level state - only live inside this component

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
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

//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
