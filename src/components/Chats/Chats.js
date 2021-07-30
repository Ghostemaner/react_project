import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Chat from '../Chat/Chat';
import { Link } from '@material-ui/core';

export default function Chats(){
    
  const [chatList, setChatList] = React.useState([
    {
      name: "Chat 1",
      id: 'chat1243'
    },
    {
      name: "Chat 2",
      id: 'chat5312'
    },
    {
      name: "Chat 3",
      id: 'chat2342'
    },
    {
      name: "Chat 4",
      id: 'chat4332'
    }
  ])
    
return (
    <div className="App App-header">
      <div className="container">
      <div className='list'>
            <List component="nav" aria-label="main mailbox folders">
              {chatList.map((chat, id) => <ListItem key={chat.id} button>
                <ListItemText primary={chat.name} />
              </ListItem>)}
            </List>
        </div>
        <div className="attention-block"><p className='attention-text'>Select a chat to continue the conversation...</p></div>
      </div>
    </div>
  );
}

