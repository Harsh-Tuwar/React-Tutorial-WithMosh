import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const { onReset, onDelete, onIncreament, counters} = this.props;
        return (
            <div>
                <button className="bt btn-sm btn-success m-2" onClick={onReset}>RESET</button>
                {counters.map(counter => <Counter key={counter.id} id={counter.id} value={counter.value} onDelete={onDelete} onIncreament={() => onIncreament(counter)}/>)}
            </div>
         );
    }
}
 
export default Counters;