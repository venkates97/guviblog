import React from 'react'
import { dataset } from '../DataSet';

function Fullstackdevelopment() {
  return (
    <>
    <div className="container">
    <div className="blogCraetion">
    {
            dataset.map((e) => {
             if (e.category ==="fsd") {
              return (
                <>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={e.img} class="card-img-top" alt={e.tittle} />
                    <div class="card-body">
                        <h5 class="card-title">{e.tittle}</h5>
                        <p class="card-text text-muted">By: {e.author}</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
                </>
                )
             }
                
            })
        }
    </div>
    </div>
    </>
  )
}

export default Fullstackdevelopment