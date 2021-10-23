import React from 'react'
import './chatIntro.css'
import image from './images/whats.jpg'

export default function ChatIntro() {
    return (
        <div className="chatIntro">
            <img  src={image} alt="" />

            <h1>Mantenha seu celular conectado</h1>
            <h2>Para reduzir o uso de dados, se conecte a uma rede Wi-Fi</h2>
           
        </div>
    )
}
