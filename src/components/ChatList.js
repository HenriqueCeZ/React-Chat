import React from 'react'
import './chatListItem.css'

export default function ChatList() {
    return (
        <div class="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Henrique Cezar</div>
                    <div className="chatListItem--date">19:00</div>


                </div>
                <div className="chatListItem--line">
                        <div className="chatListItem--lastMsg">
                                <p>Opá, tudo bem?</p>

                        </div>


                </div>


            </div>
        </div>
    )
}
