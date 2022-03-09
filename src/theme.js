import { createTheme } from '@mui/material';

const theme = createTheme();

theme.typography.h1 = {
    fontSize: '28.83px',
    fontStyle: 'normal',
    fontWeight: '800',
    fontFamily: 'JetBrains Mono',
    lineHeight: '38px',
    color: '#0A0C08',
};
theme.typography.body1 = {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'JetBrains Mono',
    lineHeight: '21px',
    color: '#0A0C08',
};

theme.components.MuiTypography = {
    variants: [
        {
            props: { variant: 'body1light' },
            style: {
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: 'JetBrains Mono',
                lineHeight: '21px',
                color: '#F1F7EE',
                margin: '0px 16px',
            },
        },
    ],
};

theme.components.MuiButton = {
    variants: [
        {
            props: { variant: 'jejikeh' },
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '12px',
                paddingLeft: '16px',
                paddingRight: '16px',

                borderRadius: '4px',
                boxSizing: 'border-box',
                boxShadow: '2px 4px 8px -1px rgba(0, 0, 0, 0.64)',
                textTransform: 'none',
                border: `2px solid #0A0C08`,
                fontFamily: 'JetBrains Mono',
                fontSize: '16px',
                color: '#F1F7EE',
                background: '#0A0C08',
                '&:hover': {
                    background: '#F1F7EE',
                    color: '#0A0C08',
                    borderColor: '#0A0C08',
                    boxShadow: '1px 1px 1px -1px rgba(0, 0, 0, 0.64)',
                },
            },
        },
    ],
};

export default theme;
