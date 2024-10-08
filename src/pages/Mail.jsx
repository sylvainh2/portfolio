import Header from '../components/Header';

function Mail(){
    const handleSubmitJoin = async (event)=>{
        event.preventDefault();
        let email= event.target.email.value;
        let message = event.target.message.value;
        let sujet = event.target.sujet.value;
        if (email && message && sujet){
            //traitement envoi email//
            const emailSender = await fetch("http://localhost:5000/send-email",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    sujet,
                    message
                })
            })
            document.querySelector(".mailForm").reset();
            document.querySelector(".sendWindow").setAttribute("class","sendWindow absCont");
            setTimeout(()=>{
                document.querySelector(".sendWindow").setAttribute("class","sendWindow absCont wHidden");
            },3000);
        }
    };

    return(
    <>
        <Header />
            <main className="mail">
                <div className="sendWindow absCont wHidden">Email Envoyé</div>
                <form className="mailForm" onSubmit={handleSubmitJoin}>
                    <label className="inputMail">email:</label>
                    <input className="inputMail mailEffect email" type="email" name="email" placeholder="Entrez votre Email svp"/>
                    <label className="inputMail">sujet</label>
                    <input className="inputMail mailEffect sujet" type="text" name="sujet"/>
                    <label className="inputMail">message:</label>
                    <textarea className="inputMail mailEffect areaEffect message" type="text" cols="50" rows="10" name="message" />
                    <button className="mailBtn inputMail">Envoyer</button>
                </form>
            </main>
    </>)
}
export default Mail;