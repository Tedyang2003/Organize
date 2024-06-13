import React, {useState, useEffect} from "react"
import useDocumentTitle from "../components/useDocumentTitle"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../constants";

export default function SignUpPage() {
    
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    useDocumentTitle("Ready to Organize?")
    
    async function signUp() {
        const signup = {
            username: username,
            email: email,
            password: password
        }

        console.log(signup)

        try {
            const response = await axios.post(API+'/user/signup', signup);
            console.log(response.data.uid)
            sessionStorage.setItem("uid", response.data.uid);
            navigate("/main")

        }catch(error) {
            console.error(error.message)
        }
    }

    return (
        <div className="bg-signup-bg bg-cover h-screen min-h-min-page-height animate-page-fade opacity-custom-0">
             <div className='flex gap-x-1 pt-8 pb-0 px-20'>
                <div>
                    <img className="w-44" src="images/org_colored.png" alt="" />
                </div>
                <ul className="flex items-center justify-between">
                    <li className="mx-8"><a className=" no-underline text-main-black font-poppins hover:text-main-blue ease-in duration-300" href="/">Home</a></li>
                    <li className="mx-8"><a className=" no-underline text-main-black font-poppins hover:text-main-blue ease-in duration-300" href="/login">Login</a></li>
                </ul>
            
            </div>
            <div className="w-4/12 mt-8 mx-24 flex justify-around flex-col h-login-height">
                <div>
                    <h3 className="text-base font-poppins opacity-custom-0 animate-sub-head-fade">Hey You're new here</h3>
                    <h1 className="font-semibold font-poppins  opacity-custom-0 animate-main-head-fade custom-opacity">Ready to <span className="text-main-blue">organize</span>?</h1>
                </div>

                <form >
                    <p className="font-poppins mb-3 text-sm">Sign up now!</p>
                    <div className="flex flex-col border-solid border-1 border-light-grey focus-within:border-main-black ease-in duration-300 focus-within:text-black rounded mt-3 mb-10 w-full py-2 px-2">
                        <label className="animate-label-fade opacity-custom-0 mb-1 text-xs text-custom-grey font-poppins" htmlFor="">Username</label>
                        <input className="border-none outline-none text-sm" type="text" value={username} onChange={(e)=> setUserName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col border-solid border-1 border-light-grey focus-within:border-main-black ease-in duration-300 focus-within:text-black rounded mt-3 mb-10 w-full py-2 px-2">
                        <label className="animate-label-fade opacity-custom-0 mb-1 text-xs text-custom-grey font-poppins" htmlFor="">Email Address</label>
                        <input className="border-none outline-none text-sm" type="text"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="flex flex-col border-solid border-1 border-light-grey focus-within:border-main-black ease-in duration-300 focus-within:text-black rounded mt-3 w-full py-2 px-2">
                        <label className="animate-label-fade opacity-custom-0 mb-1 text-xs text-custom-grey font-poppins"  htmlFor="">Password</label>
                        <input className="border-none outline-none text-sm" type="password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                
                    <div className="flex justify-end w-full">
                        <p className="font-poppins text-light-grey text-sm mt-2">Already a member? <a href="/login" className="text-main-blue no-underline">Login here</a></p>
                    </div>

                </form>

                <button className="w-full h-fit bg-main-blue text-white py-3 opacity-85	hover:opacity-100 ease-in duration-300 px-0 rounded-3xl border-none outline-none text-xs " onClick={() => {
                    signUp()
                }}> Join us now</button>


        </div>

        </div>
        
    )

}