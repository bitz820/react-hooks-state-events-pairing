import React, {useState} from 'react'

function Comment({item}) {

    const [agree, setAgree] = useState(0)
    const [suck, setSuck] = useState(0)

    const handleAgree = (e) => {
                console.log(e)
                setAgree(agree+1)
            }

            const handleSuck = () => {
                setSuck(suck+1)
            }


    return (
        <div key={item.user}>
            <h3>{item.user}</h3>
            <p>{item.comment}</p>
            <button onClick={handleAgree}>{agree} others Agree!</button>
            <button onClick={handleSuck}>{suck} others think You Suck!</button>

        </div>
    )
}

export default Comment