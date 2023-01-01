
import React from 'react'

const Project = () => {
    const headingStyle = {
        background: '#074444',
        width: 'fit-content',
        borderRadius: '26%'
    }
    return (
        <>
            <div className="container" style={{ width: '80%', minHeight: '100vh', zIndex: '1' }}>


                <h1 className="card-title neonText" style={{textAlign:'center'}}>Projects</h1>
                <div className="accordion open" id="accordionExample1">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Project 1-
                                Striker(Virtual Desktop Assistant)

                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Striker is a desktop assistant. It can do tasks like opening and
                                closing a program and with the integration of WolframeAlpha Api
                                it can answer your mathematics and General knowledge queries.
                                It can also provide you wikipedia details of any person on franchise. Your can interact with it either using text or speech. It has
                                two extensions named Striker(Male version) and Diva(Female
                                Version).

                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion " id="accordionExample2">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading2">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                Project 2-
                                Blogging Website

                            </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse show" aria-labelledby="heading2" data-bs-parent="#accordionExample2">
                            <div className="accordion-body">
                                Its a blogging website here a user can create his id using his Gmail(otp
                                verification is done to ensure the address is correct) and can
                                check other people’s blogs. This website is created using nodejs
                                and mongoDb


                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionExample3">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading3">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                Project 3-
                                Tinkler Chatroom


                            </button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample3">
                            <div className="accordion-body">
                                Tinkler chatroom is a web application where all the users can
                                come into single chatroom and chat. Tinkler is created using
                                nodejs and socket.io


                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionExample4">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading4">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                                Project 4-
                                Query app


                            </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse show" aria-labelledby="heading4" data-bs-parent="#accordionExample4">
                            <div className="accordion-body">
                                This query app is based on wolframeAlpha api. This app can answer your general knowledge and mathematics queries



                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionExample5">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading5">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                Project 5-
                                E-commerce website(Ongoing)



                            </button>
                        </h2>
                        <div id="collapse5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionExample5">
                            <div className="accordion-body">
                                E-commerce website for selling the buying of products


                            </div>
                        </div>
                    </div>




                </div>

            </div>


        </>
    )
}

export default Project