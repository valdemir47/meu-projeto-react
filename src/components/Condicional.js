import { useState } from "react"; // Importa o hook useState do React

// Componente funcional chamado Condicional
function Condicional() {
    // Cria um estado "email" (valor digitado no input) e a função "setEmail" para atualizar
    const [email, setEmail] = useState()

    // Cria outro estado "userEmail" (e-mail confirmado ao enviar) e sua função de atualização
    const [userEmail, setUserEmail] = useState()

    // Função executada quando o formulário é enviado
    function enviarEmail(e) {
        e.preventDefault(); // Impede que a página recarregue ao enviar o form
        setUserEmail(email) // Salva no estado "userEmail" o que foi digitado em "email"
        console.log(email) // Mostra o e-mail no console
        console.log("testando 123") // Mensagem de teste
    }

    // Função para limpar o e-mail já salvo
    function limparEmail() {
        setUserEmail("") // Zera o valor de userEmail
    }

    // JSX que será renderizado na tela
    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>

            {/* Formulário, ao enviar chama a função enviarEmail */}
            <form onSubmit={enviarEmail}>

                {/* Campo de input controlado:
                    - onChange pega o que o usuário digita
                    - setEmail atualiza o estado "email"
                */}
                <input 
                    type="email" 
                    placeholder="Digite o seu e-mail"
                    onChange={(e) => setEmail(e.target.value)} 
                />

                {/* Botão que dispara o envio do formulário */}
                <button type="submit">Enviar e-mail</button>

                {/* Renderização condicional:
                    - Só aparece se userEmail tiver algum valor
                */}
                {userEmail && (
                    <div>
                        <p>O e-mail do Usuário é: {userEmail}</p>
                        {/* Botão que chama a função limparEmail */}
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
                {/* Isso é a sintaxe da renderização condicional no React */}
            </form>
        </div>
    );
}

// Exporta o componente para ser usado em App.js ou outro lugar
export default Condicional