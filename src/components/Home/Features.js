import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import lolfiCoin from 'assets/images/lolfi-icons/coin.jpeg';
import lolfiCoin2 from 'assets/images/lolfi-icons/coin2.jpeg';
import purposeImage from 'assets/images/lolfi-icons/purpose.png';

const items = [
  {
    icon: <SentimentSatisfiedRoundedIcon />,
    title: 'LolFi Coin',
    description:
      'LolFi is a community-driven meme coin built on the Solana blockchain, combining fun 🤪, innovation 💡, and decentralized finance (DeFi) 🚀.',
    imageLight: `url(${lolfiCoin})`,
    imageDark: `url(${lolfiCoin})`,
  },
  {
    icon: <TrendingUpRoundedIcon />,
    title: 'Purpose',
    description:
      'Designed to explore the potential of crypto 💰, LolFi is more than just a coin, it\'s a movement ✊ to unite humor and blockchain technology. Join the fun and be part of the LolFi revolution! 🎉',
    imageLight: `url(${purposeImage})`,
    imageDark: `url(${purposeImage})`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Is it a Joke Coin?',
    description:
      'Absolutely not, joke is just on the name! LolFi is a serious project, representing the spirit of fun 😜, community 👥, and innovation in the crypto world 🌍. We\'re here to make an impact while keeping things light-hearted! 😎',
    imageLight: `url(${lolfiCoin2})`,
    imageDark: `url(${lolfiCoin2})`,
  },
];


const Chip = styled(MuiChip)(({ theme, selected }) => ({
  background: selected ? theme.palette.primary.main : 'transparent',
  color: selected ? theme.palette.common.white : theme.palette.primary.main,
  borderColor: selected ? theme.palette.primary.light : theme.palette.primary.main,
  '& .MuiChip-label': {
    color: selected ? theme.palette.primary.dark : theme.palette.primary.main,
  },
  ...(theme.palette.mode === 'dark' && {
    borderColor: selected ? theme.palette.primary.main : theme.palette.primary.dark,
  }),
}));


function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      id="features"
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', paddingBottom: 1 }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined" sx={{ backgroundColor: 'background.paper', }}>
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
            boxShadow: 10,
            borderRadius: 2,
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
          })}
          style={
            items[selectedItemIndex]
              ? {
                '--items-imageLight': items[selectedItemIndex].imageLight,
                '--items-imageDark': items[selectedItemIndex].imageDark,
              }
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: '20px' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary', mb: 1 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}


export { MobileLayout };

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography component="h2" variant="h4" gutterBottom color='primary'>
          What is LolFi?
        </Typography>
        <Typography variant="body1" sx={{ color: 'primary.light', mb: { xs: 2, sm: 4 } }}>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                    border: selectedItemIndex === index ? `1px solid ${theme.palette.primary.main}` : 'none',
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'background.paper',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'primary.main', // default color for text
                    },
                    selectedItemIndex === index && {
                      color: 'primary.main', // color for selected state
                    },
                  ]}
                >
                  {icon}
                  <Typography
                    variant="h6"
                    sx={[
                      {
                        color: 'primary.main', // default color for title
                      },
                      selectedItemIndex === index && {
                        color: 'primary.main', // color for title when selected
                      },
                    ]}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={[
                      {
                        color: 'text.primary', // default color for description
                      },
                      selectedItemIndex === index && {
                        color: 'text.primary', // color for description when selected
                      },
                    ]}
                  >
                    {description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'auto',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
              backgroundColor: 'background.paper'
            }}
          >
            <Box
              sx={(theme) => ({
                m: 'auto',
                width: { xs: 320, sm: 420 },
                height: 500,
                boxShadow: 10,
                borderRadius: 2,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? {
                    '--items-imageLight': items[selectedItemIndex].imageLight,
                    '--items-imageDark': items[selectedItemIndex].imageDark,
                  }
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

