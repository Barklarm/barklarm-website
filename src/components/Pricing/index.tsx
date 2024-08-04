import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

const PricingCard = ({name, price, features, button}: any) => {
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
          <a className={"button button--primary"} href={button.url}>{button.text}</a>
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
          <PricingCard name="Free"  price="€0/mo" features={["Infinite Build systems", "Infinite Metrics Systems", "Infinite All"]} button={{text:"Support us", url:"https://github.com/sponsors/alvarolorentedev"}}/>
        </Stack>
      </div>
    </div>
  );
};

export default Pricing;
