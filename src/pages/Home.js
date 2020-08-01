import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

import ImageCardCarousel from './../components/ImageCardCarousel';
import SmallCardCarousel from './../components/SmallCardCarousel';
import RestaurantDetail from './../components/RestaurantDetail';
import SearchBar from './../components/SearchBar';
import OfferCardCarousel from './../components/OfferCardCarousel';
import ProductCarousel from '../components/ProductCarousel';

import imageCarousel from './../constants/imageCarousel'
import dispensaries from '../constants/dispensariesList';

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
                {/* TO DO - MAKE ICONS FOR PRODUCT CAROUSEL */}
                <ProductCarousel />
                <View>
                    <Text style={styles.stdHeading}>Dispensaries Near You</Text>
                    {/* TO DO - MAKE LOGIC TO GET USER LOCATION AND GET THE NEAREST DISPESARIES */}
                    {
                        dispensaries.map((detail, index) => {
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

