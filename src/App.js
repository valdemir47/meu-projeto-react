//import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord'; // importando um componente
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Pessoa2 from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Forms';
import FormsUseState from './components/FormsUseState';




function App() {
  //todo o elemento vai estar dentro desta funçao
  const name = 'Valdemir' // se n usar essa variavel, não dá erro, mas avisa que n tá usando
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'

  const nome = 'Ravi'

  function sum(a, b) {
    return a + b
  }
  return (
    <div className="App"> {/*os elementos tem que ta dentro de um elemento PAI* - className (não Class)*/}
      <Evento numero="1" />
      <Evento numero="35" />
      <Form />
      <FormsUseState />
      <List />
      <h1>Teste</h1>
      <frase />
      <HelloWord></HelloWord> {/*invocando componente*/}
      <SayMyName nome="Valdemir" /> {/*componente propos, inserindo o atributo*/}
      <SayMyName nome="Elisa" />
      <SayMyName nome={nome} /> {/*colocar uma var como atributo*/}
      <Pessoa nome="Valdemir" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />
      <Pessoa2 nome="Valdemir" idade="28" profissao="Programador" foto="https://via.placeholder.com/150" />



      {/* 
        <p>Olá, {name}</p>          
        <p>{newName}</p>           
        <p>Soma: {2+2}</p>          
        <p>Soma: {sum(1,2)}</p>    
        <img src={url} alt="Minha Imagem"/> 
        <h2>Alterando o JSX</h2> 
      */}
    </div>
  );
}

export default App; // vai exportar o código deste documento
