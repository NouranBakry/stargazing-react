import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import "./NasaPhoto.css";

const apiKey = process.env.REACT_APP_NASA_PHOTO_KEY;

export default function NasaPhoto(){

    const [photoData, setPhotoData] = useState(null);

    useEffect(()=>{
        fetchPhoto();
        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);
    if(!photoData) return <div/>;
    return(
        <div className="nasa-page">
        <NavBar/>
        <div className="nasa-photo">
            {photoData.media_type === "image" ? (<img 
            src={photoData.url}
            alt={photoData.title}
            className="photo"/>) : 
            (<iframe allow="autoplay" title="space-video" src="{photoData.url}" frameBorder={0} allowFullScreen className="photo">
            </iframe>)}
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
        </div>
    ); 
}