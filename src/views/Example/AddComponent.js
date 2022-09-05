import React from "react";

class AddComponent extends React.Component {

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault() // ngăn chặn load lại trang 
        if (!this.state.title || !this.state.salary) {
            alert('Không được để trống title hoặc salary')
        }
        console.log('Click me input', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: '',
        })
    }

    state = {
        title: '',
        salary: '',
    }

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's Title</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)} />
                <br />
                <label htmlFor="lname">Salary</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br />
                {/* <input type="submit" value="Submit" /><br /> */}
                <button
                    type='submit'
                    onClick={(event) => this.handleClick(event)}
                >
                    Click me
                </button>
            </form>
        )
    }
}
export default AddComponent;