import React from 'react'


export default ({color, label}) => {
    return (
        <div style={{background: color, height: 1000 + 'px'}} id={label} >{label}</div>
    )
}