import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import OrderCard from './../components/OrderCard';
import orderHistory from './../constants/orderHistory';
import colors from '../styles/colors';


class OrderHistory extends React.Component {
    static navigationOptions = {
        title: 'Order History',
        header: {
            visible: true
        },
    };

    render() {
        return (
            <ScrollView style={styles.orderHistoryPageWrapper}>
                <Text style={styles.orderHeader}>Order History</Text>
                <Text style={styles.orderSubHeader}>List of your previous orders</Text>
                {
                    orderHistory.map((order,index) => {
                        return <OrderCard orderDetail={order} key={`order-card-${index}`} />
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    orderHistoryPageWrapper: {
        padding: 20,
        backgroundColor: 'white',
        paddingBottom: 20,
        backgroundColor:'#fff'
    },
    orderHeader: {
        fontSize: 24,
        fontFamily: 'Lobster-Regular',
        color: colors.primary
    },
    orderSubHeader: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        color: colors.subHeading,
        marginBottom: 10
    }
})

export default OrderHistory;

