import React from 'react';
import { toast } from 'react-toastify';
class AddComponent extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClick = (event) => {
        if (!this.state.title) {
            toast.error("Chưa nhập dữ liệu!")
            return;
        }
        event.preventDefault()
        var todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type='button' className='add'
                    onClick={(event) => this.handleClick(event)}>
                    Add
                </button>
            </form>
        )
    }
}

export default AddComponent;