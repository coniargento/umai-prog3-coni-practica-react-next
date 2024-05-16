import navbar from "@/componentes/Navbar/navbar";
import navmenu from "@/componentes/Navbar/navmenu";
import card from "@/componentes/Card/card";
import cardgrid from "@/componentes/Cardsgrid/cardgrid";
import hero from "@/componentes/Hero/hero"
import cardsgridcompo from "@/componentes/Cardsgrid/cardsgridcompo";
import footer from "@/componentes/Footer/footer";

export default function Home() {
  return (
    <main>
      <navbar title={'Satoru Gojo'}/>
      <hero imagen={fotos[0].imagen} alt={fotos[0].description} title={fotos[0].title} />
      <cardsgridcompo cards={cardgrid}/>
      <footer/>
    </main>
  );
}

