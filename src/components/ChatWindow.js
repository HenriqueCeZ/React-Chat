import React from 'react'
import './chatWindow.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
export default function ChatWindow() {
    return (
        <div className="chatWindow">
         <div className="chatWindowHeader">
             <div className="chatWindow--headerInfo">
                <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" className="avatarChat" />

                <div className="chatWindowName">
                        Beltrano de tal

                </div>
              

             </div>
             <div className="chatWindow--headerButton">
                    <div className="chatWindow--btn">
                        <SearchIcon style = {{color: '#919191'}}/> 

                    </div>
                    <div className="chatWindow--btn">
                        <AttachFileIcon style = {{color: '#919191'}}/> 

                    </div>
                    <div className="chatWindow--btn">
                        <MoreVertIcon style = {{color: '#919191'}}/> 

                    </div>
                </div>

         </div>
         <div className="chatWindowBody"></div>
         <div className="chatWindowFooter"></div>
        </div>
    )
}
