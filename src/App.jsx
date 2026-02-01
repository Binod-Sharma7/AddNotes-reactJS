import React, { useState } from 'react'

export default function App() {
  const [title,setTitle ] = useState("")
  let forTitle=(elem)=>
  {
     setTitle(elem)
  }
  const [details,setDetails]=useState("")
  let forDetails=(elem)=>
  {
     setDetails(elem)
  }
  const [add, setAdd]= useState([])

 let addhune=(e)=>
 {
     e.preventDefault()
     let copy=[...add];
     copy.push({title,details});
     setAdd(copy);
     setTitle("");
     setDetails("");
     
 }
  
 let del=(idx)=>
 {
   
    const copy = [...add];

    copy.splice(idx, 1)

    setAdd(copy)
  
     
 }
  return (
    <div className=' p-10  bg-gray-800 h-full '>
      <form onSubmit={addhune} className='flex gap-10 flex-col'>
     <input className=' border-white border-4 rounded-2xl p-2  text-white ' value={title} onChange={(elem)=>
      {
        forTitle(elem.target.value);
      }
     } type="text"  placeholder='enter title' />
     <textarea value={details} onChange={(e)=>
      {
        forDetails(e.target.value)
      }
   
     } className='border-white border-4 text-white rounded-2xl p-2' rows={5} name="" placeholder='enter details' id=""></textarea>
     <div className='flex justify-center'>
      <button className='bg-gray-500 w-fit rounded-[5px] pt-3 pb-3 pl-5 pr-5 active:scale-90 border-white border-4 cursor-pointer'>Add Notes</button> 
     </div>
         <h1  className='text-3xl text-white'>Notes</h1>
                </form>
          <div className='flex flex-row gap-4 flex-wrap pt-3
          '>
          {add.map((e,index) => (
  e.title && e.details && (
    <div
      
      className="bg-white h-60 w-52 border bg-cover rounded-xl p-4 pt-1 leading-5 bg-[url(https://tse1.mm.bing.net/th/id/OIP.PwalCToSxN2zsFkx9LJOmwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3)] overflow-hidden flex flex-col"
    >
      <button onClick={()=>
        {
          del(index)
        }
      } className='bg-red-500 rounded-full h-7 w-7 p-1 mb-3 cursor-pointer'>X</button>
      <h1 className='break-words text-green-900 font-bold text-xl'>{e.title}</h1>
      <p className='break-words overflow-y-auto'>{e.details}</p>
    </div>
  )
))}

          </div>

         
          
    </div>
  )
}
