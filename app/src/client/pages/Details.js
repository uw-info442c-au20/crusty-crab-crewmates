import { useParams } from 'react-router';

export default function Details() {
    const { id } = useParams();

    const number = {};
    for (let i = 1; i < 10; i++) {
        number[i] = "0" + i;
    }

    return (
        <div className="bg" style={{
            backgroundImage: `url(${require("../imgs/recycle-homepage1.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "65% 250%",
            backgroundSize: "700px"
        }}>
            <div className="bg" style={{
                backgroundImage: `url(${require("../imgs/pvc-tube.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "15% 20%"
            }}>
                <h1 className="ml-3" style={{
                    color: "#F7F7F7",
                    fontSize: "70px"
                }}>{number[id]}</h1>
            </div>
        </div>
    )
}