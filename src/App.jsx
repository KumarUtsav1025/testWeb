import { useState } from 'react'
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation } from 'swiper/modules';

// import required modules
import Card from './components/CustomCard';

// https://freeimage.host/i/JEmsh2j
// https://freeimage.host/i/JEmswkQ
// https://freeimage.host/i/JEmsjYx
// https://freeimage.host/i/JEmsWrb
// https://freeimage.host/i/JEmsNpV
const items = [
  {
    title: "Sorry...",
    description: "I guess I got you angry once again. So here's the apology in my style.",
    backgroundImage: "url(https://iili.io/JEmQyml.png)"
  },
  {
    title: "Your Amazing...",
    description: "I was thinking about you today and couldn't help but smile. Your presence has a way of making everything better.",
    backgroundImage: "url(https://iili.io/JEmsh2j.png)"
  },
  {
    title: "You are Magical",
    description: "Are you a magician? Because whenever I look at you, everyone else disappears. ✨",
    backgroundImage: "url(https://iili.io/JEmswkQ.png)"
  },
  {
    title: "You are Always in my mind",
    description: "Your smile still takes my breath away – Keep Smiling.. 😍",
    backgroundImage: "url(https://iili.io/JEmsjYx.png)"
  },
  {
    title: "When i Lost I find You..",
    description: "Do you have a map? Because I just keep getting lost in your eyes every time I see you. 🌟",
    backgroundImage: "url(https://iili.io/JEmsWrb.png)"
  },
  {
    title: "You are cute ..",
    description: "How time flies away talking with you, sharing all my worries.",
    backgroundImage: "url(https://iili.io/JEmsNpV.pngg)"
  },
  {
    title: "Sorry...",
    description: "I hope I made up to your expectation, and my apology will be accepted.",
    backgroundImage: "url(https://iili.io/JEmLE9R.png)"
  },
  {
    title: "Sorry...",
    description: "I guess I got you angry once again. So here's the apology in my style.",
    backgroundImage: "url(https://iili.io/JEmLE9R.png)"
  },
  {
    title: "Sorry...",
    description: "I guess I got you angry once again. So here's the apology in my style.",
    backgroundImage: "url(https://iili.io/JEmLE9R.png)"
  },
]


function App() {
  const [count, setCount] = useState(0);

  const handleClick = () =>{
    setCount(count+1);
    if(count == 6) 
      window.location.href = "https://www.youtube.com/watch?v=EatzcaVJRMs";
    console.log(count);
  }
  

  return (
    <>
      <div>
        <div className='parentDiv' style={{backgroundImage:items[count > 0 ? count - 1 : items.length - 1].backgroundImage}}>
          <div className='childDiv'>
            <div className='fixedCard' style={{width:'35%'}}>
              <h2>{items[count].title}</h2>
              <p>{items[count].description}</p>
            </div>
            <div style={{width:'55%', overflow:'hidden'}}>
            <Swiper
              slidesPerView={2}
              spaceBetween={0}
              navigation={{ nextEl: ".nextElem", prevEl: ".arrow-left" }}
              pagination={{
                  clickable: true,
              }}
              allowTouchMove={false}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              >
              {items.map((item, index) => (
                  <SwiperSlide key={index}>
                  <Card imageUrl={item.backgroundImage} />
                  </SwiperSlide>
              ))}
              </Swiper>
            </div>
          </div>
          <button className="nextElem" onClick={handleClick} style={{margin:"20px"}}>Still Angry</button>
        </div>
      </div>
    </>
  )
}

export default App
