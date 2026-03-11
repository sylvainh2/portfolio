import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Header/>
            <section>
                <div className="cvHomeSection">
                    <div className="cvnewHomeContainer">
                        <Link to="/Cvnew" className="titleHome">C.V</Link>
                    </div>
                    <p className="homePara">Mon dernier C.V en date au format PDF</p>
                </div>
                <div className="cvHomeSection">
                    <div className="cvHomeContainer">
                        <Link to="/Cv" className="titleHome">C.V ancienne version en HTML</Link>
                    </div>
                    <p className="homePara">Ancien C.V réalisé à la base entièrement en HTML/CSS puis réadapté en React.js/SCSS</p>
                </div>
                <div className="cvHomeSection">
                    <div className="spaceHomeContainer">
                        <Link to="/Space" className="titleHome">Space invaders</Link>
                    </div>
                    <p className="homePara">Adaptation libre du jeu space invaders en JS/React.js/CreateJs</p>
                    <img src="./portfolio/images/spacescreen.png" alt="space invaders" width="200px" height="120px"></img>
                </div>
                <div className="cvHomeSection">
                    <div className="morpionHomeContainer">
                        <Link to="/Morpion" className="titleHome">Morpion</Link>
                    </div>
                    <p className="homePara">Adaptation du jeu du morpion dont le but est d'aligner 3 pions en JS/React.js/SCSS</p>
                    <img src="./portfolio/images/morpionscreen.png" alt="morpion" width="200px" height="120px"></img>
                </div>
                <div className="cvHomeSection">
                    <div className="memoryHomeContainer">
                        <Link to="/Memory" className="titleHome">Memory</Link>
                    </div>
                    <p className="homePara">Adaptation du jeu memory dont le but est de retrouver des paires de cartes identiques en JS/React.js/SCSS</p>
                    <img src="./portfolio/images/memoryscreen.png" alt="memory" width="200px" height="120px"></img>
                </div>
                <div className="cvHomeSection">
                    <div className="kataHomeContainer">
                        <a href="https://github.com/sylvainh2/kata" target="_blank" className="titleHome">Kata</a>
                    </div>
                    <p className="homePara">Lien du Github contenant une dizaine d'exercices niveau débutant et des katas de tous niveaux</p>
                    <a href="https://github.com/sylvainh2/kata" target="_blank" className="kataPara">https://github.com/sylvainh2/kata</a>
                </div>
                <div id="asi" className="cvHomeSection">
                    <div className="runHomeContainer">
                        <Link to="/" className="titleHome">Projet Run'illac</Link>
                    </div>
                    <p className="homePara">Site internet de présentation, publication, et gestion du club de course à pied de Saint Jean d'illac en JS/React.js/SCSS/Node.js/Express</p>
                    <div className="screenHomeContainer">
                        <img src="./portfolio/images/asi1.png" alt="image asi1" width="200px"/>
                        <img src="./portfolio/images/asi2.png" alt="image asi2" width="200px"/>
                        <img src="./portfolio/images/asi3.png" alt="image asi3" width="200px" height="200px"/>
                        <img src="./portfolio/images/asi4.png" alt="image asi4" width="200px" height="200px"/>
                        <img src="./portfolio/images/asi5.png" alt="image asi5" width="200px"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;