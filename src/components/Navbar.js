import React from "react"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


export default function Navbar() {

    const navigate = useNavigate()

    const timeline = gsap.timeline({})

    useGSAP(() => {



        timeline.to("#login-button", {
            opacity: 1,
            y: 0,
            delay: 0.5
        })

        timeline.fromTo("#company-logo", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1, 
            y: 0,
            ease: "power1.inOut"
        }, ">")

        timeline.to("#login-button", {
            color: "#FFF",
        })

        timeline.to(".nav-item", {
            y: 10, 
            stagger: "0.2",
            opacity: 1,
            rotate: 0,
            ease: "power1.inOut"
        }, ">")    

        timeline.to("#nav-bar", {
            scrollTrigger: {
                trigger: "#landing-cover",
                start: "20% 20%",
                end: "20% 80%",
                // markers: true,
                scrub: 1,
            },
            opacity: 0,
            ease: "power1.inOut"
            
        })
        
    }, [])

    return (
        <section id = "nav-bar" className="z-1 flex justify-between items-center pl-16 pr-20 font-poppins fixed bg-white w-full py-5" style={{zIndex: 99}}>
            <div className="flex items-start grow relative">
                <img className="h-10 pt-1 " id='company-logo' onClick={() => navigate('/')} src="images/org_logo_colored.svg" alt="" />
            </div>
            <div className="flex items-center justify-center grow">
                <ul className="flex items-center pt-1 justify-between font-poppins text-sm p-0 m-0 w-full list-none">
                    <li className="nav-item"><a className="decoration-none text-main-black no-underline" href="/">Home</a></li>
                    <li className="nav-item"><a className="decoration-none text-main-black no-underline" href="/about">About Us</a></li>
                    <li className="nav-item"><a className="decoration-none text-main-black no-underline" href="/contact">Contact Us</a></li>
                    <li className="nav-item"><a className="decoration-none text-main-black no-underline" href="/signup">Sign Up</a></li>
                </ul>
            </div>
            <div className="flex items-center grow justify-end">
                <button id="login-button" onClick={() => navigate('/login')} className="rounded py-2 px-4 bg-black  font-semibold ">Login</button>
            </div>
        </section>
    )

}