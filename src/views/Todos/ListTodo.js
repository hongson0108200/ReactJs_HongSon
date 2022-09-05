import React from 'react';
import AddComponent from './AddComponent';
import Component from './Component';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        TodoList: [
            { id: '01', title: 'Todo_React' },
            { id: '02', title: 'Todo_Java' },
            { id: '03', title: 'Todo_Hongson' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        var newAddTodo = this.state.TodoList;
        newAddTodo.push(todo);
        this.setState({
            TodoList: newAddTodo
        })
        toast.success("Thêm mới thành công!")
    }

    deleteATodo = (todo) => {
        var deleteATodo = this.state.TodoList;
        deleteATodo = deleteATodo.filter(item => item.id !== todo.id)
        this.setState({
            TodoList: deleteATodo
        })
        toast.success("Xóa thành công!")
    }

    render() {
        return (
            <>
                <p>
                    Hello World <b>Lê Hồng Sơn</b> học ReactJs
                </p>
                <AddComponent
                    addNewTodo={this.addNewTodo} />
                <Component
                    TodoList={this.state.TodoList}
                    deleteATodo={this.deleteATodo}
                />
            </>
        )
    }
}

export default ListTodo;