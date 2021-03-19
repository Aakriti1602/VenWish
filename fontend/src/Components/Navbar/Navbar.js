import React , {useState, useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Toolbar, AppBar, IconButton, Typography, Button, Menu, MenuItem} from '@material-ui/core'
import companyLogo from '../../Images/logo2.png'
import menuIcon from '../../Images/menuIcon.svg'


const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    logo: {
      height: 60,
    },
    barColor: {
      backgroundColor: '#6ac083'
    }
}));



const NavBar = () => {

    const classes = useStyles()



    
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        setWidth(window.innerWidth)
      }   
      window.addEventListener('resize', handleResize)
    }, [])


  

    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)
    



    return(
        <AppBar position="static" className={classes.barColor}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <img src={companyLogo} className={classes.logo} />
                </IconButton>
                <Typography variant="h6" className={classes.title}>VenWish</Typography>
                {(width < 960)?
                  <div>
                    <IconButton edge="start" color="inherit" aria-label="menu"><img src={menuIcon} onClick={handleClick} /></IconButton>                    
                    <Menu id="topNav" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                      <MenuItem onClick={handleClose}>ABOUT</MenuItem>
                      <MenuItem onClick={handleClose}>VOLUNTEERS</MenuItem>
                      <MenuItem onClick={handleClose}>TESTIMONIAL</MenuItem>
                      <MenuItem onClick={handleClose}>CONTACT</MenuItem>
                    </Menu>
                  </div>: 
                  <div>
                    <Button color="inherit">ABOUT</Button>
                    <Button color="inherit">VOLUNTEERS</Button>
                    <Button color="inherit">TESTIMONIAL</Button>
                    <Button color="inherit">CONTACT</Button>
                  </div>                  
                }
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar