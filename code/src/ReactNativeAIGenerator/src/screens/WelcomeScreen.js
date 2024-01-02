import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';

export default function WelcomeScreen() {
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text className="text-center text-4xl font-bold text-gray-700">
          Personal AI
        </Text>
        <Text className="text-center tracking-wider text-gray-500 font-semibold">
          The future has arrived, powered by AI
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/images/welcome.png')}
          className="w-72 h-72"
        />
      </View>
    </SafeAreaView>
  );
}
