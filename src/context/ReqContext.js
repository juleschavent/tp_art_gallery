
// Création de requête pour CRUD accessibles dans toute l'application

import axios from 'axios';
import React, { createContext, useState } from 'react';

export const ReqContext = createContext();

const ReqContextProvider = (props) => {

    //          READ
    // Req qui récupère la liste des oeuvres
    const [artList, setArtList] = useState()
    const handleArtList = () => {
        axios.get(`http://localhost:3001/artlist`, {}).then((response) => {
            setArtList(response.data)
            // console.log("get art list", response.data);
        });
    }

    // Req qui récupère les details d'une oeuvre
    const [artDetails, setArtDetails] = useState()
    const handleArtDetails = (value) => {
        axios.get(`http://localhost:3001/artdetails/${value}`, {}).then((response) => {
            setArtDetails(response.data)
            console.log("get art details", response.data);
        });
    }
    //          READ Fin

    //          INSERT
    // Req qui crée une nouvelle oeuvre
    const [artName, setArtName] = useState('test')
    const [artAuth, setArtAuth] = useState('test')
    const [artDesc, setArtDesc] = useState('test')
    const [artImage, setArtImage] = useState('test')

    const handleCreateArt = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:3001/createart`, {
            artName: artName,
            artAuth: artAuth,
            artDesc: artDesc,
            artImage: artImage
        }).then((response) => {
            console.log(response)
        })
    }

    //          INSERT FIN

    //          Update

    const handleBid = (e, id, currBid, currBuyer) => {
        e.preventDefault()

        axios.put('http://localhost:3001/updatabid', {
            id: id,
            currBid: currBid,
            currBuyer: currBuyer
        }).then((response) => {
            console.log('update bid', response)
        })
    }

    //          Update Fin


    return (
        <ReqContext.Provider value={{
            artList,
            handleArtList,
            artName,
            setArtName,
            artDesc,
            setArtDesc,
            artAuth,
            setArtAuth,
            artImage,
            setArtImage,
            handleCreateArt,
            artDetails,
            handleArtDetails
        }}>
            {props.children}
        </ReqContext.Provider>
    )
}

export default ReqContextProvider;