 import React,{ useEffect, useState } from 'react'
import Loading from './Components/Loading';

import Tours from './Components/Tours';
import axios from 'axios';


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading]=useState(true);
    const [tours,setTours]=useState([]);
  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id !==id);
    setTours(newTours);
    
  }

  

    const data=async()=>{
      try{

        const response=await axios.get(url);
        const responseData=await response.data;
        console.log(responseData)
        setLoading(false)
        setTours(responseData)
      }
      catch(err){
        setLoading(true)
        console.log(err);
      }
    }
    useEffect(()=>{
      data();
    },[])
    if(loading){
      return(
        <main>
          <Loading />
        </main>
      )
    }
    if(tours.length===0){
      console.log("empty")
      return(
        <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={data}>refresh</button>
          </div>
        </main>
      )

    }
  return (
    <main>
     <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
