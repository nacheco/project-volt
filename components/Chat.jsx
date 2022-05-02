import React from 'react'
import styles from '../styles/Chat.module.css'
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import VideoPlayer from './VideoPlayer'
import Options from './Options'
import Notifications from './Notifications'

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1000px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
}))

const Chat = () => {
  const classes = useStyles();
  return (
    <div className={(classes.wrapper, styles.container)}>
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <Typography variant='h2' align='center'>Video Chat</Typography>
    </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default Chat