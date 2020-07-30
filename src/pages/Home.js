import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

import ImageCardCarousel from './../components/ImageCardCarousel';
import SmallCardCarousel from './../components/SmallCardCarousel';
import RestaurantDetail from './../components/RestaurantDetail';
import SearchBar from './../components/SearchBar';
import OfferCardCarousel from './../components/OfferCardCarousel';
import CuisineCarousel from './../components/CuisineCarousel';

import imageCarousel from './../constants/imageCarousel'
import details from './../constants/restrauntDetailList';

class Home extends React.Component {

    state = {
        firstQuery: ''
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={styles.homeWrapper}>
                <SearchBar />
                <OfferCardCarousel />
                <CuisineCarousel />
                <View>
                    <Text style={styles.stdHeading}>Restraunts Near You</Text>
                    {
                        details.map((detail, index) => {
                            return (
                                <RestaurantDetail key={`res-details-${index}`}
                                    restrauntData={detail}
                                    currentCartState={cart => console.log("Blake--", cart)}
                                    selectedRes={(routeName) => navigate(routeName)} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
    }

};

const styles = StyleSheet.create({
    homeWrapper: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1
    },
    stdHeading: {
        fontSize: 24,
        fontFamily: 'Lobster-Regular',
        marginBottom: 5
    }
})

export default Home;

