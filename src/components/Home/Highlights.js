import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const items = [
  {
    icon: <FacebookIcon />,
    title: 'Facebook',
    description: 'Connect with us on Facebook to stay updated and join the community!',
    link: 'https://facebook.com/lolfi',
  },
  {
    icon: <TwitterIcon />,
    title: 'Twitter',
    description: 'Follow us on Twitter for real-time updates and engagement.',
    link: 'https://twitter.com/lolfi',
  },
  {
    icon: <InstagramIcon />,
    title: 'Instagram',
    description: 'Join our Instagram community and be part of the fun!',
    link: 'https://instagram.com/lolfi',
  },
  {
    icon: <RedditIcon />,
    title: 'Reddit',
    description: 'Engage with fellow LolFi enthusiasts on our Reddit page!',
    link: 'https://reddit.com/r/lolfi',
  },
  {
    icon: <TelegramIcon />,
    title: 'Telegram',
    description: 'Chat with us and other members directly on Telegram!',
    link: 'https://t.me/lolfi',
  },
  {
    icon: <YouTubeIcon />,
    title: 'YouTube',
    description: 'Watch our latest videos and tutorials on YouTube.',
    link: 'https://youtube.com/c/lolfi',
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
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Join the LolFi community on social media and be part of the fun!
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'primary.main',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'background.paper',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                }}
                onClick={() => window.open(item.link, '_blank')}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.200' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
