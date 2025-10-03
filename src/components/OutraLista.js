function OutraLista({itens}){


    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {
                //funcao p/ mapear elementos
                itens.map((item, index) =>(
                    <p key={index}>{item}</p>
                )) 
                // parâmetros: intem | index - p/o key/id
                
                
            }
        </>
    )
}

export default OutraLista