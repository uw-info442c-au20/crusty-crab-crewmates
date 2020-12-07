import React, { Component } from 'react';
import "./Home.css";
import PlasticCardWeb from "../components/PlasticCardWeb";
import * as d3 from 'd3';
import DetailsModal from "../components/DetailsModal";

export default class Web extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recycleNumber: "",
            data: "",
            showModal: false,
        }
    }

    componentDidMount() {
        d3.tsv(require('../data/data.tsv'), d3.autoType).then((data) => {
            console.log(data)
            this.setState({ data });
        });
    }

    changeRecycleNumber = (recycleNumber) => {
        this.setState({ 
            recycleNumber,
            showModal: true 
        }, () => console.log(this.state));
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        const { data, recycleNumber } = this.state;

        const cards = [];
        for (let i = 1; i <= 7; i++) {
            cards.push(<PlasticCardWeb onClick={() => this.changeRecycleNumber(i)} key={i} number={i} />);
        }

        let datum = "";
        if (data) {
            datum = data.find(d => d.Grade === recycleNumber);
        }

        return (
            <div className="bg" style={{
                backgroundImage: `url(${require("../imgs/recycle-homepage1.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "800px",
                backgroundPosition: "-15vw -30vh"
            }}>
                <div className="bg">
                    <p style={{
                        visibility: "hidden"
                    }}>filler cuz this stupid background keeps moving</p>
                    <div id="menu" className="d-flex flex-row" style={{
                        marginLeft: "60vw",
                        width: "50vw"
                    }}>
                        <a href="#welcome" className="mr-4">Home</a>
                        <a href="#our-goal" className="mr-4">Goal</a>
                        <a href="#how-were-gonna-do-it" className="mr-4">Process</a>
                        <a href="#process" className="mr-4">Get Started</a>
                    </div>
                    <div id="welcome" className="d-flex flex-row" style={{
                        marginTop: "310px",
                        marginLeft: "15vw"
                    }} >
                        <div style={{
                            maxWidth: "650px"
                        }}>
                            <h1 style={{ color: "#1F7269"}}>Welcome to Sort!</h1>
                            <h1 style={{ color: "#86AFAB"}}>Recyling Made</h1>
                            <h1 style={{ color: "#86AFAB" }}>sorta Easy</h1>
                            <p style={{
                                width: "40vw",
                            }}>We know you want to help recycle, but doing it well is hard!
                            Easily learn how to make the right sortment and confindently
                            freethrow your plastics into the correct bin</p>
                        </div>
                        <img style={{
                            maxWidth: "500px",
                            width: "auto",
                            height: "auto"
                        }} alt="fun-recycling" src={`${require("../imgs/recyclePpl.png")}`} />
                    </div>
                    <div id="our-goal" className="d-flex flex-row" style={{
                        marginLeft: "15vw"
                    }}>
                        <img alt="person speaking green background" src={require("../imgs/our-goal.svg")} />   
                        <div id="our-goal-text" className="text-center" style={{
                            maxWidth: "600px",
                            width: "auto",
                            height: "auto",

                            marginTop: "8vh"
                        }}>
                            <h1 style={{ color: "#1F7269" }}>Our Goal</h1>
                            <p>Our goal is to help reduce recycling error among younger individuals 
                                in the us, cause no one really knows
                                 how to recyce ya feel thgere should be more</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row mt-5" id="how-were-gonna-do-it" style={{
                        marginLeft: "12vw"
                    }}>
                        <img alt="recycle bin blue" src={require("../imgs/how-were-gonna-do-it.svg")}/>
                        <div className="text-center" id="how-text" style={{
                            maxWidth: "40vw",
                            width: "auto",
                            height: "auto",

                            marginTop: "8vh"
                        }}>
                            <h1 style={{ color: "#1F7269" }}>How we’re gonna do it</h1>
                            <p>Our goal is to help reduce recycling error among younger 
                                individuals in the U.S, cause no one really knows how to
                                 recyce ya feel thgere should be moreOur goal is to hel
                                 p reduce recycling error among younger individuals in the us, c
                                 ause no one really knows how to recyce ya feel thgere should be more</p>
                        </div>
                    </div>
                    <div id="process" className="mb-5" style={{ 
                        marginLeft: "15vw",
                        marginTop: "8vh"
                    }}>
                        <h1 style={{ color: "#1F7269" }}>Wait, Plastics have codes?</h1>
                        <p style={{
                            width: "40vw"
                        }}>
                            Just like people, not all plastics are the same.
                            Depending on where you live, certain plastics are not recyclable.
                            Check out our handy guide to learn more about the different types of plastics!
                        </p>
                        <div className="d-flex flex-row mt-5">
                            {cards}
                        </div>
                    </div>
                    {datum ? (<DetailsModal onClose={() => this.closeModal()} show={this.state.showModal} datum={datum} 
                        number={this.state.recycleNumber} />) : ""}
                    {/* <div style={{
                        width: "100vw",
                        backgroundImage: `url(${require("../imgs/recycle-homepage2.png")})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100vw",
                        backgroundPosition: "0vw -20vh"
                    }}>
                        <div style={{
                            marginLeft: "20vw",
                            marginTop: "10vh",
                            height: "100vh",
                        }} className="details d-flex flex-row">
                            <div style={{
                                marginTop: "30vh"
                            }}>
                                <h2 style={{
                                    color: "#18796A"
                                }}>{datum.PlasticName + " (" + datum.PlasticAbv + ")"}</h2>
                                <p style={{
                                    width: "40vw"
                                }}>{datum.HowToRecycle}</p>
                            </div>
                            <img style={{
                                maxWidth: "20vw",
                                maxHeight: "20vw",
                                width: "auto",
                                height: "auto",
                                marginTop: "25vh"
                            }} alt="pvc tube" src={require("../imgs/recycle-img-3.png")} />
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
