import React from 'react'
import "./brands.css"
const images = [
    "./images/chase.png",
    "./images/asana.svg",
    "./images/buzzfeed.svg",
    "./images/toggl.svg",
    "./images/walmart.svg",
]
const Brands = () => {
    return (
        <>
  
              <div className="construction__brands">
              {
        images.map((image)=> (
             <img src={require(`${image}`).default} alt="images" />))
            }
        </div>  
 
        </>
        // <div className="construction__brands">
    
        // <div>
        //     <img src="./images/chase.png" alt="" />
        // </div>
        // <div>
        //     <img src="./images/asana.svg" alt="" />
        // </div>
        // <div>
        //     <img src="./images/buzzfeed.svg" alt="" />
        // </div>
        // <div>
        //     <img src="./images/toggl.svg" alt="" />
        // </div>
        // <div>
        //     <img src="./images/walmart.svg" alt="" />
        // </div>
            
        // </div>
    )
}

export default Brands
