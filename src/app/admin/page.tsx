'use client'

import { useEffect, useId, useState } from "react"
import CreateStaff from "../components/createStaff"
import ViewStaff from "../components/viewStaff"
import Link from "next/link"

export default function Staff() {
  const [view, setView] = useState("create")
  const [loginStatus, setLoginStatus] = useState(false)

  const homeId = useId()

  let current = "once"
  useEffect(() => {
    if(localStorage.getItem("loggedInUser")) {
      setLoginStatus(true)
    }else {
      document.getElementById(homeId)?.click()
    }
  },[current])
  return (
    <div className="w-screen flex-col relative">
    <Link id={homeId} href={'/'} className="hidden"></Link>
      
      <div 
      className={loginStatus?
      "hidden":
      "w-screen h-screen absolute left-0 top-0 z-[999] bg-white flex flex-col justify-center items-center"
      }>
        <h1 className="text-2xl text-center">Loading ...</h1>
      </div>
    <div className="w-full flex-col relative justify-start">
      <div className="w-[150px] h-[300px] fixed flex-col justify-center items-center pt-3 left-[50px] top-[100px] bg-green-200">
        <p className="w-fit h-fit p-2 mt-4 shadow-sm m-auto shadow-black underline text-black cursor-pointer">Main Menu</p>
        <ul>
          <li onClick={() => {
            setView('staff')
          }} className="w-fit h-fit p-2 mt-4 shadow-sm m-auto shadow-black bg-green-900 text-white cursor-pointer">View Staff</li>
          <li onClick={() => {
            setView('create')
          }} className="w-fit h-fit p-2 mt-4 shadow-sm m-auto shadow-black bg-green-900 text-white cursor-pointer">Create Staff</li>
          <li 
          className="w-fit h-fit p-2 mt-4 shadow-sm m-auto shadow-black bg-green-900 text-white cursor-pointer"
          onClick={() => {
            localStorage.removeItem("loggedInUser")
            document.getElementById(homeId)?.click()
          }}>Signout</li>
        </ul>
      </div>
      
      {view==="staff"&&<ViewStaff />}
      {view==="create"&&<CreateStaff />}
      </div>
    
    </div>
  )


}



