import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import { CardComponents } from '../Utils/CardComponents';

function Card({count,setCount,data}){
    let [toggle,setToggle]=useState(CardComponents);
    
  return   <div className="col mb-5">
                    <div>
                        <div className="card h-100">
                           
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>   

                            <Link to={`/payment/${data.id}`}>
                            <img className="card-img-top" src={data.thumbnail} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{data.title}</h5>
                                    <h5 className="fw-bolder">{data.product}</h5>
                                    <h5 className="fw-bolder">Discount {data.discountPercentage}%</h5>
                                    <span className="text-muted text-decoration">{data.description}</span>
                                    <h5 className="fw-bolder">${data.price}</h5>
                                </div>
                            </div>
                            </Link>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">

                                <div className="text-center">
                                {toggle ? 
                            <button className="btn btn-outline-dark mt-auto" onClick={() => {setCount(count+1);
                            setToggle(false)}}>
                            Add to Cart
                            </button>
                             : 
                             <button className="btn btn-outline-danger mt-auto" onClick={() => {setCount(count-1);setToggle(true)}}>
                            Remove from cart
                            </button>}
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
}

    


export default Card