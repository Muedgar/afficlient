'use client'
import { AppContext } from "@/context/app.context"
import { useContext, useEffect, useState } from "react"
import { useQRCode } from 'next-qrcode';

export default function View({affidavits}:any) {
  const { Canvas } = useQRCode();
    const [affidavitsData, setAffidavitsData] = useState(affidavits)
     const {dispatch, state} = useContext(AppContext)
  
  const [search, setSearch] = useState("")
  const [view, setView] = useState("view")
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
  }, [getOnce, monthArray])
  const [languageTo, setLanguageTo] = useState("")
  const [languageBy, setLanguageBy] = useState("")

  const [fee, setFee] = useState("")

  const [leftProfile, setLeftProfile] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
const [rightProfile, setRightProfile] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')
const [signature, setSignature] = useState('https://www.signature.org.uk/img/logos/siglogo.png')
const [qrCode, setQRCode] = useState('data:image/png;base64,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')
const [beforeMe, setBeforeMe] = useState('https://www.signature.org.uk/img/logos/siglogo.png')




console.log("affidavits", affidavitsData)
 
  async function getAffidavitByName() {
    await fetch("http://localhost:3001/affidavit/name/"+search.trim())
    .then(d => d.json())
    .then(d => {
      setAffidavitsData(d)
    })
    .catch(e=> {
      alert("could not get affidavits from server, please contact supports")
    })
  }
    return(
      <div className="w-[60%] h-fit relative m-auto mt-[50px] mb-[50px] flex-col">
        {affidavitsData.length===0?
        <p>Loading Affidavits ...</p>:
        <>
        <div className="flex relative justify-center items-center mt-[100px]">
        <input className={"outline-none p-[5px] border-2 border-green-300 w-[300px] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={search} onChange={e => {
            setSearch(e.target.value)
        }} placeholder="Search By Name ..." />

        <button onClick={() => {
            getAffidavitByName()
          }} className="w-fit h-fit p-2 shadow-sm ml-[5px] shadow-black bg-green-900 text-white cursor-pointer">View Affidavits</button>
         
        </div>
        {affidavitsData.map((affidavit: any,ky:any) => (
<div key={ky} className="w-fit h-fit pb-[150px] relative bg-white shadow-sm shadow-slate-950 m-auto mt-[50px]">
            <div className="w-full h-[100px] border-b-4 border-white"></div>
        <div className="flex justify-center">
          <p className="mt-[50px] uppercase underline font-serif text-2xl text-center">Affidavit Form</p>
        </div>
        {/* cloudinary img 1 */}
          <img src={affidavit.left_profile_pic} className='w-[150px] h-[150px] object-contain absolute top-[200px] left-0 m-2 cursor-pointer' alt="left_profile" />
              

        <img src={affidavit.right_profile_pic} className='w-[150px] h-[150px] object-contain absolute top-[200px] right-0 m-2 cursor-pointer' alt="right_profile" />
              
          {/* end profiles */}
        <div className="w-[80%] mt-[200px] flex m-3 ml-[50px]">
          <p>I &#160;</p>
          {view==="create"?
        <input className={"outline-none p-[5px] border-2 border-green-300 w-[30%] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={name} onChange={e => {
            setName(e.target.value)
            dispatch({type:'SET_FULLNAME', payload: e.target.value})
        }} placeholder="Full Name" />
          :
          <p>{affidavit.fullname} &#160;</p>  
        }
          <p>of &#160;</p>
          {view==='create'?
          <input className={"outline-none p-[5px] border-2 border-green-300 w-[30%] focus:shadow-md focus:shadow-gray-900"
        } type='text' value={address} onChange={e => {
            setAddress(e.target.value)
            dispatch({type:'SET_ADDRESS', payload: e.target.value})
        }} placeholder="Address" />
      :
      <p>{affidavit.address} &#160;</p>    
      }
          <p>Make oaths and say</p>
        </div>
        <div className="pt-[10px]">
          {
            affidavit.paragraphs.map((p:any, k:any) => (
              <div key={k} className="flex justify-items-start ml-[140px] mt-2">
              <p className="ml-[-100px]">{k+1}. That &#160; </p>
              <p>{p}</p>
              </div>
            ))
          }
          <p className="ml-[40px] mt-4">6. I am making this solemn declaration conscientiously believe same to be true and correct in accordance with the Oaths Act of 1990.</p>
          
          <div className="flex justify-evenly">
            <p className="ml-[40px] flex mt-4">
            Date: {affidavit.date}
          </p>
          </div>

          <div>
            <p className="ml-[40px] mt-4">
              Sworn to at the: {affidavit.date}</p>
            <p className="ml-[40px] mt-4">
              This: <input value={affidavit.date.split('/')[0]} disabled className="outline-none p-[5px] w-[150px] shadow-sm shadow-gray-500 cursor-pointer" type='text' />
              <span>  </span>
              Day Of: <input value={`${affidavit.date.split('/')[1]} ${affidavit.date.split('/')[2]}`} disabled className="outline-none p-[5px] w-[150px] shadow-sm shadow-gray-500 cursor-pointer" type='text' />
            </p>
          </div>
          <div>
            <p className="ml-[40px] mt-4"> The foregoing has been read over and interpreted by the declarant from</p>
          </div>
          <div className="flex mt-4 ml-[50px]">
           <p>{affidavit.to_language}</p>
          <p>&#160;Language To&#160;</p>
          
          <p>{affidavit.from_language}</p>
          <p>&#160;Language By&#160;</p>
          </div>

          <div>
            <p className="ml-[40px] mt-4">The above has been interpreted to me and I understand same before affixing my thumb impression there to</p>
          </div>

          <div className="flex justify-around ml-[40px] mt-4">
             <div className="flex">
              <p>Fee Paid: </p>
              <p>{`${affidavit.fee_paid}`}</p>
             </div>
            <div className="mt-4">
              
                <img src={affidavit.signature} className='w-[100px] h-[60px] m-2 cursor-pointer' alt="signature" />
              
          <p className="text-center">DEPONENT:</p>
            </div>
            
          </div>
<div className="flex justify-evenly items-center mt-[50px] ml-[40px] ">

          <div className="flex-col justify-evenly items-center pt-[15px]">
            <Canvas
      text={`qrcodedata_${affidavit.fullname}`}
      options={{
        errorCorrectionLevel: 'M',
        margin: 3,
        scale: 4,
        width: 150,
        color: {
          dark: '#000',
          light: '#fff',
        },
      }}
    />
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
            <p>{affidavit.affi_code}</p>}
          </div>

           <div className="flex-col justify-evenly items-center pt-[15px]">
            <img src={affidavit.before_me} className='w-[100px] h-[100px] m-2 cursor-pointer' alt="signature" />
              
            <p className="text-center text-xs mt-2">BEFORE ME</p>
          </div>
</div>
          
        </div>
      </div>
        ))}
        </>
        }
        
    </div>
    )
}