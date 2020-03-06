import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import ReactAudioPlayer from 'react-audio-player'
import gif from '../resources/rotten-religion.gif'
import sound from '../resources/rotten-religion.wav'
import achievementService from '../services/achievementService'

const RottenReligion = ({ setStartEnabled, setEnd, setMainscreen, sCount, achievements, cookiePermission }) => {

    const [showButton, setShowButton] = useState(false)

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <ReactAudioPlayer src={sound} autoPlay onEnded={() => {
                    setShowButton(true)
                }} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Rotten Religion' />
                <br></br>
                {
                    showButton === true &&
                    <Button type='Achievement-button' text='To Vast' handleClick={() => {
                        if (!achievementService.find(achievements, 'Onlooker') && sCount >= 9) {
                           achievementService.completeAchievement(cookiePermission, achievements, 'Rotten Religion')
                            setEnd('onlooker')
                        } else {
                           achievementService.completeAchievement(cookiePermission, achievements, 'Rotten Religion')
                            if (achievementService.allAchievements(achievements) === true) {
                                setEnd('everything')
                            } else {
                                setStartEnabled(true)
                                setEnd('')
                                setMainscreen(true)
                            }
                        }
                    }} />
                }
            </div>
        </div>
    )
}

export default RottenReligion
