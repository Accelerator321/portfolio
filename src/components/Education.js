
import React from 'react'

const Education = () => {

    const headingStyle= {
        background: '#074444',
        width: 'fit-content',
        borderRadius: '26%'
    }


    return (
        <>
            <div className="card mb-3" style={{ width: '80%' }}>
                <div className="row g-0">

                    <div className="card-body">
                        <h1 className="card-title neonText">Education</h1>
                        <ul className='edu-ul'>
                            {/* <li className='neonText'>{'=>'} Currently Persuing Btech in computer Science and Engineering from Harcourt Butler Technichal University</li> */}
                            <li className='neonText'>
                                <h2 style={headingStyle}> Graduation</h2>
                            <ol className='edu-ol' >
                                <li> Currently Persuing Btech in computer Science and Engineering </li>
                                <li> College -Harcourt Butler Technichal University</li>
                                <li> Passing year - 2025</li>
                            </ol>
                            </li>
                            <li className='neonText'><h2 style={headingStyle}>Intermediate Examination</h2>
                            <ol className='edu-ol'>
                                <li> Board - Uttar Pradesh Board</li>
                                <li> School - Aryawart Inter College</li>
                                <li> Passing year - 2019</li>
                            </ol>
                            </li>
                            <li className='neonText'><h2 style={headingStyle}> HighSchool</h2>
                            <ol className='edu-ol' >
                                <li> Board - Uttar Pradesh Board</li>
                                <li> School - Aryawart Inter College</li>
                                <li> Passing year - 2017</li>
                            </ol>
                            </li>
                            
      
                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Education