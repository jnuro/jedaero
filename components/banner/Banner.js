import React from 'react'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
function Banner() {
    return (
        <BannerAd
            unitId={TestIds.BANNER}
            // unitId={Platform.select({
            //     ios: 'ca-app-pub-7776918773440986/4656433644',
            //     android: 'ca-app-pub-7776918773440986/5014406730'
            // })}
            size={BannerAdSize.SMART_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => {
                console.log('Advert loaded');
            }}
            onAdFailedToLoad={(error) => {
                console.error('Advert failed to load: ', error);
            }}
        />
    )
}

export default Banner;