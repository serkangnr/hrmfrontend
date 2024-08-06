import React from 'react'
import { IUserStoryCard } from '../../../models/IUserStoryCard'



function UserStoryCard(props:IUserStoryCard) {
   

    return (
        <>

        

            <div className="row">
            <div className="col">

 
                                    
                                    <div className="card shadow  justify-content-center align-items-center">

                                        <img style={{ width: '200px', height: '200px' }} src={props.imageUrl} className="card-img-top"  />
                                        <div className="card-body">

                                            <h3>{props.name}</h3>
                                            <p className="card-text">{props.position}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <small className="text-body-secondary">{props.company}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

            </div>


                               
                              





        </>

    )
}

export default UserStoryCard