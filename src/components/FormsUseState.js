import { useState } from "react"; //importando o hook useState
function FormsUseState() {
    function CadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(`Usuário ${name} foi cadastr com a senha ${password}`)
    }

    const [name, setName] = useState('Valdemir') //usando o useState
    //name(nome que tá). setName(nome q vai receber para mudar) | Valdemir serpa i valor defult

    const [password, setPassword] = useState('Valdemir')

    return (
        <div>
            <h1> Forms com useState</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)} /> {/*vai puxar la da const - setando*/}

                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite o sua senha"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <input type="submit" value={"Cadastrar"} />
                </div>
            </form>

        </div>
    )
}

export default FormsUseState