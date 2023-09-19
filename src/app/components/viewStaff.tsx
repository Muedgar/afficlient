'use client'

import Link from "next/link"
import React, { useEffect, useId, useState } from "react"

// import CreateTask from "./createtask/page"


export default function ViewStaff() {

  const [tasks, setTasks] = useState([])
  const logoutIdLink = useId()
  let getDataOne = "once"

  useEffect(() => {
    async function getData() {
      await fetch("https://affi.onrender.com/user")
        .then(d=>d.json())
        .then(d=>{
          let newD:any = []
          for(let i=0;i<d.length;i++) {
            if(d[i].role==="staff") {
              newD.push(d[i])
            }
          }
          setTasks(newD)
        })
        .catch(e=>console.log(e))
    }
    getData()
  }, [getDataOne])


  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 2
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = tasks.slice(firstIndex,lastIndex)
  const npage = Math.ceil(tasks.length/recordsPerPage)
  const numbers:number[] = getNumbers()

  function getNumbers() {
    // [...Array(npage+1).keys()].slice(1)
    let arr = []
    for(let i=0;i<npage;i++) {
      arr.push(i+1)
    }
    return arr
  }

  // console.log("recordsPerPage ",recordsPerPage, "lastIndex  ", lastIndex, "firstIndex", firstIndex, "records  ", records, "npage  ", npage, "numbers  ", numbers)
  
  //  name
  const [name, setName] = useState('')
  // dates
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  return (
    <>
      <div className='w-[60%] h-fit scroll-auto bg-green-200 mt-[100px] m-auto pb-[30px]'>
      
      

      {/* all tasks */}
      <div className="w-full h-fit mt-[10px] pt-[50px]">
        {records?.map((staff:any,ky:any)=>(
          <div key={ky} className="flex border-b-[1px] border-gray-700 justify-between w-[90%] m-auto bg-green-400 hover:bg-green-300 p-5 cursor-pointer">
        <div className="">
          <p className="m-1 font-serif text-emerald-900 font-bold text-lg">{staff.email}</p>
          <p className="m-1 font-serif text-black font-bold text-md">Password: <span className="bg-black text-white text-sm rounded-md p-1 m-1">{staff.password}</span></p>
          <p className="m-1 font-serif text-black font-bold text-md">Full name: 
          <span className="bg-black text-white text-sm rounded-md p-1 m-1">{staff.first_name}</span>
          <span className="bg-black text-white text-sm rounded-md p-1 m-1">{staff.last_name}</span>
          </p>
        </div>
        <div className='flex'>
          <p onClick={() => handleDelete(staff.id)} className='m-[30px] cursor-pointer border bg-red-500 border-zinc-950 h-fit pl-4 pr-4 relative hover:text-white hover:bg-red-700 hover:shadow-md hover:shadow-gray-900'>Delete</p>
        </div>
      </div>
        ))}
      
      </div>
      <div className="w-full h-fit">
        <div className="flex border-b-[1px] justify-center w-[90%] pt-[10px] m-auto  p-1 cursor-pointer">
            <p onClick={prevPage} className='m-[30px] cursor-pointer border border-zinc-950 h-fit pl-4 pr-4 relative hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-900'>Prev</p>
           { 
            numbers.map((n:number,i:any) => (
              <p onClick={() => changeCPage(n)} key={i} className={
                currentPage===n?
                'mt-[30px] cursor-pointer border border-zinc-950 bg-black h-fit pl-4 pr-4 relative text-white hover:text-black hover:bg-white hover:border-black hover:shadow-md hover:shadow-gray-900'
                :
                'mt-[30px] cursor-pointer border border-zinc-950 h-fit pl-4 pr-4 relative hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-900'
              }>{n}</p>
            ))
           }
          
            <p onClick={nextPage} className='m-[30px] cursor-pointer border border-zinc-950 h-fit pl-4 pr-4 relative hover:text-white hover:bg-black hover:shadow-md hover:shadow-gray-900'>Next</p>
          
       </div>
      </div>
      </div>
    </>
  )

  function prevPage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id:number) {
    setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }


  async function createdLastComesLast() {
await fetch("https://affi.onrender.com/user")
        .then(d=>d.json())
        .then(d=>{
          let newD:any = []
          for(let i=0;i<d.length;i++) {
            if(d[i].role==="staff") {
              newD.push(d[i])
            }
          }
          setTasks(newD)
        })
        .catch(e=>console.log(e))
  }

 

     function handleDelete(id: string) {
      async function del(key:string) {
         await fetch("https://affi.onrender.com/user/"+key, {
    method: "DELETE",
    mode: "cors", 
    cache: "no-cache", 
    credentials: "include", 
    headers: {
      "Content-Type": "application/json",
    }
  }).then(d => d.json())
  .then(d => {
    alert("Successfully deleted staff")
  })
      }

    del(id)

    createdLastComesLast()
     }
}