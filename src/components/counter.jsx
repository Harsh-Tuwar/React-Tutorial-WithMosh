import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return ( 
            <div>
                <span className={this.getBadgeClasses()}>{this.doHarsh()}</span>
                <button onClick={() => (this.props.onIncreament(this.props.counter))} className="btn btn-secondary btn-sm">Increment</button>
                <button className="btn btn-sm btn-danger m-2" onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </div>
         );
    } 

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.value === 0 ? "warning" : "primary";
        return classes;
    }

    doHarsh() {
        const { value } = this.props;
        return value === 0 ? "ZERO" : value;
    }
}
 
export default Counter;