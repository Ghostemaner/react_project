import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import App from '../../App';
import '../../App.css'
import Chats from '../Chats/Chats';
import Chat from '../Chat/Chat';
import Profile from '../Profile/Profile'

export default function Router() {
    
    return (
    <div>
        <div className='nav-header'>
            <Link to='/'>Home</Link>
            <Link to='/chats'>Chats</Link>
            <Link to='/profile'>Profile</Link>
        </div>

        <Switch>
            <Route path='/' exact component={App} />
           
            <Route path='/profile' exact render={() => <Profile /> }/>

            <Route path='/chats' exact component={Chats}></Route>

            <Route path='/chats/:chatId' render={() => <Chat />}/>

            <Route>
                <p className='route-error'>404: NOT FOUND</p>
            </Route>
        </Switch>
    </div>
    )
}