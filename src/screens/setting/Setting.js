import React, { Component } from "react";
import { ListItem, Icon } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal
} from "react-native";
import * as theme from '../../common/utilities/themetest';

import { connect } from 'react-redux';
import { withNavigation, NavigationActions } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
class Setting extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation;
    header: () => (
      <View style={[styles.flex, styles.row, styles.header,]}>
        <View>
          <Text style={{ fontSize: theme.sizes.font * 2 }}>Cài đặt</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <Image style={styles.avatar} source={{ uri: 'https://icons.iconarchive.com/icons/fps.hu/free-christmas-flat-circle/512/home-icon.png' }} />
          </TouchableOpacity>
      </View>
    )
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      list1: [
        {
          title: 'Bài học đã lưu',
          icon: 'bookmark-border'
        },
        {
          title: 'Bài học yêu thích',
          icon: 'favorite-border'
        },
      ],
      list2: [
        {
          title: 'Hướng dẫn sử dụng',
          icon: 'details'
        },
        {
          title: 'Điều khoản',
          icon: 'description'
        },
        {
          title: 'Trợ giúp',
          icon: 'announcement'
        },
        {
          title: 'Đánh giá 5 * :D',
          icon: 'compare-arrows'
        }
      ],
      list3: [
        {
          title: 'Thông tin',
          icon: 'perm-device-information'
        }
      ],
      modalVisible: false,
    };
  }

  componentDidMount() {

  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    let { isAuthenticated } = this.props;
    return (
      <View style={styles.settingContainer}>
        <ScrollView>
          {/* <View>
            <Text></Text>
            <Text></Text>
            {(!isAuthenticated) ? (<ListItem
              title="Dang nhap"
              leftIcon={{ name: 'account-circle' }}
              bottomDivider
              chevron
              onPress={() => { this.props.navigation.navigate('HomeScreen') }}
            />) : (<ListItem
              title="Khai"
              leftIcon={{ name: 'account-circle' }}
              bottomDivider
              chevron
              onPress={() => { this.props.navigation.navigate('Profile') }}
            />)}
          </View> */}
          <View>
            <Text></Text>
            {
              this.state.list1.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                  onPress={() => { alert(`${item.title}`) }}
                  badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
                />
              ))
            }
          </View>
          <View>
            <Text></Text>
            {
              this.state.list2.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                  onPress={() => { alert(`Đang thiếu kinh phí, bạn chờ một thời gian nữa sẽ có nhé.Nhớ phải chăm chỉ để  đạt được mục tiêu đó.Cùng cố lên nào. <3`) }}
                />
              ))
            }
          </View>
          <View>
            <Text></Text>
            {
              this.state.list3.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  bottomDivider
                  chevron
                  onPress={() => {
                    this.setModalVisible(true);
                  }}
                />
              ))
            }
          </View>
        </ScrollView>
      </View>

    )
  }
}

var styles = StyleSheet.create({
  settingContainer: {
    marginBottom: 20
  },
  headerStyle: {
    backgroundColor: "#df3237",
    elevation: 0,
    shadowOpacity: 0
  },
  headerTitleStyle: {
    color: "#eee",
    alignSelf: 'center',
    textAlign: 'center',
  },
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.account.status.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(Setting));