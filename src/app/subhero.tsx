import Image from "next/image"
export default function SubHero(){

    return (
        <div className="container">
        <div className="subText">
            <h1> Browse The Range</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imgArea">
            <div className="imgOne productfea">
            <Image src="/img/dining.jpg" width={381} height={480} alt="Picture of the author" />
                <h4>Dining</h4>
            </div>
            <div className="imgTow productfea">
            <Image src="/img/living.jpg" width={381} height={480} alt="Picture of the author" />
            <h4>Living</h4>
            </div>            
            <div className="imgThree productfea">
            <Image src="/img/bedroom.jpg" width={381} height={480} alt="Picture of the author" />
            <h4>Bedroom</h4>    
            </div>
           </div>
        </div>
    )
}