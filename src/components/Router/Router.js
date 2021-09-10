import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import App from '../../App';
import '../../App.css'
import Chats from '../Chats/Chats';
import Chat from '../Chat/Chat';
import Weather from '../Widgets/Weather';
import Profile from '../Profile/Profile'
import { faUser, faHome, faComments} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Router() {
    
    return (
    <div>
        <div className='nav-header'>
            <Link to='/'><FontAwesomeIcon fixedWidth  icon={faHome} /> Home</Link>
            <Link to='/chats'><FontAwesomeIcon fixedWidth  icon={faComments} />Chats</Link>
            <Link to='/profile'><FontAwesomeIcon fixedWidth  icon={faUser} />Profile</Link>
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