import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import plans from 'utils/data/plans'

export default function Pricing() {

  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 16, sm: 16 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          color='primary'
        >
          Where can I buy?
        </Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
      >
        {plans.map((plan) => (
          <Grid
            size={{ xs: 12, sm: plan.title === 'Top 1º' ? 12 : 6, md: 4 }}
            key={plan.title}
          >
            <Card
              sx={[
                {
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                },
              ]}
            >
              <CardContent>
                <Box
                  sx={[
                    {
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 2,
                    },
                  ]}
                >
                  <Typography component="h3" variant="h6">
                    {plan.title}
                  </Typography>
                </Box>
                <Box
                  sx={[
                    {
                      display: 'flex',
                      alignItems: 'center', // Align icon and text horizontally
                    },
                  ]}
                >
                  <AutoAwesomeIcon
                    sx={[
                      { mr: 1, fontSize: '1.5rem' }, // Adding margin and size to the icon
                      plan.title === 'Top 1º' ? { color: 'primary.main' } : {},
                    ]}
                  />
                  <Typography component="h3" variant="h2">
                    {plan.name}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                {plan.description.map((line) => (
                  <Box
                    key={line}
                    sx={{ py: 1, display: 'flex', gap: 1.5, alignItems: 'center' }}
                  >
                    <CheckCircleRoundedIcon
                      sx={[
                        {
                          width: 20,
                        },
                        plan.title === 'Top 1º'
                          ? { color: 'primary.main' }
                          : { color: 'primary.light' },
                      ]}
                    />
                    <Typography
                      variant="subtitle2"
                      component={'span'}
                      sx={[
                      ]}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={plan.buttonVariant}
                  color={plan.buttonColor}
                  onClick={() => handleCheckout(plan.title, plan.price, plan.link)}
                >
                  {plan.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
