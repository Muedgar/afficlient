'use client'

import Link from "next/link"
import { useEffect, useId, useState } from "react"
import View from "../components/view"
import CreateAffidavit from "../components/create"


export default function Staff() {
        const [view, setView] = useState("create")
  const [search, setSearch] = useState("")
const [loginStatus, setLoginStatus] = useState(false)

  const homeId = useId()
  
const [affidavits, setAffidavits] = useState([])
let current = "once"
  useEffect(() => {
    if(localStorage.getItem("loggedInUser")) {
      setLoginStatus(true)
    }else {
      document.getElementById(homeId)?.click()
    }
  },[current])
let getAffiStatus = "once"
useEffect(() => {
  async function getData() {
    await fetch("https://affi.onrender.com/affidavit")
    .then(d => d.json())
    .then(d => {
      setAffidavits(d)
    })
    .catch(e=> {
      alert("could not get affidavits from server, please contact supports")
    })
  }
  getData()
}, [getAffiStatus])

async function getData() {
    await fetch("https://affi.onrender.com/affidavit")
    .then(d => d.json())
    .then(d => {
      setAffidavits(d)
    })
    .catch(e=> {
      alert("could not get affidavits from server, please contact supports")
    })
  }

  async function getAffidavitByName() {
    await fetch("https://affi.onrender.com/affidavit/name/"+search.trim())
    .then(d => d.json())
    .then(d => {
      setAffidavits(d)
    })
    .catch(e=> {
      alert("could not get affidavits from server, please contact supports")
    })
  }
  return (
<>
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
            setView('affidavits')
            getData()
          }} className="w-fit h-fit p-2 mt-4 shadow-sm m-auto shadow-black bg-green-900 text-white cursor-pointer">View Affidavits</li>
          <li onClick={() => {
            setView('create')
          }} className="w-fit h-fit p-2 mt-4 shadow-sm m-auto shadow-black bg-green-900 text-white cursor-pointer">Create Affidavit</li>
          <li className="w-fit h-fit p-2 mt-4 shadow-sm m-auto shadow-black bg-green-900 text-white cursor-pointer"
          onClick={() => {
            localStorage.removeItem("loggedInUser")
            document.getElementById(homeId)?.click()
          }}>Signout</li>
        </ul>
      </div>
      {/* {view==="affidavits"&&
      <div className="flex relative justify-center items-center mt-[100px]">
        <input className={"outline-none p-[5px] border-2 border-green-300 w-[300px] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={search} onChange={e => {
            setSearch(e.target.value)
        }} placeholder="Search By Name ..." />

        <button onClick={() => {
            getAffidavitByName()
          }} className="w-fit h-fit p-2 shadow-sm ml-[5px] shadow-black bg-green-900 text-white cursor-pointer">View Affidavits</button>
         
        </div>} */}
      {view==="affidavits"&&<View affidavits={affidavits} />}
      {view==="create"&&<CreateAffidavit />}
      </div>
    
    </div>
</>

    
  )


}



