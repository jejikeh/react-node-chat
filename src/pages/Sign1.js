import React, { useReducer } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, TextField, Button } from '@mui/material';
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

function Sign1() {
    return (
        <div className="wrapper">
            <div className="header">
                <ThemeProvider theme={wrapperHeaderText}>
                    <Typography variant="h1">React-Node-Chat</Typography>
                </ThemeProvider>
                <Typography variant="body1">
                    Пожалуйста введите свой никнейм
                </Typography>
            </div>
            <div className="InputBody">
                <TextField
                    variant="filled"
                    sx={{
                        borderRadius: '0px',
                        paddingRight: '16px',
                    }}
                    label="Никнейм"
                ></TextField>
                <Button variant="jejikeh">
                    <Typography variant="body1light">Подтвердить</Typography>
                </Button>
            </div>
        </div>
    );
}

export default Sign1;
