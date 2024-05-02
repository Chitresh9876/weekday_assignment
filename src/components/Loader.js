import React from 'react'
import loader from '../assets/loader.gif'
const Loader = () => {
  return (
    <div>
      <div className="text-center" style={{width:"100%", display:"flex", justifyContent:"center", marginTop:"0.5rem"}}>
        <img src={loader} alt="loading" style={{height:50}}/>
      </div>
    </div>
  )
}

export default Loader
