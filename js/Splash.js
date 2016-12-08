import React, {Component} from "react";
import {StyleSheet, View, Text, Animated} from "react-native";
import {APP_MAIN_COLOR} from "./GlobalConst";

class Splash extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fadeAnimation: new Animated.Value(0),
            fadeAnimationOther: new Animated.Value(0),
            fadeAnimationContainer: new Animated.Value(1),
        };
    }

    componentDidMount() {
        this._inAnimation(() => {
            setTimeout(() => {
                this._outAnimation(() => this.props.onAnimationEnd && this.props.onAnimationEnd());
            });
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>Welcome!</Text>
            </View>
        );
    }

    _inAnimation(callback) {
        Animated.sequence([
            Animated.timing(this.state.fadeAnimation, {
                toValue: 1,
                duration: 1000,
            }),
            Animated.timing(this.state.fadeAnimationOther, {
                toValue: 1,
                duration: 500,
            }),
        ]).start(() => callback && callback());
    }

    _outAnimation(callback) {
        Animated.sequence([
            Animated.timing(this.state.fadeAnimation, {
                toValue: 0,
                duration: 1000,
            }),
            Animated.timing(this.state.fadeAnimationOther, {
                toValue: 0,
                duration: 500,
            }),
            Animated.timing(this.state.fadeAnimationContainer, {
                toValue: 0,
                duration: 500,
            }),
        ]).start(() => callback && callback());
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: APP_MAIN_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        color: 'black'
    }
});

export default Splash;