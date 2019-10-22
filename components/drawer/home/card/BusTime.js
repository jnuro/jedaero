import React, { useState, useEffect, Fragment } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Picker from 'react-native-picker-select';
import BusTb from '../../../../jsons/busschedule.json';
import BusA from '../../../../tool/busA';
import BusB from '../../../../tool/busB';
import BusHoly from '../../../../jsons/bus_holy.json';
import BusRoute from '../../../../jsons/bus_stop.json';
import { mainScreen } from '../../../styles/busStyle.js';
import TodayCard from '../component/TodayCard.js';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'


const BusFragment = ({title, description, routeFunction, selectedIndex}) => {
    const [time, setTime] = useState(routeFunction(BusTb.timeTable[title], selectedIndex, BusHoly));

    const refreshItem = () => {
        console.log(selectedIndex)
        setTime(routeFunction(BusTb.timeTable[title], selectedIndex, BusHoly));
    }
    return (
        <Fragment>
            <View style={mainScreen.blockViewContainerMain}>
                <Text style={mainScreen.blockTitle}>{title}</Text>
                <Text style={mainScreen.busWay}>{description}</Text>
            </View>
            <View style={mainScreen.blockViewContainerSub}>
                <Text style={mainScreen.blockText}>{time}</Text>
            </View>
        </Fragment>
    )
}

const BusTime = ({navigation}) => {
    const data = BusRoute.routeName.A;
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        console.log(selectedIndex);
        clearInterval(setSelectedIndex.bind(null, selectedIndex));
        setInterval(setSelectedIndex.bind(null, selectedIndex), 1000);   
    }, [selectedIndex]);
    const onChangeBusRoute = (item) => {
        setSelectedIndex(item);
    }
    const BusPicker = () => (
        <Picker
            placeholder={{}}
            items={data}
            value={selectedIndex}
            onValueChange={onChangeBusRoute}
            style={pickerSelectStyles}
            // style={{width: 50, height: 50, backgroundColor: colorPalette.backgroundColor}}
            useNativeAndroidPickerStyle={false}
            Icon={() => (<Icon name="md-arrow-dropdown" size={24} color="#ffffff" />)}
        />
    )
    
    const onPressContainer = () => {navigation.navigate('BusSchedule')}
    return (
        <TodayCard name="버스 시간" headerRight={<BusPicker />} containerStyle={{flexDirection: 'row'}} onPressContainer={onPressContainer}>
        {/* A버스 시간 안내 */}
            <BusFragment title="A" description="반시계 반향" routeFunction={BusA} selectedIndex={selectedIndex} />
        {/* B버스 시간 안내 */}    
            <BusFragment title="B" description="시계 반향" routeFunction={BusB} selectedIndex={selectedIndex} /> 
        </TodayCard>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 14,
      paddingVertical: 4,
      paddingHorizontal: 10,
      color: '#ffffff',
      paddingRight: 24, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 14,
      paddingHorizontal: 12,
      color: '#ffffff',
      paddingRight: 24, // to ensure the text is never behind the icon
    },
    inputAndroidContainer: {
        height: null,
    },
    // headlessAndroidPicker: {
    //     height: null,
    // },
    headlessAndroidContainer: {
        height: '100%'
    },
    iconContainer: {
        top: Platform.select({ios: 0, android: 10})
    },
});

export default withNavigationFocus(BusTime);