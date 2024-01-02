import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/features';

export default function HomeScreen() {
  const [messages, setMessages] = useState([]);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        {/* Bot Icon */}
        <View className="flex-row justify-center">
          {/* Bot Icon */}
          <Image
            source={require('../../assets/images/bot.png')}
            style={{height: hp(15), width: hp(15)}}
          />
        </View>

        {/* Features or Messages */}
        {messages.length > 0 ? <View></View> : <Features />}
      </SafeAreaView>
    </View>
  );
}
