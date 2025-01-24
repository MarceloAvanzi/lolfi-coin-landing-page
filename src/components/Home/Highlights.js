import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Desempenho adaptável',
    description:
      'Nossa plataforma ajusta-se facilmente ao volume de vendas e demandas do Mercado Livre, maximizando a eficiência na gestão.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Feito para durar',
    description:
      'Solução robusta e confiável para acompanhar suas vendas a longo prazo, com dados sempre atualizados.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Experiência de usuário excelente',
    description:
      'Gerencie suas vendas com uma interface intuitiva, facilitando o acompanhamento de métricas e produtos.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Funcionalidade inovadora',
    description:
      'Fique à frente com recursos que oferecem insights exclusivos sobre top produtos, regiões e vendas.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Suporte confiável',
    description:
      'Conte com nosso suporte especializado, disponível para auxiliar no monitoramento e nas suas análises de vendas.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Precisão em cada detalhe',
    description:
      'Relatórios detalhados e gráficos interativos, que ajudam você a tomar decisões mais estratégicas e acertadas.',
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
        // bgcolor: 'grey.900',
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
          <Typography component="h2" variant="h4" gutterBottom color='primary'>
            Destaques
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.600' }}>
            Descubra por que nossa solução se destaca: monitoramento preciso de vendas, visualização de métricas, 
            interface amigável, relatórios e suporte confiável.
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
                  color: 'primary',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  // backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.600' }}>
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
