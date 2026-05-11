import Header from '../components/Header';
import ReturnB from '../components/ReturnB';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

function Mail(){
    const form = useRef();
    const handleSubmitJoin = (event)=>{
        event.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_9qcgitk';
        const publicKEY = 'I8Ndgl3Khqs3TUvCL';
        let email= event.target.email.value;
        let message = event.target.message.value;
        let sujet = event.target.sujet.value;
        if (email && message && sujet){
            //traitement envoi email//
            emailjs
            .sendForm(
                serviceID,
                templateID,
                form.current,
                publicKEY
            )
            .then(
                () => {
                document.querySelector(".sendWindow").setAttribute("class","sendWindow absCont");
                setTimeout(()=>{
                    document.querySelector(".sendWindow").setAttribute("class","sendWindow absCont wHidden");
                },3000);
                },
                (error) => {
                console.log(error.text);
                }
            );
            document.querySelector(".mailForm").reset();
        }
    };

    return(
    <>
        {/* <Header /> */}
        <main className="mail">
            <div className="sendWindow absCont wHidden">Message Envoyé</div>
            <form ref={form} className="mailForm" onSubmit={handleSubmitJoin}>
                <label className="inputMail">email:</label>
                <input className="inputMail mailEffect email" type="email" name="email" placeholder="Entrez votre Email svp"/>
                <label className="inputMail">sujet</label>
                <input className="inputMail mailEffect sujet" type="text" name="sujet"/>
                <label className="inputMail">message:</label>
                <textarea className="inputMail mailEffect areaEffect message" type="text" cols="50" rows="10" name="message" />
                <button className="mailBtn inputMail">Envoyer</button>
            </form>
        </main>
        <ReturnB />
    </>)
}
export default Mail;