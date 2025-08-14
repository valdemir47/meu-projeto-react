import Frase from "./Frase"
function HelloWord(){

    return(
        <div>
            <Frase></Frase> {/*invocando o componente*/}
            <h1> Meu primeiro componente</h1>
            <Frase></Frase> {/*invocando novamente*/}
        </div>
    )
} // A função do componente


export default HelloWord //exportando a função