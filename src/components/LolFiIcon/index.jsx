import React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

export default function AnimatedCoinWithText({ width = 50, height = 50, ml = 0, mr = 1, mt = 0, mb = 0 }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Animated Coin */}
      <SvgIcon
        sx={{
          height,
          width,
          ml,
          mr,
          mt,
          mb,
          animation: 'spin 2s linear infinite',
        }}
        component="div"
      >
        <style>
          {`
            @keyframes spin {
              0% {
                transform: rotateY(0deg);
              }
              50% {
                transform: rotateY(180deg);
              }
              100% {
                transform: rotateY(360deg);
              }
            }
          `}
        </style>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 40">
          {/* Outer Circle */}
          <circle cx="20" cy="20" r="14" fill="#FFD700" stroke="#FFA500" strokeWidth="2" />
          {/* Inner Concentric Circle */}
          <circle cx="20" cy="20" r="12" fill="none" stroke="#FFA500" strokeWidth="1" />
          {/* Coin Emoji */}
          <text
            x="20"
            y="25"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fontSize="14"
            textAnchor="middle"
            fill="#FFA500"
          >
            😂
          </text>
          {/* Shine Effect */}
          <circle cx="12" cy="12" r="4" fill="white" opacity="0.5" />
        </svg>
      </SvgIcon>

      {/* Text Next to Coin */}
      <Box
        component="span"
        sx={{
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          fontSize: 20,
          color: '#FFA500',
        }}
      >
        LOLFI COIN
      </Box>
    </Box>
  );
}
