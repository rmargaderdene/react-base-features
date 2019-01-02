import React, { Component } from 'react';

// stateless component
// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props} />
//         </div>
//     )
// }

// // stateful component
// const withClass = (WrappedComponent, className) => {
//     return class extends Component {
//         render() {
//             return (
//                 <div className={className}>
//                     <WrappedComponent {...this.props} />
//                 </div>
//             )
//         }
//     }
// }

// stateful component with forwardRef function
const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardRef} {...this.props} />
                </div>
            )
        }
    }

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardRef={ref} />
    });
}

export default withClass;