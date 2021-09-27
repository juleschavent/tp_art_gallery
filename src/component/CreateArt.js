import { useContext } from "react";
import { ReqContext } from "../context/ReqContext";

// Add a new art to the gallery
const CreateArt = () => {

    const { setArtName, setArtDesc, setArtAuth, setArtImage, handleCreateArt } = useContext(ReqContext)


    return (
        <section className="createContainer">
            <form onSubmit={handleCreateArt} className="create__form">
                <input type="text" placeholder="Art name" onChange={(e) => setArtName(e.target.value)} />
                <input type="text" placeholder="Artist" onChange={(e) => setArtAuth(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" placeholder="Art description" onChange={(e) => setArtDesc(e.target.value)}></textarea>
                <input type="file" />
                <button>Create</button>
            </form>
        </section>
    );
}

export default CreateArt;