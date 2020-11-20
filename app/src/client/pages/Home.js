import React, { Component } from 'react';
import PlasticCard from '../components/PlasticCard';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1,2,3,4,5,6],
        }
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Sort</h1>
                <div className="card-deck rounded-lg border border-dark w-75 h-75 ml-auto mr-auto">
                    <p className="text-left">Select a plastic to learn more</p>
                    <div style={{
                        display: 'grid',
                        justifyContent: "space-evenly",
                        gridTemplateColumns: "auto auto auto" 
                    }}>
                        {this.state.data.map(d => <PlasticCard key={d} number={d} />)}
                    </div>
                </div>
            </div>
        )
    }
}