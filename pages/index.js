import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

import FullPage from '../components/FullPage'

export default function Home() {
    return (
        <div>
            <NavBar/>
            <FullPage color="red" label="about"/>
            <FullPage color="blue" label="experience"/>
            <FullPage color="green" label="skills"/>
        </div>
    )
}
