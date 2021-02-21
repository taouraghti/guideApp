import React, { useEffect } from 'react';
import {View, Text, ImageBackground} from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'
import {AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync} from 'expo-ads-admob'



 function CarItem(props) {
    const {title, text, image, btn, ads, next} = props.car;
        
    /*setTimeout(
        () => { loadAd() },
        10000
      );*/
            /*useEffect(() => {
                if(ads == true)
                {
                    loadAd();
                }
           
             }, []);*/
        
        async function loadAd(){
            await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
            await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
            interstitialAd();
        }
        async function interstitialAd(){
            await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
            await AdMobInterstitial.showAdAsync();
            await AdMobRewarded.requestAdAsync();
            await AdMobRewarded.showAdAsync();
        }
    
    return (
            <View style={styles.carContainer}>
                <ImageBackground
                    source={image}
                    style={styles.image}
                />
                <View style={styles.titles}>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <View style={styles.texts}>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style={styles.footerContainer}>
                    {
                        btn != 'none' ? <StyledButton 
                                            type="primary"
                                            content={btn}
                                            onPress={() => props.scrollTo(next) }
                                        />
                        : null
                    }
            
                    {
                        ads == true ? <AdMobBanner
                                            bannerSize="fullBanner"
                                            adUnitID="ca-app-pub-3940256099942544/6300978111"
                                        /> 
                        : null
                    }
                </View>
            </View>
    )
}

export default CarItem
  