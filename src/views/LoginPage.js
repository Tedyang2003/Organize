import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {API} from "../constants"
import useDocumentTitle from "../components/useDocumentTitle";


export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useDocumentTitle("Let's get organized")

    
    async function login(){
        const response = await axios.post(API + "/user/login", {
            username: username,
            password: password
        })
        const data = response.data;
        console.log(data);
        if (!data){
            alert("Invalid username or password");
            return;
        }
        else{
            sessionStorage.setItem("uid", data.user_id);
            navigate("/main");
        }
    }

    return (
    <div className="bg-login-bg bg-cover h-screen min-h-min-page-height animate-page-fade opacity-custom-0">
    <div className='flex gap-x-1 pt-8 pb-0 px-20'>
       <div>
           <img className="w-44" src="images/org_colored.png" alt="" />
       </div>
       <ul className="flex items-center justify-between">
           <li className="mx-8"><a className=" no-underline text-main-black font-poppins hover:text-main-blue ease-in duration-300" href="/">Home</a></li>
           <li className="mx-8 "><a className=" no-underline text-main-black font-poppins hover:text-main-blue ease-in duration-300" href="/signup">Sign up</a></li>
       </ul>
   
   </div>
   <div className="w-3/12 mt-8 mx-24 flex justify-around flex-col h-login-height">
       <div>
           <h3 className="text-base font-poppins opacity-custom-0 animate-sub-head-fade">Welcome Back</h3>
           <h1 className="font-semibold font-poppins  opacity-custom-0 animate-main-head-fade custom-opacity">Let's get<span className="text-main-blue"> organized</span></h1>
       </div>

       <form>
           <p className="font-poppins mb-3 text-sm">New here? <span className="text-main-blue font-medium">Get Organized now!</span></p>
            <div className="flex flex-col border-solid border-1 border-light-grey focus-within:border-main-black ease-in duration-300 focus-within:text-black rounded mt-3 mb-10 w-full py-2 px-2">
                <label className="animate-label-fade opacity-custom-0 e mb-1 text-xs text-custom-grey font-poppins" htmlFor="">Username</label>
                <input className="border-none outline-none text-sm" type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div className="flex flex-col border-solid border-1 border-light-grey rounded mt-3 mb-1 w-full py-2 px-2 focus-within:border-main-black ease-in duration-300">
                <label className="animate-label-fade opacity-custom-0 mb-1 text-xs text-custom-grey font-poppins" >Password</label>
                <input className="border-none outline-none text-sm" type="password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
           <div className="flex justify-end w-full">
               <p className="font-poppins text-light-grey text-sm mt-2">Forgot Password</p>
           </div>

       </form>

            <button className="font-poppins w-full h-fit bg-main-blue text-white py-3 opacity-85	hover:opacity-100 ease-in duration-300 px-0 rounded-3xl border-none outline-none text-xs " onClick={() => {
                login()
            }}> Login </button>


        </div>
        </div>



    )

}