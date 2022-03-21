import React from 'react'
import style from './FooterLink.module.css'

export default ({href,children}) => {
    return (
        <h3 className={style.link}>
            <a href={href}> {children}</a>
        </h3>
    )
}