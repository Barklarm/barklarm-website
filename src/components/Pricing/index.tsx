import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

const PricingCard = ({name, price, features, button, level}: any) => {
  return (
    <Card sx={{width:"300px"}}>
      <CardHeader title={name} align="center"/>
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="h4" align="center">
          {price}
        </Typography>
        <div>
          {features.map((feature:string) => (<Typography align="center">{feature}</Typography>))}
        </div>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Box 
          display="flex" 
          width={300} 
          alignItems="center"
          justifyContent="center"
        >
          <a className={"button button--primary"} href={`#tally-open=mOPVGp&tally-layout=modal&tally-width=300&tally-hide-title=1&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=0&level=${button.level}`}>{button.text}</a>
        </Box>
      </CardActions>
    </Card>
  );
};

const Pricing: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h2 className={styles.Tagline}>Pricing</h2>
          <Spacer height={20} />
        </div>
        <Stack direction={matches? "row": "column"} spacing={2} alignItems="center">
          <PricingCard name="Free"  price="€0/mo" features={["1 social", "1 podcast", "Synchronize every hour"]} button={{text:"Join Waitng List", level:"free"}}/>
          <PricingCard name="Paid"  price="€10/mo" features={["unlimited social", "unlimited podcast", "Synchronize every 30 minutes" ]} button={{text:"Contact Us", level:"paid"}} />
          <PricingCard name="Enterprise"  price="€20/mo" features={["unlimited social", "unlimited podcast", "Synchronize every 5 minutes"]} button={{text:"Contact Us", level:"enterprise"}} />
        </Stack>
      </div>
    </div>
  );
};

export default Pricing;
