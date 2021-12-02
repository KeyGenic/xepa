import { Tab, Tabs } from '@mui/material/'
import React,{useState} from 'react'
import { TabsContainer } from './categories-tab.styles'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Categories({value,setValue}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const html  = document.querySelector('html')
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      html.style.overflow = 'hidden'
    };
    const handleClose = () => {
        const menuGenre = document.querySelector('.MuiMenuItem-root')
      setAnchorEl(null);
      html.style.overflowY = 'auto';
      html.style.overflowX = 'hidden';
    };
  
    const handleChange = (event,newValue) => {
       setValue(newValue)
    }
    return (
        
        <TabsContainer>
            <Tabs value={value} centered onChange = {handleChange} >
  <Tab  label="Trending" />
  <Tab   label="Top Rated"  />
  <Tab  label="Now Playing"/>
  <Tab   label="Upcoming"/>
<Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Genres
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><span onClick = {() => setValue('action')}>Action</span></MenuItem>
        <MenuItem onClick={handleClose}><span onClick = {() => setValue('animation')}>Animation</span></MenuItem>
        <MenuItem onClick={handleClose}><span onClick = {() => setValue('crime')}>crime</span></MenuItem>
        <MenuItem onClick={handleClose}><span onClick = {() => setValue('horror')}>Horror</span></MenuItem>
        <MenuItem onClick={handleClose}><span onClick = {() => setValue('mystery')}>Mystery</span></MenuItem>
      </Menu>
</Tabs>

        </TabsContainer>
    )
}

export default Categories
