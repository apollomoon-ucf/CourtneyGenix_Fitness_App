import React from "react";
import {Text} from "react-native-paper";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import TopBar from "../components/TopBar";
import {StyleSheet, View} from "react-native";

const CalendarScreen = () => {
    const auth = getAuth();
    let email;

    onAuthStateChanged(auth, (user) => {
        if (user != null){
            email = user.email;
        }
        else {
            email = "";
        }
    });

    return (
        <View>
            <TopBar title="Calendar"/>
            <Text>Calendar</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CalendarScreen;
