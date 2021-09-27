// List of all the arts in the gallery

import { useContext, useEffect } from "react";
import { ReqContext } from "../context/ReqContext";
import Import from "../assets/Import"
import { Link } from "react-router-dom";

const Gallery = () => {

    const { artList, handleArtList } = useContext(ReqContext)

    useEffect(() => {
        handleArtList()
    }, [])

    return (
        <section>
            {artList && artList.map((el, index) => (
                <div key={index}>
                    <Link to={`/artdetails/${el.id_art}`}>
                        <h2>{el.name_art}</h2>
                        <img src={Import('./images/', el.image_art)} alt={el.image_name} style={{ maxWidth: '300px' }} />
                    </Link>
                </div>
            ))}
        </section>
    );
}

export default Gallery;