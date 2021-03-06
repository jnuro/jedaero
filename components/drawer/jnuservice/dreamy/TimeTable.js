import React, {useEffect, useState} from 'react'
import { FlatList, Text, StyleSheet, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { StackActions, NavigationActions } from 'react-navigation';
import { getTimeTable } from '../../../../service/jedaeroService';
import { Overlay, normalize } from 'react-native-elements';
import { Calendar, CalendarList, Agenda , LocaleConfig} from 'react-native-calendars';
import colorPalette from '../../../styles/colorPalette';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


LocaleConfig.locales['kr'] = {
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: '오늘'
}

LocaleConfig.defaultLocale = 'kr'

const week = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const TimeTable = ({navigation}) => {
    const [ timeTable, setTimeTable ] = useState(null);
    const date = new Date();
    const [ day, setDay ] = useState({
        year: date.getFullYear(),
        month: date.getMonth()+1,
        day: date.getDate(),
    });
    const [ isOverlayVisible, setOverlayVisible ] = useState(false);

    useEffect(() => {
        (async function() {
            setTimeTable(await getTimeTable(day.year,day.month,day.day));
        })();
    }, [day])
    const scheduleHeader = () => (
        <View style={styles.scheduleHeader}>
            <Text style={styles.rowHead} />
            { week.map(date => {
                let dow;
                switch(date) {
                    case "mon": dow = "월"; break;
                    case "tue": dow = "화"; break;
                    case "wed": dow = "수"; break;
                    case "thu": dow = "목"; break;
                    case "fri": dow = "금"; break;
                    case "sat": dow = "토"; break;
                }
            return (
            <View key={dow} style={styles.scheduleHeaderView}>
                <Text style={styles.scheduleHeaderText}>{timeTable.day[date]}</Text>
                <Text style={styles.scheduleHeaderText}>({dow})</Text>
            </View>)
            })}
        </View>
    )
    const scheduleRow = ({item, index}) => {
        
        return (
            <View style={styles.scheduleRow}>
                <Text style={{...styles.rowHead, borderTopWidth: 0.5, borderTopColor: colorPalette.cardBorderColor}}>{item.period}</Text>
                { week.map((date, idx) => {
                    let prevLectureName = index > 0 ? timeTable.schedule[index === 10 ? index - 2 : index - 1][date].name : " ";
                    let currLectureName = item[date].name;
                    let isFirstLecture = prevLectureName === " " && currLectureName !== " " || currLectureName !== " " && prevLectureName !== currLectureName;
                    let isLectures = !isFirstLecture && currLectureName !== " " && currLectureName === prevLectureName;
                    let displayName = isFirstLecture || index === 10 ? currLectureName : "";
                    let displayPlace = isFirstLecture || index === 10 ? item[date].room.replace(/[\[\]\s]/g, "") : "";
                    let isClass = isFirstLecture || isLectures;
                    return (
                        <TouchableOpacity key={idx} style={{
                            ...styles.scheduleItem, 
                            backgroundColor: isClass ? /^\(휴\)/.exec(currLectureName) ? colorPalette.subTextColor : colorPalette.mainColor: colorPalette.cardBackgroundColor ,
                            borderTopWidth: isLectures ? 0 : 0.5,
                            borderTopColor: colorPalette.cardBorderColor, 
                        }}>
                            <Text numberOfLines={2} style={{
                                color: colorPalette.cardBackgroundColor,
                                ...styles.scheduleItemText
                            }}>
                                {displayName}
                            </Text>
                            <Text numberOfLines={2} style={{
                                color: colorPalette.cardBackgroundColor,
                                ...styles.scheduleRoomText
                            }}>
                                {displayPlace}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }

    const keyExtractor = (item, index) => item.time + item.room;

    return !timeTable ? (
        <View style={{alignItems: 'center', paddingTop:20, flex:1}}>
            <ActivityIndicator size='large' color={colorPalette.mainColor}/>
        </View>
    ) : (
        timeTable === {} ? (
            <View><Text>시간표가 없어유.</Text></View>
        ) : 
        (
        <React.Fragment>
            <TouchableOpacity  style={styles.selectCalendar} onPress={() => setOverlayVisible(true)}>
                <Icon style={{marginRight: 10}}name="calendar-month" size={24} color={colorPalette.mainColor} />
                <Text style={styles.selectCalendarText}>{day.year}년 {day.month}월 {day.day}일</Text>
            </TouchableOpacity>
            <FlatList 
                data={timeTable.schedule}
                ListHeaderComponent={scheduleHeader}
                renderItem={scheduleRow}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.scheduleContainer}
            />
            <Overlay isVisible={isOverlayVisible} 
                onBackdropPress={() => setOverlayVisible(false)}
                width="auto"
                height="auto"
                overlayStyle={styles.overlay}
            >
                <Calendar
                    horizontal={true}
                    onDayPress={day => {
                        setDay(day);
                        setOverlayVisible(false);
                    }}
                    monthFormat="yyyy MMMM"
                    theme={{
                        todayTextColor: colorPalette.smartCheckColor,
                        selectedDayTextColor: colorPalette.backgroundColor,
                        selectedDayBackgroundColor: colorPalette.mainColor,
                        selectedDotColor: colorPalette.mainColor,
                        arrowColor: colorPalette.mainColor,
                    }}
                    markingType={'period'}
                />
            </Overlay>
        </React.Fragment>
    ))
}
TimeTable.navigationOptions = {
    title: '시간표'
}

const styles = StyleSheet.create({
    overlay: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectCalendar: {
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: colorPalette.cardBorderColor,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 8,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        backgroundColor: colorPalette.cardBackgroundColor,
    },
    selectCalendarText: {
        fontSize: normalize(12),
        fontWeight: 'bold',
    },
    scheduleContainer: {
        backgroundColor: colorPalette.cardBackgroundColor,
        borderWidth: 0.5,
        borderColor: colorPalette.cardBorderColor,
        overflow: 'hidden',
        marginHorizontal: 10,
        borderRadius: 8,
        // marginBottom: 56,
    },
    scheduleHeader: {
        flexDirection: 'row',
    },
    scheduleHeaderView: {
        flex: 1,
        paddingVertical: 4,
        borderLeftColor: colorPalette.cardBorderColor,
        borderLeftWidth: 0.5
    },
    scheduleHeaderText: {
        flex: 1,
        fontSize: 9,
        textAlign: 'center'
    },
    scheduleRow: {
        flexDirection: 'row',
        // borderBottomWidth: 0.5,
        // borderBottomColor: colorPalette.cardBorderColor,
    },
    rowHead: {
        textAlign:'right',
        paddingRight: 8,
        flexWrap: 'wrap',
        fontSize: 9,
        flexBasis: 24,
    },
    scheduleItem: {
        flex: 1,
        padding: 4,
        height: 54,
        borderLeftColor: colorPalette.cardBorderColor,
        borderLeftWidth: 0.5
    },
    scheduleItemText: {
        // flexWrap: "wrap",
        fontSize: 10,
        fontWeight: 'bold',
    },
    scheduleRoomText: {
        // flexWrap: "wrap",
        fontSize: 8,
    }
})
export default TimeTable;