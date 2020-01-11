import React from 'react';

export default class AddTodo extends React.Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add a new Todo...'
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
