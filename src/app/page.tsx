'use client'

import Link from "next/link"
import React, { useEffect, useId, useState } from "react"



export default function Home() {
  const adminId = useId()
  const staffId = useId()
  const [signin,setSignin] = useState(true)
  const [signinStatus, setSigninStatus] = useState("Sign In")
  
  // signin
  const [email, setEmail] = useState('')
  const [emailErrors, setEmailErrors] = useState(true)
  const [password, setPassword] = useState('')
  const [passwordErrors, setPasswordErrors] = useState(true)


  // signup
  const [emailSignUp, setEmailSignUp] = useState('')
  const [emailErrorsSignUp, setEmailErrorsSignUp] = useState(true)

  const [firstNameSignUp, setFirstNameSignUp] = useState('')
  const [firstNameErrorsSignUp, setFirstNameErrorsSignUp] = useState(true)

  const [lastNameSignUp, setLastNameSignUp] = useState('')
  const [lastNameErrorsSignUp, setLastNameErrorsSignUp] = useState(true)

  const [passwordSignUp, setPasswordSignUp] = useState('')
  const [passwordErrorsSignUp, setPasswordErrorsSignUp] = useState(true)
  const [passwordConfirmSignUp, setPasswordConfirmSignUp] = useState('')
  const [passwordConfirmErrorsSignUp, setPasswordConfirmErrorsSignUp] = useState(true)
  return (
   <>
   <div className='w-[80%] h-fit scroll-auto shadow-md shadow-black m-auto pb-[0px]'>
    <Link id={adminId} href={'/admin'} className="hidden"></Link>
    <Link id={staffId} href={'/staff'} className="hidden"></Link>
      <div className='w-full h-[500px] relative mt-[50px] flex justify-evenly bg-black'>
        <div id="signin" className="w-[50%] h-full bg-slate-100 flex flex-col justify-center items-center">
        {/* form fields */}
        <div className="pl-[30px] pt-[30px]">
        <p className="pb-2 font-bold text-md">Email</p>
        <input onKeyUp={() => {
          if(email.includes('@') && email.includes('.')) {
            setEmailErrors(false)
            return
          }
          setEmailErrors(true)
        }} className={
          emailErrors?
          "outline-none p-[5px] border-2 border-red-500 w-[100%] focus:shadow-md focus:shadow-gray-900":
          "outline-none p-[5px] border-2 border-green-600 w-[100%] focus:shadow-md focus:shadow-gray-900"
        } type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
      </div>

      <div className="pl-[30px] pt-[30px]">
        <p className="pb-2 font-bold text-md">Password</p>
        <input onKeyUp={() => {
          if(password.length>3) {
            setPasswordErrors(false)
            return
          }
          setPasswordErrors(true)
        }} className={
          passwordErrors?
          "outline-none p-[5px] border-2 border-red-500 w-[100%] focus:shadow-md focus:shadow-gray-900":
          "outline-none p-[5px] border-2 border-green-600 w-[100%] focus:shadow-md focus:shadow-gray-900"
        } type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
      <p onClick={() => {
          handleSignIn()
         
        }} className='mt-[30px] cursor-pointer border border-zinc-950 w-[100%] text-center h-fit pl-4 pr-4 relative hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-900'>{signinStatus}</p>
        
      </div>
        </div>
        <div className="w-[50%] h-full bg-slate-100 flex flex-col justify-center items-center pt-[25px]">
          <p className="text-[3em] text-center">E-Affidavit</p>
        </div>
        {/* <div className={signin?
        "absolute top-0 right-0 z-10 w-[50%] h-full bg-slate-200 flex justify-center items-center":
        "absolute top-0 left-0 z-10 w-[50%] h-full bg-slate-200 flex justify-center items-center"}>
          <p onClick={() => setSignin(!signin)} className='m-[30px] transition-all duration-[300] ease-in cursor-pointer border border-zinc-950 w-fit text-center h-fit pl-4 pr-4 relative hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-900'>{signin?`Don't have an account? Sign Up`:'Already have an account? Sign In'}</p>
        </div> */}
      </div>
   </div>
   </>
  )

  async function handleSignUp() {
    if(emailErrorsSignUp||firstNameErrorsSignUp||lastNameErrorsSignUp||passwordConfirmErrorsSignUp||passwordErrorsSignUp) {
      alert("Enter all fields correctly")
      return
    }

    if(passwordSignUp !== passwordConfirmSignUp) {
      alert("Passwords are not equal")
      return
    }

    let data = {
      email: emailSignUp,
      password: passwordSignUp,
      first_name: firstNameSignUp,
      last_name: lastNameSignUp,
      role: 'admin'
    }

    await fetch("http://localhost:3001/auth/signup", {
    method: "POST",
    mode: "cors", 
    cache: "no-cache", 
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
     
    },
    body: JSON.stringify(data), 
  }).then(d => d.json())
  .then(d => {
    if(d.message){
      setEmailErrors(true)
      setPasswordErrors(true)
      return
    }

    localStorage.setItem("loggedInUser", d.access_token)
    document.getElementById(adminId)?.click()
  })
  .catch(e => {
    alert(e.message)
  })
  }
  async function handleSignIn() {

    setSigninStatus("Signing in ...")
    if(emailErrors || passwordErrors) {
      alert("Enter all fields correctly")
      setTimeout(() => {
        setSigninStatus("Sign In")
      }, 1000);
      return
    }
    let data = {
      email,
      password
    }

    await fetch("http://localhost:3001/auth/signin", {
    method: "POST",
    mode: "cors", 
    cache: "no-cache", 
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
     
    },
    body: JSON.stringify(data), 
  }).then(d => d.json())
  .then(d => {
    if(d.message){
      setEmailErrors(true)
      setPasswordErrors(true)
      setSigninStatus("Sign In")
      return
    }

    localStorage.setItem("loggedInUser", d.access_token)
    
    if(d.role==="admin") {
      document.getElementById(adminId)?.click()
    }else if(d.role==="staff") {
      document.getElementById(staffId)?.click()
    }
  })
  .catch(e => {
    alert(e.message)
  })
    
  }

}