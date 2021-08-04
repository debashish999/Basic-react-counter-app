import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
    
    render() { 


        const {counters, onReset, onIncreament, onDelete} = this.props;

        return (
            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={onReset}>Reset</button>
                {counters.map(counter =>
                    <Counter 
                    key = {counter.id} 
                    onDelete={onDelete}
                    // value={counter.value}
                    // id = {counter.id}
                    counter= {counter}

                    onIncreament = {onIncreament}
                    >
                        <h4>Counter #{counter.id}</h4>
                        </Counter>
                )}
            </div>
          );
    }
}

export default Counters;
