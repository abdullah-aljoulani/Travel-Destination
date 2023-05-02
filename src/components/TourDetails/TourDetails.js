import './TourDetails.css'
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function TourDetails(props){
    const { id } =useParams() 

    const cityCard =props.data.find(cityCard => cityCard.id === id);

    const [showMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => {
        setShowMore(!showMore);
    }

    return (
        <>
            <Header></Header>
            <div className='divInfo'>
                <p> {showMore ? cityCard.info :`${cityCard.info.slice(0,200)}` }</p>
                <button className='mainButton' onClick={handleShowMoreClick}>{showMore ? 'show less' : 'show more'}</button>
            </div>
        </>
    )
}
export default TourDetails;