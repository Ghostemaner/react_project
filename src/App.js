import logo from './logo.svg';
import React from 'react';
import './App.css';
import Message from './Message';

const text = "const's value";

const authors = {
  person: 'Guest',
  bot: "BOT"
}

function App() {
  const [messageList, setMessageList] = React.useState([])

  const [textValue, setTextValue] = React.useState('')

  
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
      <div className="messageList">
        {messageList.map((message, index) => <React.Fragment key={index}><div className="message">{message.author}: {message.text}</div></React.Fragment>)}
      </div>
      <form className="form" onSubmit={handleMessageSubmit}>
        <input className="input" required placeholder="Введите сообщение" value={textValue} onChange={handleMessageChange}/>
        <button className="button">send message</button>
      </form>
    </div>
  );
}

export default App;
