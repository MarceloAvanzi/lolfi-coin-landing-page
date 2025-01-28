import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import bgCoinWhite from 'assets/images/dashboard/background.png';
import bgCoinDark from 'assets/images/dashboard/background.png';
import video from 'assets/videos/coin_desktop.mp4';
import videoMobile from 'assets/videos/coin_mobile.mp4';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(217, 8.00%, 19.60%, 0.20)',
  border: '1px solid',
  borderColor: theme.palette.grey[500],
  boxShadow: '0 0 12px 8px hsla(218, 9.90%, 47.50%, 0.20)',
  backgroundImage: `url(${bgCoinWhite})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    backgroundSize: 'cover',
    height: 300,
    backgroundPosition: 'center',
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(${bgCoinDark})`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: theme.palette.grey[700],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
}));

export default function DashboardImage() {
  // Media query to check if the screen is small (sm or below)
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(220, 6.70%, 17.60%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(211, 25.90%, 15.90%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 16, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={1}
          useFlexGap
          sx={{
            alignItems: 'center',
            width: { xs: '100%', sm: '70%' },
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h1"
            component="span"
            sx={{
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              fontWeight: 'bold',
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'white',
                ...theme.applyStyles('dark', {
                  color: 'white',
                }),
              })}
            >
              Welcome to LolFi
            </Typography>
          </Typography>
          <Typography
            component="span"
            sx={{
              textAlign: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold',
              width: { sm: '100%', md: '80%' },
            }}
          >
            The coin that brings laughter and value together! 🚀
          </Typography>
        </Stack>
        <StyledBox id="image">
          <video
            src={isMobile ? videoMobile : video}
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: isMobile ? '90%' : '100%',
              objectFit: 'cover',
              zIndex: -1,
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.9)',
              transition: 'object-fit 0.3s ease',
            }}
          />
        </StyledBox>

      </Container>
    </Box>
  );
}
