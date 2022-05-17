import React from "react"
export default function Header() {
    return (
        <header className="header">
            <img 
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                className="header--image"
                alt="MG"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">PranjalBareth</h4>
        </header>
    )
}