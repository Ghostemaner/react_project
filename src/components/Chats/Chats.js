import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Chat from '../Chat/Chat';
import { Link } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeChat, addChat } from '../../actions/chats';

export default function Chats(){

  const [inputValue, setInputValue] = React.useState('')

  const handleNameChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const history = useHistory()

  const chats = useSelector((state) => state.chats)
  const dispatch = useDispatch()

  const handleLinkChat  = (chat) => {
    history.push(`/chats/${chat.id}`)
  }

  const handleAddChat = (name) => {
    if(name !== '') {
      dispatch(addChat(`chat${getRandomNamber()}`, name))
      setInputValue("")
    }
    
  }

  const getRandomNamber = () => {
    return Math.ceil((Math.random() * Date.now()) / 100000)
  }

  

  const handleRemoveChat = (chatId) => {
    console.log(chatId)
    dispatch(removeChat(chatId))
  }
    
return (
    <div className="App-header-chats">
      <div className="container">
      <div className='list'>
          <form onSubmit={handleSubmit}>
                <TextField className='input-write' id="outlined-basic" label="Chat name" autoFocus={true} variant="outlined" required placeholder="create a new chat" value={inputValue} onChange={handleNameChange}/>
                <Button variant="contained" color="primary" type="submit" onClick={() => handleAddChat(inputValue)}>+</Button>
          </form>
          <List component="nav" className='list-chats' aria-label="main mailbox folders">
              {Object.values(chats).map((chat) => (
              <div key={chat.id} className="list-container">  
              <ListItem 
                className="list-item" 
                button
                onClick={() => handleLinkChat(chat)}>
                {chat.name}
                </ListItem>
                <button  onClick={() => handleRemoveChat(chat.id)}>&times;</button>
                </div>
                ))}
          </List>
        </div>
      </div>
    </div>
  );
}

