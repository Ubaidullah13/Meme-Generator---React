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

    function handleChange(event){
        const {name, value } = event.target
        setMeme( prev => {
           return { 
               ...prev,
                [name]: value
            }
        })   
    }

    console.log(meme.topText, meme.bottomText);


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={memeImage}
                >
                    Get a new meme image 🪄
                </button>
            </div>
            <div className="meme">
                <img src={meme.randImg} className="meme--image" alt=""/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}