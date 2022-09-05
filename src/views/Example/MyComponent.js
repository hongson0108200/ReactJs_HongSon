import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'Hồng Sơn',
        age: 20,
    }

    handleOnChangeName = event => {
        this.setState({
            name: event.target.value
        })
    }

    handOnClick = () => {
        alert('Bạn đã nhấn vào click me')
    }

    render() {
        return (
            <React.Fragment>
                <div className='first'>
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    đang học ReactJs là {this.state.name}
                    {console.log('Tôi là ;', this.state.name)}
                </div>
                <div className='second'>
                    Tôi năm nay {this.state.age}
                </div>
                <div className='third'>
                    <button onClick={() => this.handOnClick()}>Click me</button>
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent;