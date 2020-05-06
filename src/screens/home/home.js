import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SliderBox } from "react-native-image-slider-box";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity
} from "react-native";

import { connect } from 'react-redux';
import { withNavigation, NavigationActions } from "react-navigation";
class Post extends Component {
	static navigationOptions = ({ navigation }) => {
		const { state, setParams } = navigation;
		let post = navigation.getParam('post');
		return {
			drawerLabel: post.title,
			title: post.title,
			headerStyle: styles.headerStyle,
			headerTitleStyle: styles.headerTitleStyle,
			headerTintColor: "black",
		};
	};

	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}

	componentDidMount() {
	}
	
	render() {
		const post = this.props.navigation.getParam('post');
		let renderPost;
		if (post && post.data) {
		console.log(post)

			renderPost = post.data.map((value, index) => {
				return(
					<View key ={index}>
						{value.text?(<Text style ={styles.text}>{value.text}</Text>):(<Text></Text>)}
					</View>
				)
			})
		}
		return (
			<View style ={styles.MainContainer}>
				<ScrollView >
					{renderPost}							
				</ScrollView>
			</View>

		)
	}
}

var styles = StyleSheet.create({
	
	headerStyle: {
		backgroundColor: "white",
		elevation: 0,
		shadowOpacity: 0
	},
	headerTitleStyle: {
		color: "black",
		alignSelf: 'center',
		textAlign: 'center',
		flex:1 
	},
	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
		padding: 11

	},

	button: {
		alignItems: 'center',
		backgroundColor: '#43A047',
		padding: 12,
		width: 280,
		marginTop: 12,
	},

	text: {
		fontSize: 18,
		color: 'black'
	}
});

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(Post));