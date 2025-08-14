function Pessoa2({nome, idade, profissao, foto}){

    return(
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>

        </div> 
        //Sem usar o Props, desestruturar as props diretamente: {}
    )
}

export default Pessoa2