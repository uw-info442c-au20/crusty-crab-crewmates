import React, { Component } from 'react'

export default class PlasticCardWeb extends Component {

    render() {
        return (
            <div onClick={this.props.onClick} className="mr-4" style={{
                borderRadius: "20px",
                borderColor: "#3C9471",
                borderWidth: "2px",
                borderStyle: "solid",
                cursor: "pointer"
            }}>
                <img alt={"recylcle card" + this.props.number} style={{
                    maxWidth: "7vw",
                    width: "auto",
                    height: "auto"
                }} src={require("../imgs/web-recycle-" + this.props.number + ".png")}></img>
            </div>
        )
    }
}
