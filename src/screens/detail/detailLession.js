import React from 'react';
import { StyleSheet, Button, TouchableOpacity, SafeAreaView, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
// import ParsedText from 'react-native-parsed-text';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as theme from '../../common/utilities/themetest';
import { ButtonZ, ButtonContainer } from '../../components/ButtonQuiz'
import { Alert } from '../../components/Alert'
// import { Icon } from "react-native-elements";
import * as Speech from 'expo-speech';
import HTMLView from 'react-native-htmlview';
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
import Icon from 'react-native-vector-icons/FontAwesome';
import { toRomaji } from 'wanakana';
export default class Lession extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: () => (
        <View style={[styles.flex, styles.row, styles.header]}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <FontAwesome name="chevron-left" color={theme.colors.white} size={theme.sizes.font * 1} />
          </TouchableOpacity>

        </View>
      ),
      headerTransparent: true,
    }
  }
  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      lession: [],
      answered: false,
      answerCorrect: false
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-30deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          if (this.state.currentIndex + 1 < this.state.lession.length) {
            this.setState({ currentIndex: this.state.currentIndex + 1, answered: false }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          }
        }
        else if (gestureState.dx < -120) {
          if (this.state.currentIndex + 1 < this.state.lession.length && this.state.currentIndex > 0) {
            this.setState({ currentIndex: this.state.currentIndex - 1, answered: false }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          }
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }
  componentDidMount() {
    let lession = this.props.navigation.getParam('lession');
    this.setState({
      lession
    })
  }
  nextImage = () => {
    if (this.state.currentIndex + 1 < this.state.lession.length) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        answered: false
      })
    }

  }
  firstImage = () => {
    if (this.state.currentIndex >= 1) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        answered: false
      })
    }
  }
  onAnswer = (correct) => {
    console.log(correct)
    if (correct) {
      this.setState({
        answered: true,
        answerCorrect: true
      })
    } else {
      this.setState({
        answered: true,
        answerCorrect: false
      })
    }
  }

  onSpeech(thingToSay) {
    console.log(typeof thingToSay)
    Speech.speak(thingToSay, {
      language: 'ja',
      pitch: 1,
      rate: 1
    });
  }
  renderData = () => {
    return this.state.lession.map((item, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute' }]}>
            <Text style={{ color: 'red', textAlign: 'center', padding: 10, backgroundColor: 'white', borderRadius: 20, position: 'absolute', top: 0, left: 40, zIndex: 1000 }}>{(this.state.currentIndex + 1)}/{(this.state.lession.length)}</Text>
            <TouchableOpacity style={{ textAlign: 'center', padding: 20, backgroundColor: 'white', borderRadius: 40, position: 'absolute', top:-10, right: 40, zIndex: 1000 }} onPress={() => this.props.navigation.goBack()}>
              <Icon name='remove' color ="red" size={24} />

            </TouchableOpacity>
            <Animated.View style={{ opacity: this.likeOpacity, position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'purple', fontSize: 32, fontWeight: '800', padding: 10 }}>Cố lên nào</Text>
            </Animated.View>
            <Animated.View style={{ opacity: this.dislikeOpacity, position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'purple', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>Cố lên nào</Text>
            </Animated.View>
            <View style={styles.card}>
              {/* <View style={styles.test}> */}
              {(item.uri) ? (<Image style={styles.imageStyle} resizeMode="contain"
                source={item.uri}>
              </Image>) : (<Text></Text>)}
              {(item.quit) ? (<Button
                onPress={() => this.props.navigation.goBack()}
                title="Hoàn tất"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />) : (<Text></Text>)}
              {(item.quiz) ? (<SafeAreaView style={styles.safearea}>
                <View>
                  <Text style={styles.text}>{item.question.question}</Text>

                  <ButtonContainer>
                    {item.question.answers.map((answer, key) => (
                      <ButtonZ
                        key={answer.id}
                        text={answer.text}
                        onPress={() => this.onAnswer(answer.correct)}
                      />
                    ))}
                  </ButtonContainer>
                </View>
              </SafeAreaView>) : (<Text></Text>)}

              <HTMLView
                value={item.text}
              />


              {(item.translate) ? (<Text style={{ color: "#DCE0E9" }}>{item.translate}</Text>) : (<Text></Text>)}
              
              {(item.translate) ? (<Text style={{ color: "#DCE0E9", paddingTop:  5 }}>{toRomaji(item.text)}</Text>) : (<Text></Text>)}
              {(item.translate || item.audio) ? (<TouchableOpacity
                style={styles.button}
                onPress={() => this.onSpeech(`${item.text}`)}
              >
                <Icon name='volume-up' size={24} />
              </TouchableOpacity>) : (<Text></Text>)}
            </View>
            <Alert
              correct={this.state.answerCorrect}
              visible={this.state.answered}
            />
          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View

            key={item.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
            </Animated.View>
            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
            </Animated.View>
            {(this.state.currentIndex + 1 >= this.state.lession.length) ? (<View style={styles.card}><Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text></View>) : (<Text></Text>)}
            <View style={styles.card}>
              <HTMLView
                value={item.text}
              />
            </View>
          </Animated.View>
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }}>
          <Text style={{ color: 'red', textAlign: 'center' }}>hello</Text>

        </View>
        <View style={{ flex: 1 }}>
          {this.renderData()}
          {/* <Text style={{ color: 'red', textAlign: 'center', alignSelf: 'center', padding: 10, backgroundColor: 'white', borderRadius: 5 }}>{(this.state.currentIndex + 1)}/{(this.state.lession.length)}</Text> */}
        </View>
        <View style={{ height: 60 }}>
          <View style={styles.inonerow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.firstImage()}
            >
              <Image style={styles.imageiconarrow} resizeMode="contain"
                source={require('../../assert/imgs/left.png')}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.nextImage()}
            >
              <Image style={styles.imageiconarrow} resizeMode="contain"
                source={require('../../assert/imgs/right.png')}>
              </Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 60 }}>
          {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={{ color: 'purple', fontWeight: '800', fontSize: 18, padding: 10, textAlign: 'center', }}>Trở về</Text></TouchableOpacity> */}

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inonerow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    // backgroundColor: "white",
    // padding: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    justifyContent: 'center',
    borderRadius: 20,

  },
  imageiconarrow: {
    height: SCREEN_WIDTH / 7,
    width: SCREEN_WIDTH / 7,
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 15,
    fontSize: 32,
    color: theme.colors.caption
  },
  imageStyle: {
    width: SCREEN_WIDTH * 3 / 4,
    height: SCREEN_WIDTH * 3 / 4,
    marginBottom: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  view: {
    textAlign: 'center',
    padding: 10
  },
  text: {
    color: 'black',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  audio: {
    height: 30,
    marginTop: 20
  }
});
