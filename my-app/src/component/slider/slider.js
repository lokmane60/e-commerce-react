import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = (prop) => {

    const images = prop.image;
    //console.log(images)
    const slider =images.map(image=>{
        return(
            <Carousel.Item>
            <img src={image}  className='card-img-top' alt="..."/>
            </Carousel.Item>
            )
        
    })
  return (
    <div>
        <Carousel>
            {slider}
        </Carousel>
    </div>
  )
}

export default Slider