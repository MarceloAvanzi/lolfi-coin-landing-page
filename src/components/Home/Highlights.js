import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// Styled components for a vibrant Twitter card
const TwitterCard = styled(Card)(({ theme }) => ({
  background: `url('https://path-to-your-twitter-background-image.jpg') center/cover no-repeat`,
  color: 'white',
  height: '100%',
  borderRadius: '16px',
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darkens background on hover
  },
}));

const items = [
  {
    icon: <TwitterIcon fontSize="large" />,
    title: 'Twitter',
    description:
      'Follow us on Twitter for real-time updates, memes, and engagement with the community!',
    link: 'https://twitter.com/lolfi',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 16, sm: 16 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 5 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom color="primary">
            Social Media & Community
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.200' }}>
            Join the fun! Follow us on Twitter for real-time updates, exclusive content, and connect with the LolFi community!
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TwitterCard
                onClick={() => window.open(item.link, '_blank')}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      width: '48px',
                      height: '48px',
                      backgroundColor: 'info.main',
                      marginRight: 1.5,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'grey.200', mb: 2 }}>
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    alignSelf: 'flex-start',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                  }}
                  onClick={() => window.open(item.link, '_blank')}
                >
                  Join the Conversation
                </Button>
              </TwitterCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
