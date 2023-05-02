import React from 'react';
import './Tours.css'
import Tour from './tour/Tour';
import DataTours from '../../data/db.json'

function Tours(props) {

    return ( 

        <div className={"tours"}>

        {DataTours.map((item) => {
    return (
        <div key={item.id}>
        <Tour tourName={item.name} id={item.id} img={item.image} />
        </div>
        )
    }
    )
    }
</div>
)
}

export default Tours

