import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as theme from '../common/utilities/themetest';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  flex: {
    flex: 0,
    zIndex: 1000,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,

  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // height: 10

  },
  content: {
    // backgroundColor: theme.colors.active,
    // borderTopLeftRadius: theme.sizes.border,
    // borderTopRightRadius: theme.sizes.border,
  },
  content1: {
    marginTop:10,
    marginRight:10,
    marginLeft:10,

  },
  content2: {
    margin: 5,
  },
  contentHeader: {
    // backgroundColor: 'transparent',
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 2,
  },
  contentLession: {
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderRadius: 20

  },
  contentLession2: {
    padding: theme.sizes.padding / 2,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    marginLeft: 40

  },
  avatar: {
    position: 'absolute',
    top: -theme.sizes.margin,
    right: theme.sizes.margin,
    width: theme.sizes.padding * 2,
    height: theme.sizes.padding * 2,
    borderRadius: theme.sizes.padding,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  dotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 36,
    right: 0,
    left: 0
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold'
  },
  title2: {
    fontSize: theme.sizes.font,
    fontWeight: 'bold'
  },
  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.caption
  },
  headerStyle: {
		backgroundColor: "#df3237",
		elevation: 0,
		shadowOpacity: 0
	},
	headerTitleStyle: {
		color: "black",
		alignSelf: 'center',
		textAlign: 'center',
	}
});

class Article2 extends Component {
  constructor() {
    super()
    this.state = {
      toggleView: false,
      toggle: false,
      id: null
    }
  }
  scrollX = new Animated.Value(0);

  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
     let title = navigation.getParam('article');
     console.log(title)
    // return {
      // header: () => (
      //   <View style={[styles.flex, styles.row, styles.header]}>
      //     {/* <TouchableOpacity style={styles.back} onPress={() => console.log("ádasdasd")}>
      //       <FontAwesome name="chevron-left" color={theme.colors.white} size={theme.sizes.font * 1} />
      //     </TouchableOpacity>
      //     <TouchableOpacity>
      //       <MaterialIcons name="more-horiz" color={theme.colors.white} size={theme.sizes.font * 1.5} />
      //     </TouchableOpacity> */}
      //   </View>
      // ),
      return {
        title: title.title,
			headerTintColor: "black",
       headerTransparent: true,
       headerStyle: styles.headerStyle,
			headerTitleStyle: styles.headerTitleStyle,
		};
     
    // }
  }
  onToggleView = () => {
    this.setState({
      toggleView: !this.state.toggleView
    })
  }
  renderDots = () => {
    const { navigation } = this.props;
    const article = navigation.getParam('article');
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
      <View style={[styles.flex, styles.row, styles.dotsContainer]}>
        {article.images.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          )
        })}
      </View>
    )
  }

  renderRatings = (rating) => {
    const stars = new Array(5).fill(0);
    return (
      stars.map((_, index) => {
        const activeStar = Math.floor(rating) >= (index + 1);
        return (
          <FontAwesome
            name="star"
            key={`star-${index}`}
            size={theme.sizes.font}
            color={theme.colors[activeStar ? 'active' : 'gray']}
            style={{ marginRight: 4 }}
          />
        )
      })
    )
  }
  onToggle = (id) => {
    this.setState({
      toggle: false,
    }, () => {
      this.setState({
        toggle: !this.state.toggle,
        id: id
      })
    })
  }
  render() {
    const { navigation } = this.props;
    const { toggleView, toggle, id } = this.state;
    const article = navigation.getParam('article');
    return (
      <ScrollView>
        <View style={styles.flex}>
          <View style={[styles.flex]}>
            <ScrollView
              horizontal
              pagingEnabled
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
            >
              {
                article.images.map((img, index) =>
                  <Image
                    key={`${index}-${img}`}
                    source={img.uri}
                    resizeMode='cover'
                    style={{ width, height: width / 2 }}
                  />
                )
              }
            </ScrollView>
            {this.renderDots()}
          </View>
          <View style={[styles.flex, styles.content]}>
            <View style={[styles.flex, styles.contentHeader]}>
              {/* <Image style={[styles.avatar, styles.shadow]} source={{ uri: article.user.avatar }} /> */}
              <Text style={styles.title}>{article.title}</Text>
              {/* <View style={[
                styles.row,
                { alignItems: 'center', marginVertical: theme.sizes.margin / 2 }
              ]}>
                {this.renderRatings(article.rating)}
                <Text style={{ color: theme.colors.active }}>
                  {article.rating}
                </Text>
                <Text style={{ marginLeft: 8, color: theme.colors.caption }}>
                  ({article.reviews} reviews)
              </Text>
              </View> */}
              <TouchableOpacity onPress={this.onToggleView}>
                {toggleView ? (<Text style={styles.description}>
                  {article.description}
                </Text>) : (<Text style={styles.description}>
                  {article.description.split('').slice(0, 180)}...
                  <Text style={{ color: theme.colors.active }}> Read more</Text>
                </Text>)}

              </TouchableOpacity>
            </View>
          </View>
          {(article.id == 1) ? (article.data.map((value, index) => <View key={index}>
            <TouchableOpacity  onPress={() => this.onToggle(value.id)}>
              <View style={[styles.flex, styles.content1]}>
                <View style={[styles.flex, styles.contentLession]}>
                  <Text style={styles.title}>{value.title}</Text>

                </View>
              </View>
            </TouchableOpacity>
            {(toggle && id == value.id) ? ((value.lession.map((valueI, indexI) =>
              <TouchableOpacity key={indexI} onPress={() => this.props.navigation.navigate('Lession', { lession: valueI.data })}>
                <View style={[styles.flex, styles.content2]}>
                  <View style={[styles.flex, styles.contentLession2]}>
                    <Text style={styles.title2}>{valueI.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))) : (<Text></Text>)}
          </View>
          )) : (article.data.map((value, index) =>
            <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('Lession', { lession: value.lession })}>
              <View style={[styles.flex, styles.content1]}>
                <View style={[styles.flex, styles.contentLession]}>
                  <Text style={styles.title}>{value.title}</Text>
                  <Text style={styles.description}>
                    {value.content.split('').slice(0, 20)}...
                </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
          }
        </View>
      </ScrollView>
    )
  }
}

export default Article2;