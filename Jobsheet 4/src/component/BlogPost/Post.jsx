import React from "react";

const post = (props) => {
    return (
        <div className="artikel">
                    <div className="gambar-artikel">
                    <img src="http://placeimg.com/80/80/animals" alt="Gambar Tubnail Artikel" /> 
                </div>
                <div className="konten-artikel">
                    <div className="judul-artikel">{props.judul}</div>
                    <p className="isi-artikel">{props.isi}</p>
           </div>
        </div>  

        )  
     } 
export default post;
        
    


