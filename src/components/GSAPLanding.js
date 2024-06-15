

import gsap from "gsap"
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, TextPlugin)

export default function landingAnimate() {


    const timeline = gsap.timeline()
    const infiniteClick = gsap.timeline({repeat: -1})
    const quote = "Ready to revolutionize your workflow?"


    // Page Launch
        timeline.fromTo(".landing-h1", {
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
        
        timeline.to(".bubble", {
            y:0,
            opacity: 1,
            stagger: 0.2
        }, "<")

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


        timeline.to(".landing-button", {
            ease: "power1.inOut",
            opacity: 1,
            y: 0
        })
        

        gsap.to(".dashed-ring", {
            rotate: "360deg",
            repeat: -1,
            duration: 100
        })

        //Infinite Replay

        infiniteClick.to("#landing-dropdown", {
            opacity: 1,
            y: 0,
            delay: 10
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

        gsap.to("#why-us-1 .appear", {
            scrollTrigger: {
                trigger: "#why-us-1",
                // markers: true,
                start: '-40% 40%',
                end: '-10% 20%',
                scrub: 1,
            },
            ease: "power1.inOut",
            y: 0,
            opacity: 1,
            stagger: 0.2        
        })
        
        gsap.to("#why-us-1 .line", {
            scrollTrigger: {
                trigger: "#why-us-1",
                // markers: true,
                start: '-40% 40%',
                end: '-10% 20%',
                scrub: 1,
            },
            ease: "power1.inOut",
            width: "70%",
            opacity: 1,
            stagger: 0.4      
        })


        gsap.to("#why-us-2 .appear", {
            scrollTrigger: {
                trigger: "#why-us-2",
                // markers: true,
                start: '-40% 40%',
                end: '-10% 20%',
                scrub: 1,
            },
            ease: "power1.inOut",
            y: 0,
            opacity: 1,
            stagger: 0.2        
        })
        
        gsap.to("#why-us-2 .line", {
            scrollTrigger: {
                trigger: "#why-us-2",
                // markers: true,
                start: '-40% 40%',
                end: '-10% 20%',
                scrub: 1,
            },
            ease: "power1.inOut",
            width: "70%",
            opacity: 1,
            stagger: 0.4      
        })

                
        gsap.fromTo("#powered-by > div", {width:0, opacity: 0},{
            scrollTrigger: {
                trigger: "#powered-by",
                // markers: true,
                start: '-40% 60%',
                end: '-10% 50%',
                scrub: 1,
            },
            ease: "power1.inOut",
            width: "100%",
            opacity: 1,
        })

        gsap.fromTo("#powered-by h2", {width:0, opacity: 0, scale: 6,},{
            scrollTrigger: {
                trigger: "#powered-by",
                // markers: true,
                start: '-40% 60%',
                end: '-10% 50%',
                scrub: 1,
            },
            ease: "power1.inOut",
            width: "100%",
            opacity: 1,
            scale: 1
        })

        gsap.fromTo("#side-ring", {width: "300vw"},{
            scrollTrigger: {
                trigger: "#reviews",
                markers: true,
                start: '0% 100%',
                end: '40% 50%',
                scrub: 12,
        
            },
            ease: "none",
            x: "290vw",
        })
}

