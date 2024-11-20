// import React, { useState } from "react";
// import {Data,helo} from '../components/Data';

// function Home() {
//     const [store, setStore] = useState(Data,helo)
//     const [data,setData]=useState("")

//     const getData=(e)=>{
//         console.log(e.target.value);
//         setData(e.target.value)

//     }

//     let Search=store.filter((curValue)=>{
//         return curValue.name.toLowerCase().includes(data)
        
//     })
//   return (  

//     <div>
//       <input type="text" placeholder="search" onChange={getData}  className='w-[650px] pl-2 text-base' />
//         {
//             Search.map((cur,he)=>{
//                 return(

                                            
//                         <div className=" justify-around flex-col">
//                             <p>{cur.name}</p>
//                             <p>{cur.brand}</p>
//                             <img className="h-10" src={cur.img}/>
//                             <p>{he.name}</p>
//                             <p>{he.brand}</p>
//                             <img className="h-10" src={helo.img}/>
// {/*                             
//                             <p>{cur.name}</p>
//                             <p>{cur.brand}</p>
//                             <img className="h-10" src={cur.img}/> */}
                            
//                         </div>
                            
                        
                        
                        

            
//                 )
//             })
//         }
//     </div>
   

  import React from 'react'
  import one from "../components/images/one.jpg"; 
  import two from "../components/images/two.jpg"; 
  import three from "../components/images/three.jpg"; 
  import four from "../components/images/four.jpg"; 
  import five from "../components/images/five.jpg"; 
  import six from "../components/images/six.jpg"; 
  import seven from "../components/images/seven.jpg"; 
  import eight from "../components/images/eight.jpg"; 
  
  function Home() {
    return (
     
 
    <div>
    <main class="bg-[#E6E6E6] pb-5">
    <div class="bg-[url('./banner.jpg')] bg-cover h-80 flex justify-center items-end">
        <div class="bg-white text-sm h-10 flex justify-center items-center w-[1460px] mb-6">
            <p>You are on amazon.com. You can also shop on Amazon Pakistan for millions of products with fast local delivery. 
            <a class="text-[#007185] hover:underline hover:text-orange-500">Click here to go to amazon.in</a></p>
        </div>

    </div>

    <div class="grid grid-cols-4 grid-rows-2 gap-4 px-4">
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Shop school essentials</h2>
            <div className='flex p-4 mt-7'>
            <img src={one} alt="" class="h-20 mr-4"/>
            <img src={two} alt="" class="h-20"/>
            </div>
            <div className='flex p-4'>
            <img src={three} alt="" class="h-20 mr-4"/>
            <img src={four} alt="" class="h-20"/>
            </div>
            <p class="text-[#007185] text-xs">See more</p>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Shop school essentials</h2>
            <div className='flex p-4 mt-7'>
            <img src={five} alt="" class="h-20 mr-4"/>
            <img src={three} alt="" class="h-20"/>
            </div>
            <div className='flex p-4'>
            <img src={seven} alt="" class="h-20 mr-4"/>
            <img src={eight} alt="" class="h-20"/>
            </div>
            <p class="text-[#007185] text-xs">See more</p>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Shop school essentials</h2>
            <div className='flex p-4 mt-7'>
            <img src={six} alt="" class="h-20 mr-4"/>
            <img src={one} alt="" class="h-20"/>
            </div>
            <div className='flex p-4'>
            <img src={five} alt="" class="h-20 mr-4"/>
            <img src={two} alt="" class="h-20"/>
            </div>
            <p class="text-[#007185] text-xs">See more</p>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Shop school essentials</h2>
            <div className='flex p-4 mt-7'>
            <img src={three} alt="" class="h-20 mr-4"/>
            <img src={eight} alt="" class="h-20"/>
            </div>
            <div className='flex p-4'>
            <img src={six} alt="" class="h-20 mr-4"/>
            <img src={one} alt="" class="h-20"/>
            </div>
            <p class="text-[#007185] text-xs">See more</p>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Shop school essentials</h2>
            <img src={one} alt="" class="my-3"/>
            <p class="text-[#007185] text-xs">See more</p>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Home & Kitchen Under $30</h2>
            <img src={two} alt="" class="my-3"/>
            <a href="#" class="text-xs text-[#007185]">Shop now</a>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Health & Personal Care</h2>
            <img src={three} alt="" class="my-3"/>
            <a href="#" class="text-xs text-[#007185]">Shop now</a>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Beauty picks</h2>
            <img src={four} alt="" class="my-3"/>
            <a href="#" class="text-xs text-[#007185]">Shop now</a>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Electronics</h2>
            <img src={five} alt="" class="my-3"/>
            <a href="#" class="text-xs text-[#007185]">See more</a>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Toys Under $30</h2>
            <img src={six} alt="" class="my-3"/>
            <a href="#" class="text-xs text-[#007185]">Shop now</a>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">For your Fitness Needs</h2>
            <img src={seven} alt="" class="my-3"/>
            <a href="#" class="text-xs text-[#007185]">Shop now</a>
        </div>
        <div class="bg-white p-4">
            <h2 class="text-xl font-bold">Discover fashion trends</h2>
            <img src={eight} alt="" class="my-3"/>
            <a href="#" class="text-xs text-[#007185]">See more</a>
        </div>
    </div>

</main>
</div>


)
}

export default Home 