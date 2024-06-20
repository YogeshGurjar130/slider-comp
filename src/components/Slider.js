import React from 'react';
import { Button, Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width + scale(9)
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const SliderComponent = () => {
    const data = [
        {
            title: "LASER HAIR REDUCTION",
            discount: "50% OFF",
            imgUrl: require("../assets/hair-reduction.jpg"),
        },
        {
            title: "HAIR TRANSPLANT",
            discount: "10% OFF",
            imgUrl: require("../assets/hair-transplant.jpg"),
        },
        {
            title: "FACE MASSAGE",
            discount: "25% OFF",
            imgUrl: require("../assets/face-massage.jpg"),
        },
    ];

    return (
        <View style={{ marginTop: verticalScale(50) }}>
            <Carousel
                data={data}
                renderItem={CarouselCardItem1}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                loop
            />
        </View>
    );
}

const AddToCartBtn = ({ title }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const CarouselCardItem1 = ({ item, index }) => {
    return (
        <ImageBackground borderRadius={8} source={item.imgUrl} style={styles.container} key={index} >
            <AddToCartBtn title='ADD TO CART'></AddToCartBtn>
            <Text numberOfLines={1} aut style={styles.title}>{item.title}</Text>
            <Text numberOfLines={1} style={styles.discount}>{item.discount}</Text>
            <Text numberOfLines={1} style={styles.upto}>Up To</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column-reverse",
        width: scale(ITEM_WIDTH - 65),
        height: verticalScale(350),
        alignItems: 'center'
    },
    title: {
        color: "#fff",
        fontSize: moderateScale(13),
        fontWeight: "400",
        textAlign: 'center'
    },
    discount: {
        color: "#fff",
        fontSize: moderateScale(30),
        fontWeight: "700",
        textAlign: 'center',
        marginBottom: verticalScale(8)
    },
    upto: {
        color: "#fff",
        fontSize: moderateScale(25),
        fontWeight: "400",
        textAlign: 'center',
        marginBottom: verticalScale(8)
    },
    buttonContainer: {
        height: verticalScale(40),
        width: scale(120),
        backgroundColor: "#ffe4c4",
        borderRadius: moderateScale(20),
        justifyContent: 'center',
        marginVertical: verticalScale(15)
    },
    buttonText: {
        color: "#000",
        fontSize: moderateScale(15),
        fontWeight: "600",
        textAlign: 'center'
    }
});

export default SliderComponent;