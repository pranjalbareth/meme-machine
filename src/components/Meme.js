import React from "react"

export default function Meme() {
   
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
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src="http://i.imgflip.com/1bij.jpg" className="meme--image" />
                <h2 className="meme--text top">one does not simply</h2>
                <h2 className="meme--text bottom">walk into mordor</h2>
            </div>
        </main>
    )
}