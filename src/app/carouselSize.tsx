import * as React from "react"
import Image from "next/image"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
export default function CarouselSize() {
  return (
    <div className="container">
      <div className="row-furniture">
        <div className="beautiful-rooms">
          <h1>50+ Beautiful rooms inspiration</h1>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button className="primarybtn">Explore More</button>
        </div>
        <div className="br-right-carousel">
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
            <div className="carouselContentBx">
              <div className="imgBox-carousel">
                <Image src={`/img/br-${index + 1}.jpg`} width={404} height={582} alt="slider image" />
                <div className="carouselContent-bx"><p>01 --- Bed Room</p><h5>Inner Peace</h5></div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="btnPrevious" />
      <CarouselNext className="btnNext" />
    </Carousel>
    </div>
    </div>
    </div>
  )
}