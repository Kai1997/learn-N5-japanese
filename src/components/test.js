import React, { Component } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import CardFlip from 'react-native-card-flip';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import vocn5 from '../data/vocN5/voc-n5.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcards: vocn5[0].lession1,
            flipped: vocn5[0].lession1.map(() => false),
            flipping: false
        };

        this.flipValue = new Animated.Value(0);

        this.frontAnimatedStyle = {
            transform: [{
                rotateY: this.flipValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg']
                })
            }]
        };

        this.backAnimatedStyle = {
            transform: [{
                rotateY: this.flipValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['180deg', '360deg']
                })
            }]
        };

        let xOffset = new Animated.Value(0);
        this.onScroll = Animated.event(
            [{ nativeEvent: { contentOffset: { x: xOffset } } }],
            { useNativeDriver: false }
        );

        this.transitionAnimations = this.state.flashcards.map((card, index) => ({
            transform: [
                { perspective: 800 },
                {
                    scale: xOffset.interpolate({
                        inputRange: [
                            (index - 1) * SCREEN_WIDTH,
                            index * SCREEN_WIDTH,
                            (index + 1) * SCREEN_WIDTH
                        ],
                        outputRange: [0.25, 1, 0.25]
                    })
                },
                {
                    rotateX: xOffset.interpolate({
                        inputRange: [
                            (index - 1) * SCREEN_WIDTH,
                            index * SCREEN_WIDTH,
                            (index + 1) * SCREEN_WIDTH
                        ],
                        outputRange: ['45deg', '0deg', '45deg']
                    })
                },
                {
                    rotateY: xOffset.interpolate({
                        inputRange: [
                            (index - 1) * SCREEN_WIDTH,
                            index * SCREEN_WIDTH,
                            (index + 1) * SCREEN_WIDTH
                        ],
                        outputRange: ['-45deg', '0deg', '45deg']
                    })
                }
            ]
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.ScrollView
                    scrollEnabled={!this.state.flipping}
                    scrollEventThrottle={16}
                    onScroll={this.onScroll}
                    horizontal
                    pagingEnabled
                    style={styles.scrollView}>
                    {this.state.flashcards.map(this.renderCard)}
                </Animated.ScrollView>
            </View>
        );
    }

    renderCard = (question, index) => {
        const isFlipped = this.state.flipped[index];

        return (
            <TouchableWithoutFeedback key={index} onPress={() => this.flipCard(index)}>
                <View>

                    <View style={styles.scrollPage}>
                        <View>
                            {(this.state.flipping || !isFlipped) && <Animated.View
                                style={[
                                    this.state.flipping ? this.frontAnimatedStyle : this.transitionAnimations[index],
                                    styles.screen
                                ]}
                            >
                                <Text style={styles.text}>{this.state.flashcards[index].text}</Text>
                            </Animated.View>}

                            {(this.state.flipping || isFlipped) && <Animated.View
                                style={[
                                    styles.screen,
                                    this.state.flipping ? this.backAnimatedStyle : this.transitionAnimations[index],
                                    this.state.flipping && styles.back
                                ]}
                            >
                                <Text style={styles.text}>{this.state.flashcards[index].translate}</Text>
                            </Animated.View>}
                        </View>
                    </View>

                    <View style={styles.iconStyle}>
                        <TouchableOpacity>
                            <EvilIcons name="check" size={80} color={'#5CAF25'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialIcons name="cancel" size={70} color={'#b71621'} />
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableWithoutFeedback>
        );
    }

    flipCard = index => {
        if (this.state.flipping) return;

        let isFlipped = this.state.flipped[index];
        let flipped = [...this.state.flipped];
        flipped[index] = !isFlipped;

        this.setState({
            flipping: true,
            flipped
        });

        this.flipValue.setValue(isFlipped ? 1 : 0);
        Animated.spring(this.flipValue, {
            toValue: isFlipped ? 0 : 1,
            friction: 8,
            tension: 10
        }).start(() => {
            this.setState({ flipping: false });
        });
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    scrollView: {
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    scrollPage: {
        width: SCREEN_WIDTH,
        padding: 20
    },
    screen: {
        height: SCREEN_HEIGHT *3/4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: 'white',
        width: SCREEN_WIDTH - 20 * 2,
        backfaceVisibility: 'hidden'
    },
    text: {
        fontSize: 45,
        fontWeight: 'bold'
    },
    iconStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    back: {
        position: 'absolute',
        top: 0,
        backfaceVisibility: 'hidden'
    }
})