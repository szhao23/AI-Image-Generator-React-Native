import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Features
      </Text>
      {/* Feature 1 */}
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/chatgpticon.png')}
            style={{height: hp(4), width: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            ChatGPT
          </Text>
        </View>
        {/* Description */}
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics, or help you
          create content with a few words.
        </Text>
      </View>
      {/* Feature 2 */}
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/dalleicon.png')}
            style={{height: hp(4), width: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            DALL-E
          </Text>
        </View>
        {/* Description */}
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          DALL-E can generate imagery in multiple styles, including
          photorealistic imagery, paintings, and emoji. It can "manipulate and
          rearrange" objects in its images, and can correctly place design
          elements in novel compositions without explicit instruction.
        </Text>
      </View>
      {/* Feature 3 */}
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/smartaiicon.png')}
            style={{height: hp(4), width: hp(4)}}
          />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            Smart AI
          </Text>
        </View>
        {/* Description */}
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          A powerful voice assistant with the abilities of ChatGPT and DALL-E in
          combination, providing you with the best of both worlds.
        </Text>
      </View>
    </View>
  );
}
