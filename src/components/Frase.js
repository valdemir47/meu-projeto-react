import styles from './Frase.module.css'

function Frase(){

    return(
        //lembrar de colocar a classeName na div para puxar o css
        <div className={styles.fraseContainer}> 
            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
        </div>
        
    )
}

export default Frase