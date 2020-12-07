import React, { Component } from 'react';
import "../pages/Home.css";

export default class DetailsModal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.onEscape, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.onEscape, false);
      }

    onEscape = (e) => {
        if (e.key == "Escape") {
            this.props.onClose();
        }
    }

    render() {
        const { show, datum, number } = this.props;
        const showHideClassName = show ? "my-modal display-block" : "my-modal display-none";

        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <p onClick={this.props.onClose} style={{
                        position: "fixed",
                        left: "5%",
                        top: "5%",
                        fontSize: "30px",
                        cursor: "pointer"
                    }}>X</p>
                    <div id="details-container" style={{
                        marginLeft: "15vw",
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
                        }} alt="pvc tube" src={require(`../imgs/recycle-img-${number}.png`)} />
                    </div>
                </section>
            </div>
        );
    }
}
