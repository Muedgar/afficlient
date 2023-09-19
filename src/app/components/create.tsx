
'use client'

import { AppContext } from "@/context/app.context"
import { CldUploadWidget } from "next-cloudinary"
import { useContext, useEffect, useState } from "react"

export default function CreateAffidavit() {
  const {dispatch, state} = useContext(AppContext)
  
  const [view, setView] = useState("create")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const paragraphs = [1,2,3,4,5]

  // paragraphs states
  const [par1, setPar1] = useState("")
  const [par2, setPar2] = useState("")
  const [par3, setPar3] = useState("")
  const [par4, setPar4] = useState("")
  const [par5, setPar5] = useState("")

  
  const [deponent, setDeponent] = useState("")

  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  const date = `${day}/${month}/${year}`
  
  const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let getOnce = "dafs"
  useEffect(() => {
    let d = new Date().getDate()
                 setDay(`${d}`)
                 setMonth(monthArray[new Date().getUTCMonth()])
                 setYear(`${new Date().getFullYear()}`)
  }, [getOnce])
  const [languageTo, setLanguageTo] = useState("")
  const [languageBy, setLanguageBy] = useState("")

  const [fee, setFee] = useState("")

  const [leftProfile, setLeftProfile] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
const [rightProfile, setRightProfile] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
const [signature, setSignature] = useState('https://www.signature.org.uk/img/logos/siglogo.png')
const [qrCode, setQRCode] = useState('data:image/png;base64,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')
const [beforeMe, setBeforeMe] = useState('https://www.signature.org.uk/img/logos/siglogo.png')

function handleClickUploadImage(type:string, secure_url: string) {
      if(type==='left_profile') {
        setLeftProfile(secure_url)
        dispatch({type:'SET_LEFT_PROFILE', payload: secure_url})
      }else if(type==='right_profile') {
        setRightProfile(secure_url)
        dispatch({type:'SET_RIGHT_PROFILE', payload: secure_url})
      }else if(type==='signature') {
        setSignature(secure_url)
        dispatch({type:'SET_SIGNATURE', payload: secure_url})
      }else if(type==='qrcode') {
        setQRCode(secure_url)
        dispatch({type:'SET_QR_CODE', payload: secure_url})
      }else if(type==='beforeme') {
        setBeforeMe(secure_url)
        dispatch({type:'SET_BEFORE_ME', payload: secure_url})
      }
   
  }


  //   handle create
    async function handleCreate() {
  let paragraphs:any = []

  paragraphs.push(state.paraOne)
  paragraphs.push(state.paraTwo)
  paragraphs.push(state.paraThree)
  paragraphs.push(state.paraFour)
  paragraphs.push(state.paraFive)
  
  let data = {
    fullname: state.fullname.trim(),
    address: state.address,
    date, //`${date.split('/')[0]}/${monthArray.indexOf(date.split('/')[1])}/${date.split('/')[2]}`
    from_language: state.fromlanguage,
    to_language: state.tolanguage,
  left_profile_pic: state.left_profileurl,
  right_profile_pic: state.right_profileurl,
  paragraphs,
  fee_paid: Number(state.feepaid),
  signature: state.signature,
  affi_code: state.affiCode,
  qr_code: state.qrCode,
  before_me: state.beforeMe
}
console.log(data)
 await fetch("http://localhost:3001/affidavit", {
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
    alert("Successfully created affidavit")
  })
}
  return (
    <div className="w-screen h-fit pb-5">
      <div className="w-[60%] h-fit pb-[50px] pt-[50px] relative bg-white shadow-sm shadow-slate-950 m-auto mt-[50px]">
        <div className="flex justify-center">
          <p role="CreateFormTitle" className="mt-[10px] font-serif text-2xl text-center">Affidavit Form</p>
        </div>
        {/* cloudinary img 1 */}
         <CldUploadWidget uploadPreset={process.env.uploadPreset} onUpload={(e:any)=> {
          handleClickUploadImage('left_profile', e.info?.secure_url)
         }}>
            {({ open }) => {
              function handleOnClick(e: any) {
                e.preventDefault();
                open();
              }
              return (
                <img src={leftProfile} className='w-[150px] h-[150px] object-contain absolute top-0 left-0 m-2 cursor-pointer' onClick={handleOnClick} alt="left_profile" />
              
                )
            }}
          </CldUploadWidget>

        <CldUploadWidget uploadPreset={process.env.uploadPreset} onUpload={(e:any)=> {
          handleClickUploadImage('right_profile', e.info?.secure_url)
         }}>
            {({ open }) => {
              function handleOnClick(e: any) {
                e.preventDefault();
                open();
              }
              return (
                <img src={rightProfile} className='w-[150px] h-[150px] absolute top-0 right-0 m-2 cursor-pointer' onClick={handleOnClick} alt="right_profile" />
              
                )
            }}
          </CldUploadWidget>
          {/* end profiles */}
        <div className="w-[80%] mt-[100px] flex m-3 justify-evenly">
          <p>I</p>
          {view==="create"?
        <input className={"outline-none p-[5px] border-2 border-green-300 w-[30%] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={name} onChange={e => {
            setName(e.target.value)
            dispatch({type:'SET_FULLNAME', payload: e.target.value})
        }} placeholder="Full Name" />
          :
          <p>{name}</p>  
        }
          <p>of</p>
          {view==='create'?
          <input className={"outline-none p-[5px] border-2 border-green-300 w-[30%] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={address} onChange={e => {
            setAddress(e.target.value)
            dispatch({type:'SET_ADDRESS', payload: e.target.value})
        }} placeholder="Address" />
      :
      <p>{address}</p>    
      }
          <p>Make oaths and say</p>
        </div>
        <div className="pt-[50px]">
          {
            view==='create'?paragraphs.map((p, k) => (
              <div key={k} className="flex justify-evenly mt-4">
              <p className="ml-[-100px]">{p}. That </p>
              {p===1&&<textarea value={par1} onChange={e => {
                setPar1(e.target.value)
                dispatch({type:'SET_PARAONE', payload: e.target.value})
              }} className="ml-[-100px] outline-none p-[5px] w-[65%] h-[50px] border-2 border-green-300 focus:shadow-md focus:shadow-gray-900"
       ></textarea>}
       {p===2&&<textarea value={par2} onChange={e => {
                setPar2(e.target.value)
                dispatch({type:'SET_PARATWO', payload: e.target.value})
              }} className="ml-[-100px] outline-none p-[5px] w-[65%] h-[50px] border-2 border-green-300 focus:shadow-md focus:shadow-gray-900"
       ></textarea>}
       {p===3&&<textarea value={par3} onChange={e => {
                setPar3(e.target.value)
                dispatch({type:'SET_PARATHREE', payload: e.target.value})
              }} className="ml-[-100px] outline-none p-[5px] w-[65%] h-[50px] border-2 border-green-300 focus:shadow-md focus:shadow-gray-900"
       ></textarea>}
       {p===4&&<textarea value={par4} onChange={e => {
                setPar4(e.target.value)
                dispatch({type:'SET_PARAFOUR', payload: e.target.value})
              }} className="ml-[-100px] outline-none p-[5px] w-[65%] h-[50px] border-2 border-green-300 focus:shadow-md focus:shadow-gray-900"
       ></textarea>}
       {p===5&&<textarea value={par5} onChange={e => {
                setPar5(e.target.value)
                dispatch({type:'SET_PARAFIVE', payload: e.target.value})
              }} className="ml-[-100px] outline-none p-[5px] w-[65%] h-[50px] border-2 border-green-300 focus:shadow-md focus:shadow-gray-900"
       ></textarea>}
              </div>
            )):
            paragraphs.map((p, k) => (
              <div key={k} className="flex justify-items-start ml-[140px] mt-4">
              <p className="ml-[-100px]">{p}. That </p>
              {p===1&&<p>{par1}</p>}
       {p===2&&<p>{par2}</p>}
       {p===3&&<p>{par3}</p>}
       {p===4&&<p>{par4}</p>}
       {p===5&&<p>{par5}</p>}
              </div>
            ))
          }
          <p className="ml-[40px] mt-4">6. I am making this solemn declaration conscientiously believe same to be true and correct in accordance with the Oaths Act of 1990.</p>
          
          <div className="flex justify-evenly">
            <p className="ml-[40px] flex mt-4">
            Date: {date}
          </p>
          </div>

          <div>
            <p className="ml-[40px] mt-4">
              Sworn to at the: {date}</p>
            <p className="ml-[40px] mt-4">
              This: <input value={day} disabled className="outline-none p-[5px] w-[150px] shadow-sm shadow-gray-500 cursor-pointer" type='text' />
              <span>  </span>
              Day Of: <input value={`${month} ${year}`} disabled className="outline-none p-[5px] w-[150px] shadow-sm shadow-gray-500 cursor-pointer" type='text' />
            </p>
          </div>
          <div>
            <p className="ml-[40px] mt-4"> The foregoing has been read over and interpreted by the declarant from</p>
          </div>
          <div className="flex justify-evenly mt-4">
            
          {view==='create'?
          <input className={"outline-none p-[5px] border-2 border-green-300 w-[30%] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={languageTo} onChange={e => {
            setLanguageTo(e.target.value)
            dispatch({type:'SET_TOLANGUAGE', payload: e.target.value})
        }} placeholder="" />:
        <p>{languageTo}</p>}
          <p>Language To</p>
          
          {view==='create'?
          <input className={"outline-none p-[5px] border-2 border-green-300 w-[30%] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={languageBy} onChange={e => {
            setLanguageBy(e.target.value)
            dispatch({type:'SET_FROMLANGUAGE', payload: e.target.value})
        }} placeholder="" />
      :
      <p>{languageBy}</p>}
          <p>Language By</p>
          </div>

          <div>
            <p className="ml-[40px] mt-4">The above has been interpreted to me and I understand same before affixing my thumb impression there to</p>
          </div>

          <div className="flex justify-around ml-[40px] mt-4">
             <div className="flex">
              <p>Fee Paid: </p>
          {view==='create'?
          <input className={"outline-none p-[5px] h-[34px] ml-4 border-2 border-green-300 w-[150px] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={fee} onChange={e => {
            setFee(e.target.value)
            dispatch({type:'SET_FEEPAID', payload: e.target.value})
        }} placeholder=" " />
      :
        <p>{`${fee}`}</p>}
             </div>
            <div className="mt-4">
              
                <CldUploadWidget uploadPreset={process.env.uploadPreset} onUpload={(e:any)=> {
          handleClickUploadImage('signature', e.info?.secure_url)
         }}>
            {({ open }) => {
              function handleOnClick(e: any) {
                e.preventDefault();
                open();
              }
              return (
                <img src={signature} className='w-[100px] h-[60px] m-2 cursor-pointer' onClick={handleOnClick} alt="signature" />
              
                )
            }}
          </CldUploadWidget>
          <p className="text-center">DEPONENT:</p>
            </div>
            
          </div>
<div className="flex justify-evenly items-center mt-[50px] ml-[40px] ">

          <div className="flex-col justify-evenly items-center pt-[15px]">
            <CldUploadWidget uploadPreset={process.env.uploadPreset} onUpload={(e:any)=> {
          handleClickUploadImage('qrcode', e.info?.secure_url)
         }}>
            {({ open }) => {
              function handleOnClick(e: any) {
                e.preventDefault();
                open();
              }
              return (
                <img src={qrCode} className='w-[100px] h-[100px] m-2 cursor-pointer' onClick={handleOnClick} alt="signature" />
              
                )
            }}
          </CldUploadWidget>
            <p className="text-center text-xs mt-2">SCAN TO VERIFY AFFIDAVIT</p>
          </div>

          <div className="flex-col justify-center items-center pt-[15px]">
            <p className="text-center text-xs mt-2">AFFIDAVIT CODE</p>
            {view==='create'?
            <input className={"outline-none p-[5px] border-2 border-green-300 w-[150px] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={deponent} onChange={e => {
            setDeponent(e.target.value)
            dispatch({type:'SET_AFFI_CODE', payload: e.target.value})
            }} placeholder="........" />:
            <p>{deponent}</p>}
          </div>

           <div className="flex-col justify-evenly items-center pt-[15px]">
            <CldUploadWidget uploadPreset={process.env.uploadPreset} onUpload={(e:any)=> {
          handleClickUploadImage('beforeme', e.info?.secure_url)
         }}>
            {({ open }) => {
              function handleOnClick(e: any) {
                e.preventDefault();
                open();
              }
              return (
                <img src={beforeMe} className='w-[100px] h-[100px] m-2 cursor-pointer' onClick={handleOnClick} alt="signature" />
              
                )
            }}
          </CldUploadWidget>
            <p className="text-center text-xs mt-2">BEFORE ME</p>
          </div>
</div>
          
        </div>
      </div>
    
    {view==="create"&&
    <div className="flex justify-center items-center">
      <input onClick={() => {
        if(view==="create") {
          setView("view")
        }else {
          setView("create")
        }
      }} type="button" value={view==="create"?"Preview Affidavit":"Back"} placeholder='Preview Affidavit' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
      <input onClick={() => {
        handleCreate()
      }} type="button" value="Create Affidavit" placeholder='Preview Affidavit' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
    </div> }


    {view==="view"&&
    <div className="flex justify-center items-center">
      <input onClick={() => {
        if(view!=="view") {
          setView("view")
        }else {
          setView("create")
        }
      }} type="button" value={view!=="view"?"Preview Affidavit":"Back"} placeholder='Preview Affidavit' className="hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer bg-green-500 border border-gray-300 text-white mb-6 text-sm rounded-lg  block w-fit p-2.5 ml-4 mt-4"></input>
      </div> }
    </div>
  )
}
