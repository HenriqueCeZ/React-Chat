import React, {useState} from 'react'
import './chatWindow.css'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import EmojiPicker from 'emoji-picker-react';
export default function ChatWindow() {
     const [ emojiOpen, setEmojiOpen] = useState(false)

    function handleEmojiClick(){

    }

    function handleOpenEmoji(){
        setEmojiOpen(true);
    }

    function handleCloseEmoji(){
        setEmojiOpen(false)
    }


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
          <div className="chatWindow--emojiarea" style={{height: emojiOpen? '200px': '00px'}}>
                <EmojiPicker 
                
                   disableSearchBar
                   disableSkinTonePicker
                   onEmojiClick={handleEmojiClick} 
                
                
                />
              
              </div>  

         <div className="chatWindowFooter">
                <div className="chatWindow--pre">
                <div className="chatWindow--btn" onClick={handleCloseEmoji} style={{width: emojiOpen? 40:0}}>
                        <CloseIcon style = {{color: '#919191'}}/>
                         

                    </div>




                <div className="chatWindow--btn" onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon style = {{color: '#919191'}}/> 

                    </div>     


                </div>
                <div className="chatWindow--inputarea">
                    <input 
                    className="chatWindow--input"

                    type="text" 
                    
                    placeholder="Digite uma mensagem"
                    
                    />
                    


                </div>
                <div className="chatWindow--pos">
                <div className="chatWindow--btn">
                        <SendIcon style = {{color: '#919191'}}/> 

                    </div>


                </div>


         </div>
        </div>
    )
}
