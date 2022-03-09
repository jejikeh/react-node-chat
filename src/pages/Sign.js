import React, { useReducer } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, TextField, Button } from '@mui/material';

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
    return (
        <div className="wrapper">
            <div className="header">
                <ThemeProvider theme={wrapperHeaderText}>
                    <Typography variant="h1">ХУЙПИЗДА,</Typography>
                </ThemeProvider>
                <Typography variant="body1">
                    Пожалуйста введите номер комнаты и свой никнейм.
                </Typography>
            </div>
            <div className="InputBody">
                <TextField
                    variant="filled"
                    sx={{
                        borderRadius: '4px',
                        boxSizing: 'border-box',
                        paddingRight: '16px',
                    }}
                    label="Номер комнаты"
                    color="success"
                ></TextField>
                <TextField
                    variant="filled"
                    sx={{
                        borderRadius: '0px',
                        paddingRight: '16px',
                    }}
                    color="success"
                    label="Никнейм"
                ></TextField>
                <Button variant="jejikeh">Подтвердить</Button>
            </div>
        </div>
    );
}

export default Sign;
