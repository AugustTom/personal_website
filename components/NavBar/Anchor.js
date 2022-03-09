import React from 'react'

export default ({anchor, children}) => {

    const handleOnClick = (e) => {
        e.preventDefault()
        const location = document.querySelector(`#${anchor}`).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 64,
        })
    }
    return (
        <a onClick={handleOnClick}>{children}</a>
    )
}