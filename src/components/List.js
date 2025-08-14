import Item from './Item'
function List(){
    return(
        <> 
            <h1>Minha Lista</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <Item marca ="Foard" ano_lancamento={1985}/>
                    <Item marca ="Ferrari" ano_lancamento={1964}/>
                </ul>
        </>
    )
    /*  Utilizando Fragments: precisa de um elemento pai (como uma div)
        usa uma tag vazia <> </>
    */ 
}

export default List