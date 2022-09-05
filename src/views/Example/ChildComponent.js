import React from 'react';
import './Demo.scss';

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('CLick delete: ', job)
        this.props.deleteAJob(job)
    }
    render() {
        var { arrayJob } = this.props;
        var { showJobs } = this.state;
        var check = showJobs === true ? 'showJobs = true' : 'showJobs = false'
        return (
            <React.Fragment>
                {showJobs === false ?
                    <div>
                        <button className='btn-show'
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <React.Fragment>
                        <div className='job-lists'>
                            {
                                arrayJob.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                }
                                )
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default ChildComponent;