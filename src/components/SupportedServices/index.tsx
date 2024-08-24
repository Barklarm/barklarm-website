import Slider from 'react-infinite-logo-slider'
import Spacer from '../Spacer';
import styles from './styles.module.css';
import datadogUrl from '@site/static/img/datadog.webp';
import githubActionsgUrl from '@site/static/img/github_actions.png';
import sentryUrl from '@site/static/img/sentry.png';
import newRelicUrl from '@site/static/img/new_relic.webp';
import azureDevopscUrl from '@site/static/img/azure_devops.png';


export const SupportedServices = () => {
    
    return (
        <div className={styles.Container} >
            <div className={styles.Content} >
                <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
                <h2 className={styles.Tagline}>We Support</h2>
                <Spacer height={20} />
                <div className={styles.Slider} >
                    <Slider
                        width="250px"
                        duration={25}
                        pauseOnHover={true}
                        blurBorders={false}
                    >
                        <Slider.Slide>
                            <img src={datadogUrl} style={{padding:"25px 0px"}}/>
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src={githubActionsgUrl} style={{padding:"25px 0px"}} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src={sentryUrl} style={{padding:"25px 0px"}} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src={newRelicUrl} style={{padding:"10px"}} />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src={azureDevopscUrl} style={{padding:"10px"}} />
                        </Slider.Slide>
                    </Slider>
                </div>
                </div>
            </div>
        </div>
    )
}              
                    

export default SupportedServices;