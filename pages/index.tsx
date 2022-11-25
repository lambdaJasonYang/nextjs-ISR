import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';


//console.log(..) here outputs in both terminal and client
export default function Home(props: any) {
    const [content, setContent] = useState("");
    const {BLEHdata} = props // This is data loaded from getStaticProps
    
    if(!BLEHdata){
        console.log("Client: empty")
    }else{
        console.log("Client", BLEHdata)
    }
    

    //The only way to show the data without crashing is hooking it to useEffect
    useEffect(()=>{
        if(BLEHdata){setContent(BLEHdata.datetime);} //extract the json data
        
    },[BLEHdata])

     
    return(
        <div>
            <h1>ISR example that revalidates every 10 seconds:</h1>

            <h2>getStaticProps json: {content}</h2>
            
            <p>data fetched from <a href="http://worldtimeapi.org/api/timezone/America/New_York">http://worldtimeapi.org/api/timezone/America/New_York</a></p> 
        
        </div>)
}

//Basically same as sending GET requests to other website onload
export async function getStaticProps(){
    const response =await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    const BLEHdata = await response.json()
    console.log("the json data: ",BLEHdata) //this will not output on browser but in terminal
    return{
        props: {BLEHdata},
        revalidate: 10,
    }
  }