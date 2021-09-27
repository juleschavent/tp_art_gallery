import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { ReqContext } from "../context/ReqContext";
import Import from '../assets/Import'
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const ArtDetails = () => {

    const { id } = useParams()
    const { artDetails, handleArtDetails } = useContext(ReqContext)
    const { currentUser } = useAuth()

    const history = useHistory()

    const handleCurrBid = (value) => {

        axios.put('http://localhost:3001/updatabid', {
            id: id,
            currBid: value + 5000,
            currBuyer: currentUser.uid
        }).then((response) => {
            console.log('update bid', response)
            history.push('/gallery')
        })
    }

    useEffect(() => {
        handleArtDetails(id)
    }, [])

    return (
        artDetails ? artDetails.map((el, index) => (
            <section key={index} className="details__container">
                <h2 className="details__title">{el.name_art}</h2>
                <img src={Import('./images/', el.image_art)} alt={el.image_name} className="details__img" />
                <p className="details__desc">{el.desc_art}</p>
                <p className="details__auth">{el.auth_art}</p>

                <h4 className="details__currBid">Current bid is at: {el.currbid_art}$</h4>
                <button onClick={() => handleCurrBid(el.currbid_art)} className="details__bid">Bid by 5.000$</button>
                <div><Link to='/gallery' className="details__back">Go back to the gallery</Link></div>
            </section >
        )) : <span>Loading</span>
    );
}

export default ArtDetails;