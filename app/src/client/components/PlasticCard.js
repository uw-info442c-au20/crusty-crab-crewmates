import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class PlasticCard extends Component {
    render() {
        return (
            <Card style={{ 
                width: '66px',
                borderRadius: "20px",
            }}>
                <Card.Body>
                    <Card.Title>{this.props.number}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
