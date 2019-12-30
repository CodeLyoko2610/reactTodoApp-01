import React from 'react';

class Todos extends React.Component {
    render() {
        console.log(this.props.todos); //Output the props passed to the component
        return (
            <div>
                <h1>Todos</h1>
            </div>
        )
    }
}

export default Todos;