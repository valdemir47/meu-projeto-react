function Evento({numero}) {
    function meuEvento(){
        console.log(`Opa! Fui ativado. ${numero}`)
    }
    
    return (
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}> Ativar! </button>
        </div>
    )
}

export default Evento

/*
    *onClik é para disparar a ação no botão {meu evento}
    **meu evento se (), pq senão ele executa a função em vez de esperar io clique 

*/