import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LolFiIcon from 'components/LolFiIcon';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {'© LolFi Coin Project '}
      {new Date().getFullYear() + ', '}
      <Link color="text.secondary" href="#">
        All rights reserved.
      </Link>
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 1, sm: 1 },
          py: { xs: 2, sm: 2 },
          textAlign: { sm: 'center', md: 'left' },
          bgcolor: "background.default"
        }}
      >
        <Box sx={{ ml: 0 }}>
          <LolFiIcon />
        </Box>
        <Copyright />
      </Box>
    </>
  );
}
