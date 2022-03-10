import React, { useReducer, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, TextField, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

import socket from '../socket';
import './Sign.css';

const wrapperHeaderText = createTheme();

wrapperHeaderText.typography.h1 = {
    fontSize: '28.83px',
    fontStyle: 'normal',
    fontWeight: '800',
    fontFamily: 'JetBrains Mono',
    lineHeight: '38px',
    color: '#0A0C08',
    flex: 'none',
    order: 0,
    flexGlow: 0,
    marginBottom: '16px',
};

function Sign() {
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');

    const [open, setOpen] = React.useState(false);

    // eslint-disable-next-line consistent-return
    const onEnter = () => {
        if (!roomId || !userName) {
            // eslint-disable-next-line no-alert
            setOpen(true);
        } else {
            console.log(roomId, userName);
        }
    };
    return (
        <div className="wrapper">
            <div className="header">
                <ThemeProvider theme={wrapperHeaderText}>
                    <Typography variant="h1">ЧАТ,</Typography>
                </ThemeProvider>
                <Typography variant="body1">
                    Введите номер комнаты и свой никнейм.
                </Typography>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Collapse in={open}>
                    <Alert
                        variant="outlined"
                        severity="error"
                        sx={{
                            fontFamily: 'JetBrains Mono',
                            marginRight: '64px',
                            marginBottom: '12px',
                        }}
                    >
                        Пожалуйста, проверьте правильность вводимых данных
                    </Alert>
                </Collapse>
                <div className="InputBody">
                    <Grid container xs={12}>
                        <Grid item xs>
                            <TextField
                                variant="filled"
                                sx={{
                                    borderRadius: '4px',
                                    boxSizing: 'border-box',
                                    paddingRight: '16px',
                                }}
                                label="Номер комнаты"
                                color="success"
                                value={roomId}
                                onChange={(e) => setRoomId(e.target.value)}
                            ></TextField>
                        </Grid>
                        <Grid item xs>
                            <TextField
                                variant="filled"
                                sx={{
                                    borderRadius: '4px',
                                    paddingRight: '16px',
                                }}
                                color="success"
                                label="Никнейм"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            ></TextField>
                        </Grid>
                        <Grid item xs>
                            <Button onClick={onEnter} variant="jejikeh">
                                Подтвердить
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </div>
    );
}

export default Sign;
