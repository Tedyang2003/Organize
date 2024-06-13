

import gsap from "gsap"
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function landingAnimate() {


    const timeline = gsap.timeline()
    const infiniteClick = gsap.timeline({repeat: -1})
    const quote = "Success is not final, failure is not fatal. It is the courage that counts"


    timeline.fromTo(".landing-h1", 
        {
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            width: "100%",
            delay: 1,
            duration: 0.5,
            ease: 'back.Out',
            stagger: 0.2
        })

        timeline.to("#notebook",
        {
            opacity: 1,
            y:0,
            scale: 1,
            ease: "power.inOut"  
        })

        timeline.to(".landing-task-item", {
            opacity: 1,
            y: 0,
            rotate: 0,
            stagger: 0.1
        }, "<")

        timeline.fromTo("#landing-desc", 
            {
                y: 20
            }
            ,{
            ease: "power1.inOut",
            opacity: 1,
            y: 0
        }, "<")

        timeline.to("#landing-button-1", {
            x: 1,
            y: 0,
            ease: "bounce.inOut",
            duration: 2
        }, "<")

        timeline.to("#landing-button-2", {
            x: 1,
            y: 0,
            ease: "bounce.inOut",
            duration: 2,
        }, "<")
        
        timeline.to("#landing-button-1", {
            width: "10rem",
            height: "3.5rem",
            borderRadius: "5px",
        })

        timeline.to("#landing-button-2", {
            width: "13rem",
            height: "3.5rem",
            borderRadius: "5px",
        }, "<")

        timeline.to("#landing-button-1", {
            color: "#FFF",
        })

        timeline.to("#landing-button-2", {
            color: "#000",
        }, "<")


        infiniteClick.to("#cursor", {
            x: 0,
            y: 0
        })

        
        infiniteClick.to("#landing-dropdown", {
            opacity: 1,
            y: 0,
        })

        infiniteClick.to("#chev", {
            rotate:"0deg"
        }, "<")


        infiniteClick.to(".landing-drop-item", {
            opacity: 1,
            y: 0,
            rotate: 0,
            stagger: 0.1
        })
        
        infiniteClick.to("#cursor", {
            x: -20,
            y: 100,
            duration: 2,
            ease: "sine.out"
        })
         
        infiniteClick.to("#drop-item-1", {
            backgroundColor:"#3A5DE9",
            color: "#FFF",
            duration: 0.3,
            ease: "sine.out",
            delay: 0.6
        }, "<")
        
        infiniteClick.to("#drop-item-1", {
            backgroundColor:"#FFF",
            color: "black",
            duration: 0.3,
            ease: "sine.out",
            delay: 0.7
        }, "<")

        infiniteClick.to("#drop-item-2", {
            backgroundColor:"#3A5DE9",
            color: "#FFF",
            duration: 0.3,
            ease: "sine.out",
            delay: 0.7
        }, "<")

        
        infiniteClick.to("#landing-dropdown", {
            opacity: 0
        })
        infiniteClick.to("#chev", {
            rotate:"180deg"
        }, "<")


        infiniteClick.to("#cursor", {
            x: -450,
            y: 320,
            duration: 2,
            ease: "sine.out"
        })

        infiniteClick.to("#cursor", {
            x: -520,
            y: 250,
            duration: 2,
            ease: "sine.out"
        })

        
        infiniteClick.to("#landing-task", {
            x: -50,
            y: -60,
            duration: 2,
            ease: "sine.out"
        }, "<")
        

        infiniteClick.to("#cursor", {
            x: -300,
            y: 1000,
            duration: 2,
            ease: "sine.out"
        })
        


        infiniteClick.to("#cursor", {
            x: -520,
            y: 250,
            duration: 2,
            ease: "sine.out"
        })


        infiniteClick.to("#cursor", {
            x: -450,
            y: 320,
            duration: 2,
            ease: "sine.out"
        })

        
        infiniteClick.to("#landing-task", {
            x: 0,
            y: 0,
            duration: 2,
            ease: "sine.out"
        }, "<")

        infiniteClick.to("#cursor", {
            x: 50,
            y: 50,
            duration: 2,
            ease: "sine.out"
        })


        gsap.to('#showcase-h1',{
            scrollTrigger: {
                trigger: '#showcase-h1',
                // markers: true,
                start: 'top 80%',
                end: 'bottom 30%',
                toggleActions:"play pause reverse pause",
                scrub: 1
            },
            y: 0,
            opacity: 1,
            ease: "power1.inOut",
            duration: 1
        })

        gsap.to('#showcase-p',{
            scrollTrigger: {
                trigger: '#showcase-p',
                // markers: true,
                start: 'top 80%',
                end: '20% 20%',
                toggleActions:"play pause reverse pause",
                scrub: 1
            },
            y: 0,
            opacity: 1,
            rotate: 0,
            x: 0,
            ease: "power1.inOut",
            duration: 1
        })
        
        gsap.to(".showcase-section-item ", {
            scrollTrigger: {
                trigger: '#showcase-h1',
                // markers: true,
                start: '50% 40%',
                end: '20% 20%',
                toggleActions:"",
                scrub: 1
            },
            y:0,
            opacity: 1,
            rotate: 0,
            x: 0,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.2,
            margin: "5px 0px"
        })

                
        gsap.to("#screen ", {
            scrollTrigger: {
                trigger: '#showcase-h1',
                // markers: true,
                start: '20% 50%',
                end: '0% 40%',
                toggleActions:"",
                scrub: 1
            },
            y:0,
            opacity: 1,
            x: 0,
            ease: "power1.inOut",
            duration: 1,
            height: "100%"
        })

        gsap.to("#landing-cover", {
            scrollTrigger: {
                trigger: '#landing-text',
                // markers: true,
                start: '40% 10%',
                end: '200% 20%',
                toggleActions:"",
                scrub: 2
            },
            y:0,
            opacity:1,
            ease:"sine.in",
        })

                
        gsap.to("#quote", {
            scrollTrigger: {
                trigger: '#cover-trigger',
                // markers: true,
                start: '30% 30%',
            },
            yoyo: true, text: quote,  duration: 2
        })


        timeline.fromTo(".landing-h1", {y:0}, {
            scrollTrigger: {
                trigger: '#landing-text',
                // markers: true,
                start: '10% 10%',
                end: '30% 20%',
                scrub: 1,
            },
            y: 50,
            width: "100%",
            delay: 1,
            duration: 0.5,
            ease: 'back.Out',
            stagger: 0.2
        })

        timeline.fromTo("#landing-desc", 
            {
                y: 0
            }
            ,{
                scrollTrigger: {
                    trigger: '#landing-text',
                    // markers: true,
                    start: '20% 10%',
                    end: '30% 20%',
                    scrub: 1,
                },
            ease: "power1.inOut",
            y: 20,
            opacity: 0
        }, "<")
        
}