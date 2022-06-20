import React from "react"
import memesData from "../memesData.js"
import defaultImg from "../images/memeimg.png"
export default function Meme() {

    const [memeImgs, setMemeImgs] = React.useState(memesData);
    const [meme, setMeme] = React.useState({
        topText: "SHUT UP",
        bottomText: "AND TAKE MY MONEY",
        randImg: defaultImg
    })

    function memeImage(){
        const memesArray = memeImgs.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url;

        setMeme( prev => ({
                ...prev,
                randImg: url

        }));
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={memeImage}
                >
                    Get a new meme image 🪄
                </button>
            </div>

            <img src={meme.randImg} className="memeImg" alt=""/>
        </main>
    )
}