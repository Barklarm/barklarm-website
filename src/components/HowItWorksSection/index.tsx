import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PowerIcon from '@mui/icons-material/Power';
import Typography from '@mui/material/Typography';
import MapIcon from '@mui/icons-material/Map';
import LaptopIcon from '@mui/icons-material/Laptop';
import ConfigureSvg from '@site/static/img/configure.svg';
import AlertSvg from '@site/static/img/alert.svg';
import WorkSvg from '@site/static/img/work.svg';
import { useMediaQuery, useTheme } from '@mui/material';

function CustomizedTimeline() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Timeline position={matches ? "alternate": "right"}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot  color="secondary">
            <PowerIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
          <ConfigureSvg className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
            Add your observability systems to Barklam
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <MapIcon />
          </TimelineDot>
          <TimelineConnector  sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent data-aos={matches ? "fade-right": "fade-left"}>
          <WorkSvg className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
            Work as any other day.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <LaptopIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
          <AlertSvg className={styles.svg} />
          <Spacer height={20} />
          <Typography variant="h5" component="span">
            We will notify you if anything breaks
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const HowItWorksSection: React.FC = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h3 className={styles.Tagline}>How it works?</h3>
          <Spacer height={20} />
        </div>
      </div>

      <CustomizedTimeline/>
    </div>
  );
};

export default HowItWorksSection;
