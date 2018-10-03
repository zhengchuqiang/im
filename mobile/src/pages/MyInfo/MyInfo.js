import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import PubSub from 'pubsub-js'
import Icon from 'react-native-vector-icons/FontAwesome';

import { PubsubName } from '../../constant/PubsubContant'
import { NavigatorName } from '../../constant/NavigatorContant'
import NavigationBar from './../../base/NavigationBar/NavigationBar';
import ViewUtil from './../../util/ViewUtil';

export default class MyInfo extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {

    }

    goBack() {
        
    }

    changeAvatar() {

    }

    render() {
        return (<View>
            <NavigationBar 
                leftButton={ViewUtil.getNavigationBarBackButton(()=>this.goBack())}
                rightButton={ViewUtil.getNavigationBarTitleButton('更换头像',()=>{this.changeAvatar()})}
                title={'个人资料'}
                titleLayoutStyle={{paddingRight: 10}}
                style={{backgroundColor: global.theme.color}}
           />
            <Text>MyInfo</Text>
            <Button title='个人签名' 
            onPress={()=>{
                this.props.navigation.navigate(NavigatorName.EditTextInfo,{
                    navigationBarTitle: '个人签名'
                })
            }}/>
        </View>)
    }
}