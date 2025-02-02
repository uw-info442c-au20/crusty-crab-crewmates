import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import "./Details.css";
import * as d3 from 'd3';

export default function Details() {
    const { id } = useParams();

    // similar to setting state
    const [data, setData] = useState("");
    const [showMore, toggleShowMore] = useState(false);

    // similar to componentDidMount
    useEffect(() => {
        d3.tsv(require("../data/data2.tsv")).then((data) => {
            const materialData = data.find(d => d.Grade === id);
            const foundIn = materialData.FoundIn.split(",");
            let foundInWithSpaces = foundIn[0];
            for (let i = 1; i < foundIn.length; i++) {
                foundInWithSpaces += " " + foundIn[i];
            }
            data.FoundIn = foundInWithSpaces;
            setData(materialData);
        })
    });

    const number = {};
    for (let i = 1; i < 10; i++) {
        number[i] = "0" + i;
    }

    return (
        <div id="bg-top" className="bg">
            <div id="recycle-img" className="bg" style={{
                backgroundImage: `url(${require("../imgs/recycle-img-" + id + ".png")})`,
            }}>
                <h1 className="ml-3" style={{
                    color: "#F7F7F7",
                    fontSize: "70px"
                }}>{number[id]}</h1>
                <div className="materialDescription ml-4 mr-4" style={{
                    marginTop: "50%"
                }}>
                    <h2 style={{
                        color: "#18796A",
                        fontSize: "50px"
                    }}>{`${data.PlasticName} (${data.PlasticAbv})`}</h2>
                    <p style={{
                        fontWeight: "bold",
                        fontSize: "25px"
                    }}>{data.CanYouRecycle}</p>
                    <p style={{
                        color: "#777877"
                    }}>{`Typically used in ${data.FoundIn}`}</p>
                    <p onClick={() => toggleShowMore(true)} style={{
                        fontSize: "20px",
                        color: "#18796A",
                        textDecoration: "underline"
                    }}>{`read more >`}</p>
                </div>
                {showMore ? (<div className="reccomended-tips" style={{
                    borderRadius: "39px 39px 0 0",
                    backgroundColor: "#60BD98",
                    height: "600px"
                }}>
                    <p className="text-white text-center mt-5" style={{
                        fontSize: "20px"
                    }}>Reccomended tips for {data.PlasticAbv}</p>
                    <p className="text-white mt-2" style={{
                        marginLeft: "20px",
                        marginRight: "20px"
                    }}>{data.HowToRecycle}</p>
                    <div className="text-center">
                        <iframe title="recycling video" width="300" height="315" src={"https://www.youtube.com/embed/jJlqyTb-oy0?start=" + data.YoutubeStart} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>) : ""}
            </div>
        </div>
    );
}