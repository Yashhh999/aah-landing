"use client"
import Slider from '@madzadev/image-slider'

export default function ImageSlider() {
    const images = [
        {url: '/ss1.png'},
        {url: '/ss2.png'},
        
      ]
    return(
        <div >
        <Slider imageList={images} width={1000} height={300}   loop={true}
        autoPlay={true}
        autoPlayInterval={3000}
        showArrowControls={false}
        showDotControls={false}
        
        />
        </div>
    )
}
