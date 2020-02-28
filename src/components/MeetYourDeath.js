import React from 'react'
import Header from './Header'
import Button from './Button'
import gif from '../resources/meet-your-death.gif'
import sound from '../resources/meet-your-death.wav'
import achievementService from '../services/achievementService'

const MeetYourDeath = ({ setStartEnabled, setEnd, setMainscreen, achievements, setAchievements, sCount }) => {

    new Audio(sound).play()

    return (
        <div>
            <div className='App'>
                <Header className='Header' moving={false} />
                <img className='Achievement' src={gif} alt='Achievement unlocked - Meet Your Death' />
                <br></br>
                <Button type='Achievement-button' text='To Beginning' handleClick={() => {
                    if (!achievements.includes('Onlooker') && sCount >= 9) {
                        setAchievements(achievements.concat('Meet Your Death'))
                        setEnd('onlooker')
                    } else {
                        setAchievements(achievements.concat('Meet Your Death'))
                        achievementService.all_achievements(achievements, setAchievements, setEnd)
                        setStartEnabled(true)
                        setEnd('')
                        setMainscreen(true)
                    }
                }} />
            </div>
        </div>
    )
}

export default MeetYourDeath
