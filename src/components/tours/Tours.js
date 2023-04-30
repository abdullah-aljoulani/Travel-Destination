import React from 'react';
import Data from '../../data/db.json'


function Tours() {

return (
    <div>

    {
        Data.map(item => {
        return (
            <div >
            <h1> {item.name} </h1>
            <img src={item.image} alt='no-pic'></img>
            </div>
        )
        })

    }

    </div>
)

}

export default Tours

