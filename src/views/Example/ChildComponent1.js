import React from 'react';

// class ChildComponent1 extends React.Component {
//     render() {
//         var { name, age, arrayJob } = this.props;
//         console.log(this.props);
//         return (
//             <div className='job-lists'>
//                 {
//                     arrayJob.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     }
//                     )
//                 }
//             </div>
//         )
//     }
// }

const ChildComponent1 = (props) => {
    var { arrayJob } = props;
    console.log(props);
    return (
        <div className='job-lists'>
            {
                arrayJob.map((item, index) => {
                    if (item.salary >= 500) {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary} $
                            </div>
                        )
                    }
                }
                )
            }
        </div>
    )
}

export default ChildComponent1;