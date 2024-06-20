import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native"
import SliderComponent from "../components/Slider";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SliderComponent></SliderComponent>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dcdcdc",
    }
});

export default Home;