'use client'

import Link from "next/link"
import React, { useEffect, useId, useState } from "react"



export default function CreateStaff() {
  const tasksId = useId()
  const [signin,setSignin] = useState(true)

  
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
  <div id="signup" className="w-[50%] m-auto p-[20px] mt-[80px] h-full bg-slate-100 flex-col pt-[25px]">
        
        {/* form fields */}
        <div className="pl-[30px] pt-[5px]">
        <p className="pb-1 font-bold text-md">Email</p>
        <input onKeyUp={() => {
          if(emailSignUp.includes('@') && emailSignUp.includes('.')) {
            setEmailErrorsSignUp(false)
            return
          }
          setEmailErrorsSignUp(true)
        }} className={
          emailErrorsSignUp?
          "outline-none p-[5px] border-2 border-red-500 w-[80%] focus:shadow-md focus:shadow-gray-900":
          "outline-none p-[5px] border-2 border-green-600 w-[80%] focus:shadow-md focus:shadow-gray-900"
        } type='email' value={emailSignUp} onChange={e => setEmailSignUp(e.target.value)} placeholder="Enter your email" />
      </div>

      <div className="pl-[30px] pt-[5px]">
        <p className="pb-1 font-bold text-md">First Name</p>
        <input onKeyUp={() => {
          if(firstNameSignUp.length>3) {
            setFirstNameErrorsSignUp(false)
            return
          }
          setFirstNameErrorsSignUp(true)
        }} className={
          firstNameErrorsSignUp?
          "outline-none p-[5px] border-2 border-red-500 w-[80%] focus:shadow-md focus:shadow-gray-900":
          "outline-none p-[5px] border-2 border-green-600 w-[80%] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={firstNameSignUp} onChange={e => setFirstNameSignUp(e.target.value)} placeholder="Enter your first name" />
      </div>

      <div className="pl-[30px] pt-[5px]">
        <p className="pb-1 font-bold text-md">Last Name</p>
        <input onKeyUp={() => {
          if(lastNameSignUp.length>3) {
            setLastNameErrorsSignUp(false)
            return
          }
          setLastNameErrorsSignUp(true)
        }} className={
          lastNameErrorsSignUp?
          "outline-none p-[5px] border-2 border-red-500 w-[80%] focus:shadow-md focus:shadow-gray-900":
          "outline-none p-[5px] border-2 border-green-600 w-[80%] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={lastNameSignUp} onChange={e => setLastNameSignUp(e.target.value)} placeholder="Enter your last name" />
      </div>
      <div className="pl-[30px] pt-[5px]">
        <p className="pb-1 font-bold text-md">Password</p>
        <input onKeyUp={() => {
          console.log("password signup")
          if(passwordSignUp.length>3) {
            setPasswordErrorsSignUp(false)
            return
          }
          setPasswordErrorsSignUp(true)
        }} className={
          passwordErrorsSignUp?
          "outline-none p-[5px] border-2 border-red-500 w-[80%] focus:shadow-md focus:shadow-gray-900":
          "outline-none p-[5px] border-2 border-green-600 w-[80%] focus:shadow-md focus:shadow-gray-900"
        } type='password' value={passwordSignUp} onChange={e => setPasswordSignUp(e.target.value)} placeholder="Enter your password" />
      </div>

      <div className="pl-[30px] pt-[5px]">
        <p className="pb-1 font-bold text-md">Confirm Password</p>
        <input onKeyUp={() => {
          if(passwordConfirmSignUp === passwordSignUp) {
            setPasswordConfirmErrorsSignUp(false)
            return
          }
          setPasswordConfirmErrorsSignUp(true)
        }} className={
          passwordConfirmErrorsSignUp?
          "outline-none p-[5px] border-2 border-red-500 w-[80%] focus:shadow-md focus:shadow-gray-900":
          "outline-none p-[5px] border-2 border-green-600 w-[80%] focus:shadow-md focus:shadow-gray-900"
        } type='password' value={passwordConfirmSignUp} onChange={e => setPasswordConfirmSignUp(e.target.value)} placeholder="Confirm your password" />
      </div>
        <p onClick={handleSignUp} className='m-[30px] cursor-pointer border border-zinc-950 w-[50%] text-center h-fit pl-4 pr-4 relative hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-900'>Create Staff</p>
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
      role: "staff"
    }

    await fetch("https://affi.onrender.com/user", {
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

    alert("STAFF CREATED SUCCESSFULLY!!")
    setEmailSignUp('')
    setPasswordSignUp('')
    setPasswordConfirmSignUp('')
    setFirstNameSignUp('')
    setLastNameSignUp('')
   
  })
  .catch(e => {
    alert(e.message)
  })
  }

}