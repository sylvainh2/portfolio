import { Link } from "react-router-dom";
let cont=document.querySelector("#canvasContainer");

function Home() {
    console.log(cont);
    cont.setAttribute("class","canvasDisp");
    console.log("cont",cont);
    return (
        <>
            <header>
                <div className="logo">
                    <img className="imageLogo" src="logo.jpg" alt="logo" />
                </div>
                <div className="navigation">
                    <ul className="navigationList">
                        <li className="boite">
                            <Link to={"/cv"} className="lientextdef" href="#">
                                <div className="textdef">C.V</div>
                            </Link>
                        </li>
                        <li className="boite boite2">
                            <Link to={"/space"} className="lientextdef" href="#">
                                <div className="textdef">Space Invader</div>
                            </Link>
                        </li>
                        <li className="boite">
                            <a className="textdef" href="#">choix 3</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Home;