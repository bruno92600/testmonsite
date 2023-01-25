import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import "../styles/SliderImage.css"
import foto from '../photo-8/IMG_4988.jpg'
import foto1 from '../photo-8/IMG_4641.jpg'
import foto2 from '../photo-8/IMG_5315-2.jpg'
import foto3 from '../photo-8/IMG_5299.jpg'



function SliderImage() {

    const datas = [
        {
            image: `${foto}`,
            title: "Nature",
            text: `Nature has something special for me, it recharges my batteries, does me a lot of good. I draw energy from it, to start off on the right foot.`,
        },
        {
            image: `${foto1}`,
            title: "Paris",
            text: `This city has a real charm, a soul, a beauty... Especially at night when the lights come on and create shadows in the streets.`,
        },
        {
            image: `${foto2}`,
            title: "haystack",
            text: `See these fields as far as the eye can see, immerse yourself in them. These Haystacks are so round, perfect and beautiful.`,
        },
        {
            image: `${foto3}`,
            title: "Sunflower",
            text: `Sunflower... How beautiful you are when you turn naturally towards the sun. it is a wonder.`,
        },
]

  return (
      <Carousel autoPlay interval={3000} infiniteLoop thumbWidth={120}
      showIndicators={false} showStatus={false}>
          {datas.map(slide => (
              <div key={slide.id}>
                  <img className='imagenature' src={slide.image} alt="" />   
                  <div className="overlay">
                      <h2 className="overlay_title">
                          {slide.title}
                      </h2>
                      <p className="overlay_text">
                          {slide.text}
                      </p>
                      </div>            
                  </div>
          ))}
      </Carousel>
  )
}

export default SliderImage