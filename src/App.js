import logo from './logo.svg';
import React from 'react';
import './App.css';
import Message from './Message';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';




const text = "const's value";

const authors = {
  person: 'Guest',
  bot: "BOT"
}

function App() {
  const [messageList, setMessageList] = React.useState([])

  const [textValue, setTextValue] = React.useState('')

  const chatList = [
    {
      name: "Chat 1",
      id: 2332
    },
    {
      name: "Chat 2",
      id: 1312
    },
    {
      name: "Chat 3",
      id: 4332
    }
  ]

  
  const handleMessageChange = (e) => {
    setTextValue(e.target.value)
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault()
    setMessageList((currentMessageList) => 
    [ ...currentMessageList, 
    {
      author: authors.person, 
      text: textValue
    },
    ])
    setTextValue("")
  }

  React.useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== authors.bot) {
      setTimeout(() => {
        setMessageList((currentMessageList) => 
        [ ...currentMessageList, 
        {
          author: authors.bot, 
          text: "Вас приветствует бот!"
        },
        ])
        }, 1500)
    }
    
  }, [messageList])


  return (
    <div className="App App-header">
      <div className="container">
      <div className='list'>
            <List component="nav" aria-label="main mailbox folders">
              {chatList.map((chat, id) => <React.Fragment key={chat.id}><ListItem button>
                <ListItemIcon>
                  </ListItemIcon>
                <ListItemText primary={chat.name} />
              </ListItem></React.Fragment>)}
            </List>
        </div>
        <div className="message-list">
          {messageList.map((message, index) => <React.Fragment key={index}><div className="message">{message.author}: {message.text}</div></React.Fragment>)}
        </div>
        <form className="form" onSubmit={handleMessageSubmit}>
          <TextField className='input' id="outlined-basic" fullWidth={true} label="message" autoFocus={true} variant="outlined" required placeholder="Введите сообщение" value={textValue} onChange={handleMessageChange}/>
          <Button variant="contained" color="primary" onClick={handleMessageSubmit}>Send</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
