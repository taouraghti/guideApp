import React from 'react'
import { View, Text, FlatList, Dimensions} from 'react-native'
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem'


const CarsList = (props) => {
    let flatListRef = null;
    function scrollTo(i){
        flatListRef.scrollToIndex({animated: true, index: i});
    }

    
    return (
        <View style={styles.container}>
            <FlatList 
                ref={(ref) => flatListRef = ref}
                data={cars}
                renderItem={({item}) => <CarItem car={item} scrollTo={scrollTo} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />

        </View>
    )
}

export default CarsList
