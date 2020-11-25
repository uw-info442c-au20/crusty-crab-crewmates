import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class PlasticCard extends Component {
    render() {
        return (
            <Card style={{ 
                // box dimenstions
                width: '66px',
                height: "66px",
                // border styles
                borderRadius: "20px",
                borderStyle: "solid",
                borderColor: "#3C9471",
                borderWidth: "3px",
                // background image styles
                backgroundImage: `url(${require("../imgs/recycle.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}>
                <Card.Body style={{
                    // text
                    verticalAlign: "middle"
                }}>
                    <Card.Title style={{ 
                        float: "40%",
                        fontSize: "43px", 
                    }}>{this.props.number}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
