import React from 'react'
import pic from '../my.png'

export default function Alert(props) {

    
    return (
       <>
       <div className="card mb-3" style={{width: '80%'}}>
  <div className="row g-0">
    
    <div className="col-md-8">
      <div className="card-body" style={{ textAlign: 'center'}}>
        <h1 className="card-title neonText">Hi, <br/> I am a  <br/>web developer</h1>
        <ul>
            <li className='neonText'>Name:Shyam Mohan Gupta</li>
            <li className='neonText'>Age:19</li>
            <li className='neonText'>Occupation:Student</li>
        </ul>
        
        
      </div>
    </div>
    <div className="col-md-4 pic-container">
      <img src={pic} className="img-fluid rounded-start my-img" alt="..."/>
      
    </div>
  </div>
</div>
       </> 
      )
}
