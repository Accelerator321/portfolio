import React from 'react'

import github from '../github.png'
import linkedIn from '../linkedIn.png'

export default function Contact() {
  return (
    <div className="card mb-3 contactCont" style={{ width: '80%' }}>
      <div className="row g-0">
      
        <h3 className="card-body neonText contactBody">
          <div>
          <a href="tel:+918318818173">mob: +918467023266</a>
          </div>
          <div>
          <a href = "mailto:shyamprime2610@gmail.com ">Email: shyamprime2610@gmail.com</a>
          </div>
        
        </h3>
        <div>
        <a href='https://github.com/Accelerator321' className='mx-2 my-2'><img src={github} alt="" height={'40px'} width={'40px'} /></a>
        <a href='https://www.linkedin.com/in/shyam-mohan-gupta-14a45a227/' ><img style={{background:"white"}} src={linkedIn} alt="" height={'40px'} width={'40px'} /></a>
        </div>
      </div>
    </div>
  )
}
