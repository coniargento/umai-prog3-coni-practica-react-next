import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CardsGrid from '../components/CardsGrid';
import Card from '../components/Card';
import Image from "next/images";
//import styles from "./page.module.css";
const Home = () => {
    // Define los datos de las tarjetas
    const cardsData = [
      {
        title: 'Card 1',
        image: '/card1.jpg',
        description: 'Descripción de la tarjeta 1',
      },
      {
        title: 'Card 2',
        image: '/card2.jpg',
        description: 'Descripción de la tarjeta 2',
      },
    ];
  
    // Retorna la estructura de la página de inicio
    return (
      <div>
        {/*navbar con el titulo*/}
        <Navbar title="Mi Aplicación Next.js" />
  
        {/*Hero con el título y descripción */}
        <Hero title="Bienvenido a mi aplicación" description="Descripción del héroe" />
  
        {/*cuadrícula de tarjetas con datos */}
        <CardsGrid cards={cardsData} />
  
        {/* Renderiza el Footer con el año de derechos de autor */}
        <Footer copyright="©2024 Puzzi" />
      </div>
    );
  };
  
  // Exporta la función de la página de inicio
  export default Home;
