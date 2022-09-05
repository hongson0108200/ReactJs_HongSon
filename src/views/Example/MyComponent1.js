import React from 'react';
// import ChildComponent1 from './ChildComponent1';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

// Chỉ truyền dữ liệu từ thằng cha xuống thằng con chứ không thể truyền từ thằng con cho thằng cha
class MyComponent1 extends React.Component {


    state = {
        arrayJob: [
            { id: '01', title: 'Developers', salary: '500' },
            { id: '02', title: 'Tester', salary: '400' },
            { id: '03', title: 'Projects Manager', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        var Job = this.state.arrayJob;
        Job.push(job)
        this.setState({
            // arrayJob: [...this.state.arrayJob, job]
            arrayJob: Job
        })
    }

    deleteAJob = (job) => {
        var Job = this.state.arrayJob;
        Job = Job.filter(item => item.id !== job.id)
        this.setState({
            arrayJob: Job
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>> run didUpdate', 'prev state', prevState, 'current state', this.state)
    }

    componentDidMount() {
        console.log('>>> run component dit mount')
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <React.Fragment>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrayJob={this.state.arrayJob}
                    deleteAJob={this.deleteAJob}
                />
            </React.Fragment>
        )
    }
}

export default MyComponent1; 