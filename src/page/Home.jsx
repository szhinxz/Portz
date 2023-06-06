import { useEffect,useRef,useState} from "react";
import { FiGrid,FiUser,FiX,FiLayers,FiCpu } from "react-icons/fi"; 
import { MdTimeline,MdFace,MdPhp,MdArrowLeft,MdArrowRight,MdOutlineWorkOutline,MdSmartphone,MdEmail,MdFacebook,MdOutlineContacts } from "react-icons/md"; 
import {timelineElement} from "../Components/timelineEle";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import { BsPersonWorkspace } from "react-icons/bs";
import {Image01} from "../image"
import {slc} from "../mywork"
import "react-vertical-timeline-component/style.min.css";
import {motion} from "framer-motion"

// About page //
import Resume from "../assets/Resume_STP.pdf"
import Transcript from "../assets/Transcript.pdf"
import comp from "../assets/comp.pdf"


import {VscGithub} from "react-icons/vsc"
import {BsFileEarmarkPdfFill,BsFillCalendar3RangeFill,BsFillJournalBookmarkFill} from "react-icons/bs"

// work page //
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

export default function Home(){
    


    useEffect(() => {
        const obsever = new IntersectionObserver((entries) =>{
            entries.forEach((entry) =>{
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                }else {
                    entry.target.classList.remove('show');
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => obsever.observe(el));

        // exper slider //
    const btns =document.querySelectorAll(".nav-btn")
    const slides =document.querySelectorAll(".z")
    const contents =document.querySelectorAll(".imglink")

    var sliderNav = function(manual){
        btns.forEach((btn) => {
            btn.classList.remove("active")
        })

        slides.forEach((slide) => {
            slide.classList.remove("active")
        })
        contents.forEach((content) => {
            content.classList.remove("active")
        })

        btns[manual].classList.add("active")
        slides[manual].classList.add("active")
        contents[manual].classList.add("active")
    }

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i)
        })
    })
    },[])

    let sections = document.querySelectorAll('section');
    let banLink = document.querySelectorAll('div banner a');

    window.onscroll = () => {
        sections.forEach(sec =>{
            let top =  window.screenY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                banLink.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('div banner a', 
                    '[href*='+id+']').classList.add('active');
                })
            }
        })
    }

    let workIconStyles = {background: "#df8b0b"};
    let schoolIconStyles = {background: "#df8b0b"};

    window.addEventListener("scroll",function(){
        var banner = document.querySelector(".banner");
        banner.classList.toggle("sticky", window.scrollY > 0 );
    })
    // const goTopBtn = document.querySelector('.go-top-btn');
    
    // window.addEventListener('scroll', checkHeeight)

    // function checkHeeight(){
    //     if(window.screenY > 200){
    //         goTopBtn.getElementsByClassName.display = "flex"
    //     }else {
    //         goTopBtn.getElementsByClassName.display = "none"
    //     }
    // }

    // goTopBtn.addEventListener('click', () =>{
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     })
    // })
    const track = document.getElementById("image-track")

    window.onmousedown = e =>{
        track.dataset.mouseDownAt = e.clientX;
    }
    window.onmouseup = () => {
        track.dataset.mouseDownAt ? "0" : ""
        track.dataset.prevPercentage ? track.dataset.percentage : ""
    }
    window.onmousemove = e =>{
        if(track.dataset.mouseDownAt === "0") {
            return;
        }
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX
        const maxDelta = window.innerWidth / 2
            
        const percentage = (mouseDelta / maxDelta ) * -100, nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage

        track.dataset.percentage ? nextPercentage : ""


        track.style.transform = `translate(${nextPercentage}%, -50%)`
    }

    const buttons = document.querySelectorAll('.banner a')
        buttons.forEach(btn => {
            btn.addEventListener('click',function(e) {
                let x = e.clientX - e.target.offsetLeft
                let y = e.clientY - e.target.offsetTop

                let rippples = document.createElement('.banner span')
                rippples.style.left = x + 'px'
                rippples.style.top = y + 'px'
                this.appendChild(rippples)

                setTimeout(() => {
                    rippples.remove()
                },1000)
            })
        }) 

    return (
        <>
        {/* <button className="go-top-btn">
        <img src="/public/arrow_up.png" alt="arrow up" />
        </button> */}
        <div className="banner">
            <ul>
                <li className="list">
            <a href="#intro" className="active">
                <span className="icon"><MdFace /></span>
                <span className="text">Introduce</span>
            </a>
            </li>
            <li className="list">
            <a href="#time" >
                <span className="icon"><MdTimeline /></span>
                <span className="text">Timeline</span>
            </a>
            </li>
            <li className="list">
            <a href="#skills">
                <span className="icon"><FiLayers /></span>
                <span className="text">skills</span>
            </a>
            </li>
            <li className="list">
            <a href="#exper">
                <span className="icon"><FiCpu /></span>
                <span className="text">Experience</span>
            </a>
            </li>
            <li className="list">
            <a href="#work">
                <span className="icon"><MdOutlineWorkOutline /></span>
                <span className="text">Work</span>
            </a>
            </li>
            <li className="list">
            <a href="#contact">
                <span className="icon"><MdOutlineContacts /></span>
                <span className="text">Contact</span>
            </a>
            </li>
            <div className="indicator">
            </div>
            </ul>
        </div>
        <section className="hidden" id="intro">
            <div className="logo-banner">
            </div>
            {/* <div id="image-track" data-mouse-down-at="0" date-prev-percentage="0">
                <img className="image" src="https://images.unsplash.com/photo-1682686578707-140b042e8f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1683659635782-af84e4b67cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1684516310710-463141e44242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1683009427041-d810728a7cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1682685796014-2f342188a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
                <img className="image" src="https://images.unsplash.com/photo-1682687220591-cfd91ab5c1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" draggable="false"/>
            
            </div> */}
            <div className="sec-text">
                <p>
                <h2>I'm</h2>
                    <span className="typed-text">
                    Developer..
                    </span>
                </p>
            </div>
            <h2>My name is</h2><h2 className="introstp">Sathaphon Khennamthieng</h2>
            <h3>สถาพร เคนน้ำเที่ยง</h3>
        </section>

        <section className="hidden" id="time"> 
            <h2>Timeline</h2>
            <VerticalTimeline>
                {
                    timelineElement.map(element => {
                        let IsworkIcon = element.icon === "MdTimeline"
                        return(
                            <>
                            <VerticalTimelineElement 
                            key={element} 
                            date={element.date} 
                            dateClassName="date"
                            className="Timeline"
                            iconStyle={IsworkIcon ? workIconStyles: schoolIconStyles}
                            icon={IsworkIcon ? <MdTimeline/> : <MdFace/>}> 

                            <h3 className="vertical-timeline-element-title">
                                {element.title}
                            </h3>
                            <h3 className="vertical-timeline-element-location">
                                {element.location}
                            </h3>
                            <h3 className="vertical-timeline-element-description">
                                {element.description}
                            </h3>
                            <h3 className="vertical-timeline-element-buttonText">
                                <a href={element.dataLink} target="_blank" className="timeline-butt">{element.buttonText}</a>
                            </h3>
                            

                            </VerticalTimelineElement>
                            </>
                        )
                    })
                }
            </VerticalTimeline>
        </section>

        <section className="hidden" id="skills">
            <h2>My skills</h2>
            <div className="skill-con">
                {Image01.map((e,index) =>{
                    return(
                        <div className="box" key={index.id}>
                        <img className="logos hidden" src={e.paths} alt="" />
                        <h3>{e.name}</h3>
                        <p>{e.act}</p>
                    </div>
                    )})}

                <div className="skill-mobile">
                        <motion.div className="carousel" >
                                <motion.div drag="x" dragConstraints={{right: 0 ,left: -2150}} className="inner-carousel">
                                        {Image01.map((e,index) =>{
                                            return(
                                            <>
                                            <motion.div className="item" key={e}>
                                                <img src={e.paths} alt="" />
                                                <p>{e.name}</p>
                                                <p>{e.act}</p>
                                            </motion.div>
                                            </>
                                            //     <div className="box-2" key={index.id}>
                                            //     <img className="logos hidden" src={e.paths}  alt="" />
                                            //     <h3>{e.name}</h3>
                                            //     <p>{e.act}</p>
                                            // </div>
                                            )
                                            })
                                        }
                                </motion.div>
                        </motion.div>
                </div>
            </div>
            
        </section>

        <section className="hidden" id="exper"> 
            <h2>EXPERIENCE</h2>
            <div className="con-per">
                <div className="card-01">
                    <div className="imgs">
                            {image.map((e,index) =>{
                            return(
                                <div className="imgswiper"><img src={e.path} width={500} height={500} className="z active" key={index}/></div>
                            )
                        }
                            )}
                    </div>
                </div>
                <div className="card-01">
                            <div className="imglink active" >
                                <h2>
                                Coelum
                                </h2>
                                <h3>
                                เว็บไซต์จัดงานศพ สามารถจองศาลาและรับจัดงานศพ พร้อมทั้งมีวัดเป็นพาร์ทเนอร์
                                </h3>
                            </div>
                            <div className="imglink" >
                                <h2>
                                System Project **รูปตัวอย่าง**
                                </h2>
                                <h3>
                                เว็บไซต์ภายในบริษัท ส่งแบบฟอร์มและอนุมัติ ที่ติดตามและแจ้งเตือนผ่านทางอีเมลล์
                                </h3>
                            </div>
                            <div className="imglink" >
                                <h2>
                                Mobile App
                                </h2>
                                <h3>
                                โปรเจคเริ่มต้นในชั้นเรียน โดยระบบ Andriod
                                </h3>
                            </div>
                </div>
            </div>
            <div className="con-per">
                <div className="card-02">
                <div className="slider-navigation">
                    <div className="nav-btn active"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                </div>
                </div>
            </div>
        </section>

        <section className="hidden" id="work"> 
            <h2>WORK</h2>
            <div className="card">
                <motion.div  className="card_img">
                        <Movie/>
                </motion.div>
            </div>
        </section>

        <section className="hidden" id="contact"> 
            <div className="contact-card">
                <div className="box-card">
                    <div className="box-card-text">
                        <div className="wrapper">
                            <div className="icon facebook">
                                <div className="tooltip">
                                    Facebook
                                </div>
                                <a href="https://www.facebook.com/nashii.sashioka/" target="_blank"><span><MdFacebook/></span></a>
                            </div>
                            <div className="icon smartphone">
                                <div className="tooltip">
                                    Tel:0618468205
                                </div>
                                <a href="tel:061-846-8205"><span><MdSmartphone/></span></a>
                            </div>
                            <div className="icon email">
                                <div className="tooltip">
                                    Kennamthieng_S@su.ac.th
                                </div>
                                <a href="mailto:Kennamthieng_S@su.ac.th"><span><MdEmail/></span></a>
                            </div>
                            <div className="icon github">
                                <div className="tooltip">
                                    Github
                                </div>
                                <a href="https://github.com/szhinxz" target="_blank"><span><VscGithub/></span></a>
                            </div>
                        </div>
                        <div className="resume-card">
                            <div className="icon resume">
                                <div className="tooltip-2">
                                    Transcript
                                </div>
                                <a href={Transcript} download="Transcript"><span><BsFillCalendar3RangeFill /></span></a>
                            </div>
                            <div className="icon resume">
                                <div className="tooltip-2">
                                    Resume
                                </div>
                                <a href={Resume} download="Resume"><span><BsFileEarmarkPdfFill /></span></a>
                            </div>
                            <div className="icon resume">
                                <div className="tooltip-2">
                                    Graduation
                                </div>
                                <a href={comp} download="comp"><span><BsFillJournalBookmarkFill /></span></a>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </section>
        {/* <section className="hidden"> 
            <h2>Resume</h2>
            <p>This file Resume for open in pdf</p>
            <a href={Resume} download="Resume"><button className="Res-but">Resume</button></a>
        </section> */}
        </>

    )
}