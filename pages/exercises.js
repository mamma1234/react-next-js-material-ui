import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
//import LeftPane from '../components/material/LeftPane';
import RightPane from '../components/material/RightPane';
import Paper from '@material-ui/core/Paper';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
//import { exercises } from './store';

const styles = {
    Paper:{
        padding:20, marginTop:10, marginBottom:10,
        height:500,
        overflow:'auto'
    }
}
/*
{props.exercises.map(([group, exercises]) =>
    <Typography>{group}</Typography>
)}
*/
export default (props) => {
    console.log(`exercises props`, props);
    //console.log(`exercises props data`, props.exercises);
    return (
        <Grid container>
            <Grid item sm>
                <Paper style={styles.Paper}>
                {props.exercises.map(([key, value]) =>
                    <Fragment>
                        <Typography variant="h5" style={{textTransform:'capitalize'}}>
                            {key}
                        </Typography>

                        <List component="ul">
                            {value.map(({title}) =>
                                <ListItem button>
                                    <ListItemText primary={title}/>
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                )}                    
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper style={styles.Paper}>
                    <Typography variant="h4">
                        welcome!
                    </Typography>
                    <Typography variant="subtitle1" style={{marginTop:20}}>
                        hello
                    </Typography>
                </Paper>

            </Grid>
        </Grid>
    );
}