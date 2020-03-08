import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import sound from '../resources/credits.wav'
import vast from '../resources/vast-logo.jpg'

const Credits = ({ setCredits, setEnd }) => {

    return (
        <div className='App'>
            <div className='Body'>
                <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                    setEnd('end')
                    setCredits(false)
                }} />
                <div className='Credits'>
                    <div className='Credits-paragraph'>
                        <img src={vast} alt='Vast' />
                        <p>Created by Universami</p>
                    </div>
                    <div>
                        <h3>Characters</h3>
                        <p>Death</p>
                        <p>God</p>
                        <p>Anarchy</p>
                        <p>Satan</p>
                        <p>Drunkard from Wakasa</p>
                        <p>Yao Bikuni</p>
                        <p>Death Doulas</p>
                    </div>
                    <div className='Credits-paragraph'>
                        <h3>Audio</h3>
                        <p>Death - IBM Watson KateV3</p>
                        <p>God - The Holy Bible (KJV Dramatized Audio book) </p>
                        <p>"The Good Book" - Tim Minchin</p>
                        <p>"Routine" - Bambu</p>
                        <p>"The sound of silence" - Pentatonix</p>
                        <p>"Deal With The Devil" - Dope D.O.D.</p>
                        <p>"Demons are a girl's best friend" - Powerwolf</p>
                        <p>"Take me to church" - Hozier</p>
                        <p>"Kun tää biisi loppuu" - Ruger Hauer</p>
                    </div>
                    <div className='Credits-paragraph'>
                        <h3>Gifs</h3>
                        <p>Vast banner - Universami</p>
                        <p>Vast and The Bourgeois - Robert Ek</p>
                        <p>God - Monty Python and The Holy Grail</p>
                        <p>Twitchy room - Dain Fagerholm</p>
                    </div>
                    <div className='Credits-paragraph'>
                        <h3>Links</h3>
                        <p>The Order of the Good Death</p>
                        <p>www.orderofthegooddeath.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credits
