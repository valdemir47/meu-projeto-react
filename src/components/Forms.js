function Form() {
    function CadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o Usuário")
    }

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <input type="text" aria-placeholder="Digite o seu nome" />
                </div>

                <div>
                    <input type="submit" value={"Cadastrar"} />
                </div>
            </form>

        </div>
    )
}

export default Form