import './app.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React, {useState, useEffect} from 'react'
import ChatList from './components/ChatList';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow'
function App() {
      const [chatlist, setChatList] = useState([
        {chatId:1, title: 'fulano de tal', image:"https://www.w3schools.com/howto/img_avatar2.png"},
        {chatId:2, title: 'Beltrano de tal', image:"https://www.w3schools.com/howto/img_avatar2.png"},
        {chatId:3, title: 'Bigail de tal', image:"https://www.w3schools.com/howto/img_avatar2.png"},
        {chatId:4, title: 'Mikail de tal', image:"https://www.w3schools.com/howto/img_avatar2.png"},
      ]);
      const [activeChat, setActiveChat] = useState({});

  return (
      <div class='app-window'>
        <div class="sidebar">
          <header>
            <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
              <div class="header--buttons">
                <div className="header--btn">
                    <DonutLargeIcon style={{color:'#919191'}}/>
                    
                </div>
                <div className="header--btn">
                    <ChatIcon style={{color:'#919191'}}/>
                
                </div>
                <div className="header--btn">
                    <MoreVertIcon style={{color:'#919191'}}/>

                </div>


              </div>

          </header>
          <div className="search">
                <div className="search--input">
                    <SearchIcon font-size="small" style={{color:'#919191'}}/>
                    <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                  </div>      
            </div>

            <div className="chatList">
              
                {chatlist.map((item, key) =>(
                  <ChatList
                    key={key}
                    data={item}
                    active={activeChat.chatId === chatlist[key].chatId}
                    onClick={()=>setActiveChat(chatlist[key])}
                  />
                ))}
              
              
              </div> 

        </div>
        <div className="contentarea">
         {activeChat.chatId !== undefined &&
            <ChatWindow />
          
          }
          {activeChat.chatId === undefined &&
            <ChatIntro />
          }         

          

        </div>

      </div>
    
  );
}

export default App;
