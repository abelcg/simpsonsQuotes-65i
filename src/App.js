import { useEffect, useState } from 'react';
import './App.css';
import Quotes from './components/Quotes';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/button';

function App() {
  const [character, setCharacter] = useState({});
  
  /* const character = {
    quote: "They taste like...burning.",
    character: "Ralph Wiggum",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    characterDirection: "Left"
  } */

  useEffect(()=>{
    APIrequest()
  }, []);

  const APIrequest = async ()=>{
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    console.log(response);
    const data = await response.json();
    console.log(data[0]);
    setCharacter(data[0]);
  };
  
  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
    <img src={logo} alt='The Simpsons logo' />
    <Button variant='warning' className='my-5 px-1 w-50' onClick={APIrequest}>
      Get Quotes
    </Button>
    <Quotes character={character}></Quotes>
  </section>
  );
}

export default App;
