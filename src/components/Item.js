 import PropTypes from 'prop-types' //importando com derterminado tipagem de dado
function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

/*determinando a tipagem*/
/*PropType maisculo*/
Item.prototype ={
    marca : PropTypes.string,
    ano_lancamento: PropTypes.number,
    /*PropType maisculo aqui*/ 
}

Item.defaultProps ={
   marca: 'Faltou a marca',
   ano_lancamento: 0 ,
}/*padrão para caso não seja preenchido*/

export default Item