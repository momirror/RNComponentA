import React,{Component} from 'react';
import {Button,View,Text,Image,StyleSheet,NativeModules,AppRegistry} from 'react-native';

export default class DeviceInfoScreen extends Component {

    showDeviceInfo = ()=>{
        console.log('device info');
        const DeviceInfoService = NativeModules.DeviceInfoService;
        DeviceInfoService.getDeviceInfo((error,content) => {
            alert(content);
        });
    }

    render(){
        return (
            <View>
                <Text style={styles.title}>这是一个RN组件中的视图</Text>
                <Image source={require('./comAResource/deer.png')} style={styles.logo}/>
                <Button title={'点我调用Native显示设备信息'} onPress={this.showDeviceInfo}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({


   title:{
       textAlign:'center',
   } ,
    logo:{
        width:300,
        height:200,
    }
});

AppRegistry.registerComponent('DeviceInfoScreen', () => DeviceInfoScreen);