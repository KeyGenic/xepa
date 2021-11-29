import { Tab, Tabs } from '@mui/material/'
import React,{useState} from 'react'
import { TabsContainer } from './categories-tab.styles'

function Categories({value,setValue}) {
    
    const handleChange = (event,newValue) => {
       setValue(newValue)
    }
    console.log(value)
    return (
        
        <TabsContainer>
            <Tabs value={value} centered onChange = {handleChange} >
  <Tab  label="Trending" />
  <Tab   label="Top Rated"  />
  <Tab label="Latest"/>
  <Tab  label="Now Playing"/>
  <Tab   label="Upcoming"/>
</Tabs>
        </TabsContainer>
    )
}

export default Categories
