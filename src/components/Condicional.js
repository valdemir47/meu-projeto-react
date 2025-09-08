import { useState } from "react"; //importantando o hook useState

//rederizando com condicional

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault(); // evita reload da página
        setUserEmail(email)
        console.log(email)
        console.log("testando 123")
    }

     function limparEmail() {
        setUserEmail("")
       
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form onSubmit={enviarEmail}>
                <input type="email" placeholder="Digite o seu e-mail" 
                onChange={(e)=> setEmail(e.target.value)} />

                <button type="submit">Enviar e-mail</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do Usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}{/*isso é sintax da rederização condicional do react*/}
            </form>
        </div>
    );
}

export default Condicional