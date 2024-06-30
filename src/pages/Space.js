import { Link } from 'react-router-dom';
let spriteSheet=[];
let touches = [];
let cont=document.querySelector("#canvasContainer");
let canvas=document.querySelector("#demoCanvas");
// let stage = new createjs.Stage(canvas);
window.addEventListener('load', Space);

function Space(){
    console.log(cont);
    cont.setAttribute("class","");
    canvas.style.backgroundColor="black";

    return(
        <>
        <section className='retour'>
            <Link to={"/"} className="retourButton" href="#">Retour</Link>
        </section>
        </>
    )
}
export default Space;