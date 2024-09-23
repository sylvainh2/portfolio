import Header from '../components/Header';

function Mail(){
    const handleSubmitJoin = (event)=>{
        event.preventDefault();
        const email= event.target.email.value;
        const message = event.target.message.value;
        const sujet = event.target.sujet.value;
        if (email && message && sujet){
            //traitement envoi email//
            console.log(email,sujet,message);
        }
    };
    return(
    <>
        <Header />
            <main className="mail">
                <form className="mailForm" onSubmit={handleSubmitJoin}>
                    <label className="inputMail">email:</label>
                    <input className="inputMail mailEffect" type="email" name="email" placeholder="Entrez votre Email svp"/>
                    <label className="inputMail">sujet</label>
                    <input className="inputMail mailEffect" type="text" name="sujet"/>
                    <label className="inputMail">message:</label>
                    <textarea className="inputMail mailEffect areaEffect" type="text" cols="50" rows="10" name="message" />
                    <button className="mailBtn inputMail">Envoyer</button>
                </form>                
            </main>
    </>)
}
export default Mail;