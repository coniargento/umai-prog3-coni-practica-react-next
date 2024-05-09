import navbar from "@/componentes/navbar";
import navmenu from "@/componentes/navmenu";
import card from "@/componentes/card";
import cardgrid from "@/componentes/cardgrid";
import hero from "@/componentes/hero"
import cardsgridcompo from "@/componentes/cardsgridcompo";
import footer from "@/componentes/footer";

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