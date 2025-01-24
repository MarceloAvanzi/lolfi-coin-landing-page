import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import LolFiIcon from 'components/LolFiIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.paper, 0.7),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 6 }}
    >
      <Container maxWidth="md">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', mr: 2 }}>
            <LolFiIcon />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="secondary" size="small" onClick={() => {
                const section = document.getElementById("features");
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                What is LolFi?
              </Button>
              <Button variant="text" color="secondary" size="small" onClick={() => {
                const section = document.getElementById("highlights");
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Social Media & Community
              </Button>
              <Button variant="text" color="secondary" size="small" onClick={() => {
                const section = document.getElementById("pricing");
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Where can I buy?
              </Button>
              <Button variant="text" color="secondary" size="small" sx={{ minWidth: 0 }} onClick={() => {
                const section = document.getElementById("faq");
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                FAQ
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', ml: -3 }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                    <Typography component="h2" variant="h5" color='primary'>
                      LOLFI COIN
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 3 }} />
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    alignItems: 'start',
                    width: '100%'
                  }}>
                    <Button variant="outlined" color="secondary" size="medium" onClick={() => {
                      const section = document.getElementById("features");
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                      setOpen(false);
                    }}>
                      <MenuItem>What is LolFi?</MenuItem>
                    </Button>
                    <Button variant="outlined" color="secondary" size="medium" onClick={() => {
                      const section = document.getElementById("highlights");
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                      setOpen(false);
                    }}>
                      <MenuItem>Social Media & Community</MenuItem>
                    </Button>
                    <Button variant="outlined" color="secondary" size="medium" onClick={() => {
                      const section = document.getElementById("pricing");
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                      setOpen(false);
                    }}>
                      <MenuItem>Where can I buy?</MenuItem>
                    </Button>
                    <Button sx={{ mb: 2 }} variant="outlined" color="secondary" size="medium" onClick={() => {
                      const section = document.getElementById("faq");
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                      setOpen(false);
                    }}>
                      <MenuItem>FAQ</MenuItem>
                    </Button>
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
