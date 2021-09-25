import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { changeShowInfo } from '../../actions/profile'
import { render } from '@testing-library/react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



export default function Profile(){
    

    const dispatch = useDispatch()

    const { name, age, country, city, showInfo } = useSelector((state) => state.profile)
    
    
    const handleShowInfo = (newShow) => {
        console.log(newShow)
        dispatch(changeShowInfo(newShow))
    }
    
    
    return (
        <div className="checkbox-container">
            <div className="info-block">
                <FormControlLabel
                control={
                <Checkbox
                    onChange={handleShowInfo}
                    name="checkedB"
                    color="primary"
                />} label={!showInfo? "Show Info" : "Hide Info"}/>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" >
                        Info Person
                    </Typography>
                    <div >
                        <List>
                            <ListItem>
                            <ListItemText primary={showInfo ? name : null}/>
                            </ListItem>
                            <ListItem>
                            <ListItemText primary={showInfo? age + " age" : null}/>
                            </ListItem>
                            <ListItem>
                            <ListItemText primary={showInfo ? country : null}/>
                            </ListItem>
                            <ListItem>
                            <ListItemText primary={showInfo? city : null}/>
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </div>
    </div>
    )
}