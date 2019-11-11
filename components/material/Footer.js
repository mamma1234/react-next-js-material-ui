import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default ({muscles}) => {
    console.log(`Footer`, muscles)
//console.log(props.muscles)
return (
<Paper>
<Tabs
    value={0}
    indicatorColor="primary"
    textColor="primary"
    centered
>
       <Tab label="All"/>
       {muscles.map(group=>
            <Tab label={group}/>
        )}
</Tabs>
</Paper>
    );
}