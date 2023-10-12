import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { CustomButtonProps } from '../constants';



const CustomButton = ({
  title,
  smtitle,
  subtitle,
  containerStyles,
  onPress,
  btnType,
  appIcon,
  playstoreIcon,
  isDisabled,
  textStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={0.5}
      onPress={onPress}
      style={[styles.container, containerStyles]}>
      {appIcon && (
        <View style={{ width: 60, height: 60 }}>
          <Image
            source={{ uri: appIcon }}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
      )}
      {playstoreIcon && (
        <View style={{ width: 60, height: 60 }}>
          <Image
            source={{ uri: playstoreIcon }}
            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
        </View>
      )}
      <View >
        <View>
          <Text style={styles.subText}>{subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#D1FC7E', // Background color
    padding: 10, // Padding around the button content
    borderRadius: 8, // Border radius for rounded corners
    alignItems: 'center', // Center button content horizontally
    justifyContent: 'center', // Center button content vertically
    minWidth: 388, // Minimum width of the button
    minHeight: 52, // Minimum height of the button
  },

  smText: {
    color: 'white', // Set your desired text color
    fontSize: 12,
  },

  subText: {
    color: 'white', // Set your desired text color
    fontSize: 16,
    fontWeight:'500',
    textAlign: 'center'
  },
});


export default CustomButton;
