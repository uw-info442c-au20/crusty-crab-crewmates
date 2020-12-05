import React, { Component } from 'react';
import "./Home.css";

export default class Web extends Component {
    render() {
        return (
            <div className="bg" style={{
                backgroundImage: `url(${require("../imgs/recycle-homepage1.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "800px",
                backgroundPosition: "-35% 600%"
            }}>
                <p style={{
                    visibility: "hidden"
                }}>filler cuz this stupid background keeps moving</p>
                <div className="welcome d-flex flex-row" style={{
                    marginTop: "310px",
                    marginLeft: "15%"
                }} >
                    <div style={{
                        maxWidth: "650px"
                    }}>
                        <h1 style={{ color: "#1F7269" }}>Welcome to Sort!</h1>
                        <h1 style={{ color: "#86AFAB" }}>Recyling Made</h1>
                        <h1 style={{ color: "#86AFAB" }}>sorta Easy</h1>
                        <p style={{
                            width: "600px",
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
            </div>
        )
    }
}
