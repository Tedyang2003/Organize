import React from "react"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


export default function Navbar() {

    const navigate = useNavigate()

    const timeline = gsap.timeline({})

    useGSAP(() => {
        timeline.to("#company-blocker", {
            x: 200,
            delay: 1,
            duration: 2,
            ease: "power4.inOut",

        })

        timeline.to("#login-button", {
            x: 0,
            y: 0,
            ease: "bounce.inOut",
            duration: 2
        }, "<")

        timeline.to("#login-button", {
            width: "6rem",
            height: "2.5rem",
            borderRadius: "5px",
        })

        timeline.to("#login-button", {
            color: "#FFF",
        })

        timeline.to(".nav-item", {
            y: 0, 
            stagger: "0.2",
            opacity: 1,
            rotate: 0,
            delay: 1
        })    

        timeline.to("#nav-bar", {
            scrollTrigger: {
                trigger: "#landing-cover",
                start: "20% 20%",
                end: "20% 80%",
                // markers: true,
                scrub: 1,
            },
            opacity: 0,
            
        })
        
    }, [])

    return (
        <section id = "nav-bar" className="z-1 flex justify-between items-center pl-16 pr-20  py-2 font-poppins fixed bg-white w-full" style={{zIndex: 99}}>
            <div className="flex items-start grow relative">
                <div className="w-100 h-100 absolute bg-white" id="company-blocker"></div>
                <img className="h-16 pt-3" id='company-logo' onClick={() => navigate('/')} src="images/org_logo_colored.svg" alt="" />
            </div>
            <div className="flex items-center grow">
                <ul className="flex items-center justify-between text-md p-0 m-0 w-full list-none">
                    <li className="nav-item"><a className="decoration-none text-main-black no-underline" href="/">Home</a></li>
                    <li className="nav-item"><a className="decoration-none text-main-black no-underline" href="/about">About Us</a></li>
                    <li className="nav-item"><a className="decoration-none text-main-black no-underline" href="/contact">Contact Us</a></li>
                    <li className="nav-item"><a className="decoration-none text-main-black no-underline" href="/signup">Sign Up</a></li>
                </ul>
            </div>
            <div className="flex items-center grow justify-end">
                <button id="login-button" onClick={() => navigate('/login')} className="py-2 px-4 bg-black  font-semibold ">Login</button>
            </div>
        </section>
    )

}