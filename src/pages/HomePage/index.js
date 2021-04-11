import React,{useState,useEffect,useRef} from 'react'

import styled from 'styled-components'



const HomePage = () =>{
    const topRef = useRef();
    useEffect(() => {
            topRef.current.scrollTo(0, 0);
        });
  return(
    <div ref={topRef} style={{margin:'0',padding:'0',width:'100vw',overflow:'hidden'}}>
  
        <p>
          this is a homepage
        </p>
    <div style={{height:'100px',width:'100%',clear:'both'}}></div>
    
    
    
    
    
  </div>);

}




export default HomePage;

