import React, {useEffect, useState} from 'react'

export default ({word}) => {
    const [textLength,setTextLength] = useState(0)
    const [increasing, setIncreasing] = useState(true)

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(increasing) {
                setTextLength(textLength => textLength + 1)
            }
            else
                setTextLength(textLength => textLength - 1)
        }, 1000)
        return () => clearInterval(interval);
    })
    useEffect(()=>{
        if(textLength === word.length){
            setIncreasing(false)
        }else if (textLength === 0 && !increasing){
            setIncreasing(true)
        }
    },[textLength])


    return (
        <p data-testid="word">{textLength ? word.slice(0,textLength): ""}</p>
    )
}