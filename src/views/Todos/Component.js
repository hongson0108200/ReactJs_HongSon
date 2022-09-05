import React from 'react';
import './ListTodo.scss';

class Component extends React.Component {

    handleDelete = (todo) => {
        console.log('CLick delete: ', todo)
        this.props.deleteATodo(todo);
    }
    handleEditTodo = (todo) => {
        this.setState({
            editTodo: todo,
        })
    }
    render() {
        var { TodoList } = this.props;
        var editTodo = this.props.TodoList;
        // console.log('>>> check editTodo', editTodo);
        // // var { TodoList, editTodo } = this.state;
        var isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(isEmptyObj)
        return (
            <>
                <div className='list-todo-content'>
                    {
                        TodoList && TodoList.length > 0 &&
                        TodoList.map((item, index) => {
                            return (
                                <div key={item.id} className='todo-child'>
                                    {/* {isEmptyObj === false ? */}
                                    <span>
                                        {index + 1} - {item.title}
                                    </span>
                                    {/* :
                                    <span>
                                        {index + 1} - <input value={editTodo.value} />
                                    </span>
                                } */}
                                    <button className='edit'
                                        onClick={() => this.handleEditTodo(item)}>
                                        Edit
                                    </button>
                                    <button className='delete'
                                        onClick={() => this.handleDelete(item)}>
                                        Delete
                                    </button>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </>
        )
    }
}

export default Component;