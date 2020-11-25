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
            <div style={{
                backgroundColor: "green"
            }}>
                <h1 className="text-center">Sort</h1>
                <div style={{
                    position: "relative",
                    zIndex: "1",
                    backgroundColor: "white",
                    borderRadius: "32px"
                }} className="card-deck w-75 h-75 ml-auto mr-auto">
                    <p style={{
                        color: "#3C9471",
                        fontSize: "27px"
                    }} className="text-left ml-3">Select a plastic to learn more</p>
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