import React, { Component } from 'react';
import PlasticCard from '../components/PlasticCard';
import "./Home.css";
import Web from './Web';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1,2,3,4,5,6,7],
        }
    }

    render() {
        return (
            <div className="bg">
                {/* Mobile version */}
                <div id="mobile" className="bg">
                    <div id="bg-bottom" className="bg">
                        <h1 className="text-center text-white">Sort</h1>
                        <div style={{
                            position: "relative",
                            zIndex: "1",
                            backgroundColor: "white",
                            borderRadius: "32px",
                            borderStyle: "solid",
                            borderWidth: "0.5px",
                            borderColor: "grey"
                        }} className="card-deck w-75 h-75 ml-auto mr-auto">
                            <p style={{
                                color: "#3C9471",
                                fontSize: "27px"
                            }} className="text-left ml-3">Select a plastic to learn more</p>
                            <p style={{
                                color: "#1F7269",
                                fontSize: "20px"
                            }} className="text-left ml-3">Want to know how to recycle something? Click on the plastic code of the thing you’re recycling to understand what you can do with it!</p>
                            <div style={{
                                display: 'grid',
                                justifyContent: "space-evenly",
                                gridTemplateColumns: "auto auto auto"
                            }}>
                                {this.state.data.map(d => <PlasticCard key={d} number={d} />)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Web version */}
                <div id="web" className="bg">
                    <Web />
                </div>
            </div>
        )
    }
}
