import React, { Component } from 'react';
import PlasticCard from '../components/PlasticCard';
import "./Home.css";
import Web from './Web';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1,2,3,4,5,6],
        }
    }

    render() {
        return (
            <div className="bg">
                {/* Mobile version */}
                <div id="mobile" className="bg" style={{
<<<<<<< Updated upstream
                    backgroundImage: url(${require("../imgs/recycle-bg1.PNG")}),
=======
                    backgroundImage: `url(${require("../imgs/recycle-bg1.PNG")})`,
>>>>>>> Stashed changes
                    backgroundPosition: "50% 5%",
                    backgroundRepeat: "repeat"
                }}>
                    <div className="bg" style={{
<<<<<<< Updated upstream
                        backgroundImage: url(${require("../imgs/recycle-bg2.PNG")}),
=======
                        backgroundImage: `url(${require("../imgs/recycle-bg2.PNG")})`,
>>>>>>> Stashed changes
                        backgroundPosition: "50% 95%",
                        backgroundRepeat: "repeat",
                    }}>
                        <h1 className="text-center">Sort</h1>
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