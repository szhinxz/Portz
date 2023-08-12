import {motion} from 'framer-motion';
import { useRef,useEffect,useState } from "react";
import {image} from "../image";
import { ChevronBackOutline } from 'react-ionicons'
import { ChevronForwardOutline } from 'react-ionicons'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Movie from './movie';
import Filter from './filter';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// function Pic(){
//     console.log(image);
//     return(
//     <motion.div className="carousel">
//         <motion.div className="inner-carousel">

//         </motion.div>
//     </motion.div>
//     )
// }
export default function Pricing(){
    return (
    <>
    <div className="container">

    </div>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }
      }
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
        {image.map((e,index) =>{
        return(
            <SwiperSlide key={index}><img src={e.path} width={500} height={500}/></SwiperSlide>
        )
    }
        )}
         <div className="slider-conttroler">
             <div className="swiper-button-prev silder-arrow">
            
             </div>
             <div className="swiper-button-next silder-arrow">
            
             </div>
             <div className="swiper-pagination"></div>
         </div>
     </Swiper>
    <section className="card">
    <div className="filter-container">
            {/* <Filter 
            popular={popular} 
            setFiltered={setFiltered} 
            activeGenre={activeGenre} 
            setActiveGenre={setActiveGenre}
            setSearch = {setSearch}
            key ={popular.id} /> */}
         </div>
        <motion.div  className="card_img">
                 <Movie/>
        </motion.div>
    </section>
    {/* <img src={image} width={500} height={500}/> */}
    {/* {image.map(e =>{
        return(
            <>
            <img src={e.path} alt="" width={500} height={500}/>
            </>
        )
    }
        )} */}
    </>
    )
    
}