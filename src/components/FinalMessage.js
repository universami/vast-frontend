import React from 'react'
import Typical from 'react-typical'

const FinalMessage = () => {
    return (
        <div>
            <Typical
                steps={
                    [
                        'Hello, friend.', 1000,
                        'Hello, human.', 3000,
                        'There is nothing for you here anymore.', 6000,
                        'Scamper off now.', 4000,
                        'Go on.', 4000,
                        'Everything that has a beginning', 5000,
                        'Everything that has a beginning has an end', 6000,
                        'Everything that has a beginning has an end?'
                    ]
                }
                loop={1}
                wrapper="p"
            />
        </div>
    )
}

export default FinalMessage
