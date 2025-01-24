import { alpha } from '@mui/material/styles';
import { gray, orange, green, brand, red } from '../theme/themePrimitives';

export const feedbackCustomizations = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme, ownerState }) => {
        let backgroundColor;
        let borderColor;
        let iconColor;

        // Define colors based on severity
        switch (ownerState.severity) {
          case 'success':
            backgroundColor = theme.palette.mode === 'dark' ? alpha(green[900], 0.5) : green[100];
            borderColor = theme.palette.mode === 'dark' ? alpha(green[700], 0.5) : green[300];
            iconColor = green[500];
            break;
          case 'info':
            backgroundColor = theme.palette.mode === 'dark' ? alpha(brand[900], 0.5) : brand[100];
            borderColor = theme.palette.mode === 'dark' ? alpha(brand[700], 0.5) : brand[300];
            iconColor = brand[500];
            break;
          case 'warning':
            backgroundColor = theme.palette.mode === 'dark' ? alpha(orange[900], 0.5) : orange[100];
            borderColor = theme.palette.mode === 'dark' ? alpha(orange[800], 0.5) : alpha(orange[300], 0.5);
            iconColor = orange[500];
            break;
          case 'error':
            backgroundColor = theme.palette.mode === 'dark' ? alpha(red[900], 0.5) : red[100];
            borderColor = theme.palette.mode === 'dark' ? alpha(red[700], 0.5) : red[300];
            iconColor = red[500];
            break;
          default:
            backgroundColor = theme.palette.mode === 'dark' ? alpha(orange[900], 0.5) : orange[100];
            borderColor = theme.palette.mode === 'dark' ? alpha(orange[800], 0.5) : alpha(orange[300], 0.5);
            iconColor = orange[500];
            break;
        }

        return {
          borderRadius: 10,
          backgroundColor,
          color: theme.palette.text.primary,
          border: `1px solid ${borderColor}`,
          '& .MuiAlert-icon': {
            color: iconColor,
          },
        };
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: ({ theme }) => ({
        '& .MuiDialog-paper': {
          borderRadius: '10px',
          border: '1px solid',
          borderColor: theme.palette.divider,
        },
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[200],
        ...theme.applyStyles('dark', {
          backgroundColor: gray[800],
        }),
      }),
    },
  },
};
