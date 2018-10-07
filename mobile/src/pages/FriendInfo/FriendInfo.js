import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Dimensions, Image, ListView, PixelRatio, TouchableOpacity, Alert} from 'react-native';
import PubSub from 'pubsub-js'
import Icon from 'react-native-vector-icons/FontAwesome';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { PubsubName } from '../../constant/PubsubContant'

import NavigationBar from './../../base/NavigationBar/NavigationBar';
import ViewUtil from './../../util/ViewUtil';
import EditMyInfoData from '../../data/EditMyInfoData.json'
import FriendInfoList from './subpages/FriendInfoList/FriendInfoList'


export default class FirendInfo extends Component {

    
    constructor(props) {
        super(props)
        this._renderParallaxConfig = this._renderParallaxConfig.bind(this)
    }

    componentDidMount() {
       
    }

    componentWillUnmount() {

    }

    goBack() {
      this.props.navigation.goBack();
    }


    _renderParallaxConfig(params) {
        let config = {}
        config.renderBackground = () => (
            <View key="background">
              <Image source={{uri:  params.backgroundImg,
                              width: window.width,
                              height: PARALLAX_HEADER_HEIGHT}}/>
              <View style={{position: 'absolute',
                            top: 0,
                            width: window.width,
                            backgroundColor: 'rgba(0,0,0,.4)',
                            height: PARALLAX_HEADER_HEIGHT}}/>
            </View>
        )
        config.renderForeground = () => (
            <View key="parallax-header" style={ styles.parallaxHeader }>
              <Text style={ styles.sectionSpeakerText }>
                {params.name}
              </Text>
              <Text style={ styles.sectionTitleText }>
                {params.description}
              </Text>
            </View>
        )
        config.renderStickyHeader = () => (
            <View key="sticky-header" style={styles.stickySection}>
              <Text style={styles.stickySectionText}>{params.title}</Text>
            </View>
        )

        config.renderFixedHeader = () => (
            <View key="fixed-header" style={styles.fixedSection}>
              <NavigationBar 
                leftButton={ViewUtil.getNavigationBarBackButton(() => this.goBack())}
                titleLayoutStyle={{paddingRight: 10}}
                style={{backgroundColor: 'transparent'}}
            />
            </View>
        )
        
        return config
    }

    removeFriend() {
      Alert.alert('删除好友','确定删除该好友?',[{
        text: '取消',
        onPress: () => {
            
        }
    },{
        text: '确定',
        onPress: () => {
            
        }
    }])
    }

    render() {
        let renderConfig = this._renderParallaxConfig({
          'name': '仟月酱',
          'description': '',
          'avatar': '',
          'title': '个人资料',
          'backgroundImg': 'http://img.twenq.com/upload/artimg/2018/9/1536377718_3820bd5a4a04cb806198482a52df82ad.jpg'
        })
        return (<View style={{flex: 1}}>
              <ParallaxScrollView
                headerBackgroundColor="#333"
                stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                backgroundSpeed={10}
                {...renderConfig}>
                <FriendInfoList settings={EditMyInfoData.settings} selectItemFn={this.selectInfoItemFn}/>
            </ParallaxScrollView>
              <TouchableOpacity style={styles.removeFriend} 
                onPress={()=>this.removeFriend()}>
                      <Text style={{color: '#fff'}}>删除好友</Text>
              </TouchableOpacity>
            </View>
        );
    }
}


const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 10,
    paddingRight: 0,

  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 200
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  },
  removeFriend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f57',
    height: 50
  }
});
