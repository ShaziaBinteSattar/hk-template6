import Image from "next/image";
import Hero from "./hero"
import SubHero from "./subhero";
import Product from './product';
import CarouselSize from './carouselSize'

export default function Home() {
  return (
    <div className="mainwrapper">
      <div className="herosection"><Hero /></div>
      <div className="subhero"><SubHero /> </div>
      <div className="products"><Product /> </div>
      <div className="CarouselSizeBox"><CarouselSize /></div>
      <div className="funiroFuniture">
      <div className="container">
        <div className="FuniroFurniture-title">
          <p>Share your setup with</p>
          <h1>#FuniroFurniture</h1>
          </div>
        <div className="funiroFunitureBox"><Image src="/img/funiroFuniture.png" width={1440} height={721} alt="funiroFuniture" /></div>
        </div>
        </div>
        
    </div>
  );
}
