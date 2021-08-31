import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { useParams, useRouteMatch } from 'react-router';
import { useHistory } from 'react-router-dom';
import Chats from '../Chats/Chats';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage,  sendMessageThunk } from '../../actions/messages'
import { authors, scrollToBottom } from '../../global/global';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faAngleRight } from "@fortawesome/free-solid-svg-icons";




export default function Chat(props) {
    
    const { chatId } = useParams()
    
    const match = useRouteMatch('/chats/:chatId')
    
    
    const messageList = useSelector((state) => state.messages[chatId] || [])
    const dispatch = useDispatch()
 
 

    // const [messageList, setMessageList] = React.useState([])
  
    const [textValue, setTextValue] = React.useState('')
  
    const handleMessageChange = (e) => {
      setTextValue(e.target.value)
    }
    
    

    

  const handlePrevent = (e) => {
    e.preventDefault()
  }
  
  const data = new Date();

  const getTime = () => {

    return data.getHours() + ":" + ((data.getMinutes() >= 10) ? data.getMinutes() : "0" + data.getMinutes());
    
  }

  

  const handleSendMessage = (newMessage) => {
    
    if(newMessage !== '') {

      dispatch(
        sendMessageThunk(chatId, {
          id: `message${Date.now()}`,
          author: authors.person,
          text: newMessage,
          messageTime: getTime()
        })
      )
     
      setTextValue("")
      setTimeout(() => {
        scrollToBottom();
      }, 100);
      
    }
  }
    
    
  
    
    
  
    // const handleMessageSubmit = (e) => {
    //   e.preventDefault()
    //   if(textValue) {
    //     setMessageList((currentMessageList) => 
    //     [ ...currentMessageList, 
    //     {
    //       author: authors.person, 
    //       text: textValue,
    //       messageTime: getTime()

    //     },
    //     ], )
    //     setTextValue("");

        // setTimeout(() => {
        //   scrollToBottom();
        // }, 100);
        
    //   }
      
      
    // }
  
    // React.useEffect(() => {
    //   if (messageList.length && messageList[messageList.length - 1].author !== authors.bot) {
    //     setTimeout(() => {
    //       setMessageList((currentMessageList) => 
    //       [ ...currentMessageList, 
    //       {
    //         author: authors.bot, 
    //         text: "Ваше сообщение отправлено!",
    //         messageTime: getTime()
    //       },
    //       ]) 
    //       scrollToBottom();
    //       }, 1500);
          
          
    //   }
      
    // }, [messageList])



  //   const scrollToBottom = () => {
  //     const div = document.getElementById("mess-list");
  //     div.scrollTop = div.scrollHeight - div.clientHeight;
  //  }
    
  
    const history = useHistory()

    const handleGoBack = () => {
      history.push(`/chats/`)
    }

    
    const chats = useSelector((state) => state.chats)
  
    let chatName = '';

    for (let item of Object.values(chats)) {
      if (chatId == item.id) {
        chatName = item.name
      }
    }

    // const chatName = Object.values(chats).filter(item => chatId == item.id)
  
    if (chatName == "") {
      chatName = "CHAT NOT FOUND"
    }
    


   

    return (
      
      <div className="App App-header">
        
        <div className="container container-chat">
        
        <div className='list'>
          <span><Button variant="contained" color="primary" className='to-back' onClick={handleGoBack}>go back</Button></span>
          </div>
          <h2 className='chat-id'>CHAT: {chatName}</h2>
          
            <pre id="mess-list" className="message-list">
              {messageList.map((message, index) => <React.Fragment key={index}><div className="message"><div className={"mes-" + message.author}><strong>{message.author}</strong> <i>{message.messageTime}</i><br />{message.text}</div></div></React.Fragment>)}
            </pre>
            
            <form className="form" onSubmit={handlePrevent}>
                <TextField prefixIcon className='input-write' id="outlined-basic" fullWidth={true} label="message" autoFocus={true} variant="outlined" autoComplete='off' placeholder="Введите сообщение" value={textValue} onChange={handleMessageChange} />
                <Button type="submit" variant="contained" color="primary" onClick={()=> handleSendMessage(textValue)}><FontAwesomeIcon fixedWidth icon={faAngleRight} size='2x'/></Button> 
            </form>
            
          </div>

      </div>
    );
  }
  
  