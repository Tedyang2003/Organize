import React, {useState} from "react"
import Navbar from "../components/Navbar"
import useDocumentTitle from "../components/useDocumentTitle";
import { useGSAP } from "@gsap/react";
import landingAnimate from "../components/GSAPLanding";

export default function LandingPage() {
    useDocumentTitle("Home")

    const reviewList = [
        {
            image: "https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Mary Lungenbe",
            review: "Definitely recommend this to others, I feel so much more productive while using this app. I can even reflect on myself at night with its journal feature",
            reviewDate: "24/7/19"
        },
        {
            image: "https://images.pexels.com/photos/8517921/pexels-photo-8517921.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Suzana",
            review: "Great application to plan your schedule as well as tasks that need to be completed. Can’t live without this app",
            reviewDate: "18/01/18"
        },
        {
            image: "https://images.pexels.com/photos/746386/pexels-photo-746386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Timothy Pacom",
            review: "After using this app, I feel that I no longer procrastinate on work that I need to complete. I use it ot organize by day, all day everyday",
            reviewDate: "11/01/12"
        },
        {
            image: "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Josh Emanual",
            review: "This app is amazing, I needed this in my life. It really works in increasing your productivity. 10/10 would recommend",
            reviewDate: "20/03/03"
        }
    ]

    const [displayVid, setDisplayVid] = useState(1)

    useGSAP(() => {
        landingAnimate()
    }, [])


    function Card ({image, name, review, reviewDate}){
        return (
            <div className="bg-white rounded-xl w-1/4 px-4 py-4 flex flex-col justify-between font-lato shadow-float-window ">
                <div className="">
                    <img className="w-8" src="images/quote.png" alt="" />
                    <p className="w-full text-base mt-3">{review}</p>
                </div>
                <div className="flex items-center">
                    <img className="w-12 h-12 rounded-full" src={image} alt="" />
                    <div className="ml-4">
                        <h2 className="text-base p-0 m-0 font-poppins">{name}</h2>
                        <span className="text-sm">Reviewed: {reviewDate}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <section className=" pb-10 relative  flex mb-2 h-screen items-center gap-6">
                <div id="landing-text" className="pt-12  z-1 grow flex flex-col  font-poppins ml-24 my-16 w-7/12  relative justify-center">
                    <div className="relative mt-5">
                        <h1 id="test" className=" landing-h1 relative start0 font-semibold text-black leading-landing-h1 text-5xl my-2  z-0">
                            <span id="h1-streamline" className="text-main-blue">Streamline</span> Your
                        </h1>
                        
                        <div id="landing-h1-line" className="absolute w-full bg-white text-6xl text-white z-1">k</div>
                        <h1 className="landing-h1 relative start0 font-semibold text-black leading-landing-h1 text-5xl my-2  z-1">Projects</h1>
                        <div id="landing-h1-line" className="absolute w-full bg-white text-6xl text-white z-2">k</div>
                        <h1  className="landing-h1 relative start0 font-semibold text-black leading-landing-h1 text-5xl my-2  z-2"><span id="h1-simplify" className="text-main-green">Simplify</span> Your Schedule</h1>
                        <div id="landing-h1-line" className="absolute w-full bg-white text-6xl text-white z-3">k</div>

                        <p id="landing-desc" className="start0 my-10 w-5/6 text-lg z-3">
                        Streamline Your Day with Ease, Take Control of Your Schedule, and reflect on your progress. All in one place with us
                        </p>
                    </div>
     

                    <div className="landing-buttons flex gap-5">
                        <button className="landing-button bg-main-blue w-fit px-4 py-3 rounded  mt-2 text-sm text-white">
                            Get Started
                        </button>                
                        <button className="landing-button bg-white w-fit px-4  py-3 mt-2 rounded text-sm border-black border-2">
                            More About Us
                        </button>           
                    </div>            
                </div>

                
                <div className="w-7/12 mr-10 h-full relative justify-center py-12" id="landing-img">
                    <div className="w-full h-full relative my-10">
                        <div className="bubble w-big-bubble h-big-bubble rounded-full absolute top-10 flex items-center justify-center">
                            <div className=" bg-cover bg-bubble-1 absolute rounded-full cover w-4/5 h-4/5" />
                            <div className="dashed-ring absolute w-full h-full rounded-full border-2 border-dashed border-main-blue"></div>
                        </div>
                        <div>
                            <div className="bubble  w-40 h-40 cover rounded-full absolute bottom-20 right-0 bg-cover bg-bubble-2" />
                        </div>
                        <div>
                            <div className="bubble  w-40 h-40 cover rounded-full absolute top-0 right-0 bg-cover bg-bubble-3" />
                        </div>
                        
                        <div>
                            <div className="bubble  w-20 h-20 bottom-20 cover rounded-full absolute  left-20 bg-cover bg-bubble-4" />
                        </div>

                        <ul id="landing-task" className=" font-medium list-outside shadow-float-window list-disc marker:text-main-blue absolute bg-white font-poppins w-64 rounded-xl bottom-0 -left-20 text-sm px-3 py-2 ">
                            <div className="px-3 py-3 landing-task-item">
                                <span className="text-xs">10.00am - 11.00am</span>
                                <li >Meeting with Data Science Team</li>
                            </div>
                            <div  className="px-3 py-3 landing-task-item">
                                <span className="text-xs">10.00am - 11.00am</span>
                                <li>Website Wrap up and Launch </li>
                            </div>
                            <div  className="px-3 py-3 landing-task-item">
                                <span className="text-xs">10.00am - 11.00am</span>
                                <li>Finalize Meeting Email</li>
                            </div>
                        </ul>

                        <div className="absolute w-48 font-poppins text-sm right-40 bottom-10 ">
                            <div className="flex items-center bg-white justify-between shadow-float-window px-3 py-2 rounded-lg">
                                <span className="text-light-grey">Pick a category</span><span id="drop-box" className="text-main-black absolute bg-white w-full font-medium">Project Task</span><i id="chev" className='bx bx-chevron-down text-2xl text-main-blue z-3' ></i>
                            </div>

                            <div id="landing-dropdown" className="bg-white shadow-float-window py-2 rounded-lg mt-4">
                                <ul className="p-0 font-medium ">
                                    <li id="drop-item-1" className="landing-drop-item px-3 py-2 ">Company Meeting</li>
                                    <li id="drop-item-2" className="landing-drop-item px-3 py-2 ">Project Task</li>
                                    <li className="landing-drop-item px-3 py-2 ">Project Launch</li>
                                    <li className="landing-drop-item px-3 py-2 ">Feature Merging</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                    {/* <div className="w-4/5 h-full blur-lg rounded-full bg-radial-elipse absolute top-0 rotate-12 ml-auto mx-auto left-0 right-0">
                    </div> */}
                </div>     
                <div id="cover-trigger"></div>       
                <div className="absolute w-screen " id="landing-cover" >
                    <div className="w-full top-0 absolute bg-overlay-radial-white flex flex-col justify-center items-center py-96 px-60 w-screen h-screen text-center">
                        <h1 className="text-6xl font-poppins font-semibold  pt-10" id="quote"> </h1>
                    </div>
                    <img src="images/gradient_bg3.jpg" alt="" className="h-full w-full cover " />
                </div>
            </section>
 

            <section id="showcase" className="relative my-40 font-poppins px-28 pt-40 bg-white " >
                <div className="z-0 absolute right-0 top-0 ">

                  <div className="absolute h-3/5 w-full bg-overlay-top-white z-1"></div>
                  <div className="absolute bottom-0 h-1/5 w-full bg-overlay-bottom-white z-1"></div>
                  <div className="absolute h-full w-full bg-overlay-left-white "></div>

                  <img className="w-full z-0 " src="images/gradient_bg.webp" alt="" />

                </div>
                <h1 id="showcase-h1" className="z-1 relative  text-center text-4xl font-semibold lg:w-8/12  md:w-10/12 sm:w-full mx-auto z-1"><span className="text-main-blue">Planning</span> every event, <span className="text-main-green">Capturing</span> every experience</h1>
                <p id="showcase-p" className="z-1  relative text-center mt-8 font-lato text-lg z-1 font-normal">A place where every individual organizes and reflects on themselves</p>
                <div id="showcase-section" className="z-1 flex mx-auto mt-28  items-center justify-center h-96 relative z-1 gap-20">
                    <ul className="w-96 flex flex-col justify-between m-0 gap-4 " >
                        <li onClick={() => setDisplayVid(1)} className={displayVid===1?"showcase-section-item rounded-xl bg-ghost-white-translucent px-4 py-3  font-semibold text-md flex items-center shadow-custom-lg bg-white": "showcase-section-item hover:shadow-custom-lg transition-all rounded-xl bg-ghost-white-translucent px-4 py-3  font-semibold text-md flex items-center"}>
                            <i className='bx bxs-cog text-2xl' ></i>
                            <div className="ml-4">
                                <h4 className="text-base p-0 m-0">Easy to use UI </h4>
                                <p className="text-xs text-custom-grey font-normal  font-lato p-0 m-0">Plan your projects with your team effortlessly using our planner tool</p>
                            </div>
                        </li>
                        <li onClick={() => setDisplayVid(2)} className={displayVid===2?"showcase-section-item rounded-xl bg-ghost-white-translucent px-4 py-3  font-semibold text-md flex items-center shadow-custom-lg bg-white": "showcase-section-item hover:shadow-custom-lg transition-all rounded-xl bg-ghost-white-translucent px-4 py-3  font-semibold text-md flex items-center"}>
                            <i className='bx bxs-group text-2xl' ></i>
                            <div className="ml-4">
                                <h4 className="text-base p-0 m-0"> Real Time Collaborative Planning</h4>
                                <p className="text-xs text-custom-grey font-normal  font-lato p-0 m-0">Plan your projects with your team effortlessly using our planner tool</p>
                            </div>
                        </li>
                        <li onClick={() => setDisplayVid(3)} className={displayVid===3?"showcase-section-item rounded-xl bg-ghost-white-translucent px-4 py-3  font-semibold text-md flex items-center shadow-custom-lg bg-white": "showcase-section-item hover:shadow-custom-lg transition-all rounded-xl bg-ghost-white-translucent px-4 py-3  font-semibold text-md flex items-center"}>
                            <i className='bx bx-run text-2xl'></i>
                            <div className="ml-4">
                                <h4 className="text-base p-0 m-0"> Quick Planning and Assitance</h4>
                                <p className="text-xs text-custom-grey font-normal  font-lato p-0 m-0">Plan your projects with your team effortlessly using our planner tool</p>

                            </div>
                        </li>
                        <li onClick={() => setDisplayVid(4)} className={displayVid===4?"showcase-section-item rounded-xl bg-ghost-white-translucent px-4 py-3  font-semibold text-md flex items-center shadow-custom-lg bg-white": "showcase-section-item hover:shadow-custom-lg transition-all rounded-xl bg-ghost-white-translucent px-4 py-3  font-semibold text-md flex items-center"}>
                            <i className='bx bxs-bell-ring text-2xl' ></i>
                            <div className="ml-4">
                                <h4 className="text-base p-0 m-0">Browser Based Notifications </h4>
                                <p className="text-xs text-custom-grey font-normal  font-lato p-0 m-0">Plan your projects with your team effortlessly using our planner tool</p>

                                
                            </div>
                        </li>
                    </ul>
                    <div id="screen" className="w-screen-showcase h-full border-solid border-4 rounded-md border-main-black bg-white z-1 ">

                    </div>
                </div>
            </section>



            <section className="flex my-20 px-28 justify-between font-lato font-normal" id="why-us-1">
                <div className="grow w-7/12">
                    <div className="">
                        
                    </div>
                </div>
                <div className="grow w-5/12 p-5">
                    <div className="font-poppins text-main-blue flex items-center ">
                        <p className="appear tracking-widest p-0 mb-0 mr-5 font-medium ">WHY US?</p>
                        <div className="line  h-1 bg-main-blue p-0 m-0"></div>
                    </div>
                    <h2 className="appear my-4 font-poppins leading-normal font-semibold text-3xl">Elevate Your <span className="text-main-blue">Journey</span> with Our Integrated <span className="">Planner</span></h2>
                    <p className="appear my-8 ">
                        Discover the ultimate tool to enhance your daily life. Our platform seamlessly allows intuitive planning features , empowering you to navigate life with clarity and purpose.
                    </p>
                    <p className="appear">
                        With our app, you'll embark on a trans-formative journey with better time management, guiding you towards a more balanced lifestyle
                    </p>
                </div>
            </section>

            
            <section className="flex my-20 px-28 font-lato font-normal" id="why-us-2">
                <div className="grow w-5/12 p-5">
                    <div className="font-poppins text-main-blue flex items-center">
                        <p className="appear tracking-widest p-0 mb-0 mr-5 font-medium ">WHY US?</p>
                        <div className=" bg-main-blue p-0 m-0 h-1 line"  ></div>
                    </div>
                    <h2 className="appear my-4 font-poppins leading-normal font-semibold text-3xl">Streamline Your Workflow With <span className="text-main-green">Seamless</span> Collaboration</h2>
                    <p className="appear my-8 ">
                        With intuitive tools, you can effortlessly organize your tasks and enhance team collaboration. Whether you're planning projects, setting deadlines, or tracking progress, our platform provides a unified space for your entire team to stay in sync. </p>             
                    <p className="appear mt-8">
                        Achieve greater efficiency and productivity with every project.
                    </p>
                    
                </div>

                <div className="grow w-7/12">
                </div>
            </section>

            <section className="py-10 text-center font-poppins font-medium " id="powered-by">
            <h2 className="text-2xl">Powered By</h2>

            <div className="overflow-hidden flex w-full m-auto  pt-4 relative p place-items-center">
                <div className="flex w-track animate-carousel-auto-scroll">
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/firebase.png" alt="" />
                    </div >
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/github.png" alt="" />
                    </div >
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/vercel.png" alt="" />
                    </div >
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/node.png" alt="" />
                    </div >
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/react.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/socketio.png" alt="" />
                    </div>

                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/firebase.png" alt="" />
                    </div >
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/github.png" alt="" />
                    </div >
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/vercel.png" alt="" />
                    </div >
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/node.png" alt="" />
                    </div >
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/react.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-software h-software">
                        <img className="w-7/12" src="images/socketio.png" alt="" />
                    </div>


                </div>
            </div>
            </section>

            <section  className="mt-60 relative pb-20" id="reviews" >
                {/* <div className="z-0 absolute left-0 top-0 w-full">
                    <div className="absolute h-full w-full bg-overlay-radial-white z-1"></div>
                    <img className="w-full h-full" style={{opacity:0.4, zIndex:-1, position: "relative"}} src="images/gradient_bg2.webp" alt="" />
        
                </div> */}
                <div className="px-24 w-2/5 font-poppins z-1 relative">
                    <h2 className="text-4xl font-semibold">What <span className="text-main-blue">People</span> say <span className="text-main-green">About</span> Us</h2>
                    <p className="w-4/5 pt-3 text-lg">Check out the reviews of users that have used our service</p>
                </div>
                <div className="px-24 mt-20 h-card flex gap-14 justify-between z-1 relative">
                    {reviewList.map((data, index) => {
                        return <Card key={index} name={data.name} image={data.image} review={data.review} reviewDate={data.reviewDate} />
                    })}                    
                </div>

                <div id="side-ring" className="w-72 h-72 bg-white z-1 absolute  rounded-full -top-28 -right-40 border-8 border-solid border-main-blue flex items-center justify-center">
                    <h1 className="text-9xl flex items-center font-poppins font-medium mx-20 gap-20 overflow-hidden">
                        <span>
                        Repeat. 
                        </span>
                        <span>
                        Succeed. 
                        </span>
                        <span>
                        Focus.
                        </span>
                        <span>
                        Plan.   
                        </span>
                        <span>
                        Organize.
                        </span>
                        <span>
                        Repeat. 
                        </span>
                        <span>
                        Succeed. 
                        </span>
                        <span>
                        Focus.
                        </span>
                        <span>
                        Plan.   
                        </span>
                        <span>
                        Organize.
                        </span>
                        <span>
                        Repeat. 
                        </span>
                        <span>
                        Succeed. 
                        </span>
                        <span>
                        Focus.
                        </span>
                        <span>
                        Plan.   
                        </span>
                        <span>
                        Organize.
                        </span>
                    </h1>
                </div>
            </section>
        </div>
    )

}