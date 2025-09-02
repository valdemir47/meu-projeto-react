//pulei essa aula
import Button from "./evento/Button" //importando o Button

function Evento2({numero}) {
    function meuEvento(){
        console.log(`Opa! Fui ativado. ${numero}`)
    }
    
    return (
        //passando evento por props:
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/> 
            <button onClick={meuEvento}> Ativar! </button> 
        </div>
        //"Button" (maisculo) é um componente (letra maiscula é componente) 
    )
}

export default Evento2

/*
    *onClik é para disparar a ação no botão {meu evento}
    **meu evento se (), pq senão ele executa a função em vez de esperar io clique 

*/