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

        useEffect(() => {
            async function loadAd(){
                await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
                interstitialAd();

            }
            loadAd();
        }, []);

        async function interstitialAd(){
            await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
            await AdMobInterstitial.showAdAsync();
        }
      
    const {name, tagline, taglineCTA, image} = props.car;
    return (
            <View style={styles.carContainer}>
                <ImageBackground
                    source={image}
                    style={styles.image}
                />
                <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <StyledButton 
                        type="primary"
                        content="Costum Order"
                        onPress={() => {
                        console.warn("costum order was pressed"); 
                        }}
                    />
                    
                    <StyledButton 
                        type="secondary"
                        content="Existing Inventory"
                        onPress={() => {
                        console.warn("existing was pressed"); 
                        }}
                    />
                    <AdMobBanner
                        bannerSize="fullBanner"
                        adUnitID="ca-app-pub-3940256099942544/6300978111"
                    />
                </View>
            </View>
    )
}

export default CarItem
  