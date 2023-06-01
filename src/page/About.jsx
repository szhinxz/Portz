import React, { useState, useEffect, useRef } from 'react'
import Resume from "../assets/Resume.pdf"


import {MdSmartphone,MdEmail,MdFacebook} from "react-icons/md"

import {VscGithub} from "react-icons/vsc"
import {BsFileEarmarkPdfFill} from "react-icons/bs"


export default function About(){
    
    return (
        <>
        <div className="container-contact">
        <h1>Contact</h1>
        <section id="page-header" className="container-card" >
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
                                    Resume
                                </div>
                                <a href={Resume} download="Resume"><span><BsFileEarmarkPdfFill /></span></a>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}