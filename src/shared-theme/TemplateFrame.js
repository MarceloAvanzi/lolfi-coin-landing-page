import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ToggleColorMode from './ToggleColorMode';
import getTheme from 'shared-theme/theme/getTheme';

function TemplateFrame({
  mode,
  toggleColorMode,
  children,
}) {
  const theme = createTheme(getTheme(mode));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            position: 'fixed',
            top: 4,
            right: 4,
            zIndex: 1200,
          }}
        >
          <ToggleColorMode
            data-screenshot="toggle-mode"
            mode={mode}
            toggleColorMode={toggleColorMode}
          />
        </Box>
        <Box sx={{ flex: '1 1' }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}

TemplateFrame.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default TemplateFrame;
