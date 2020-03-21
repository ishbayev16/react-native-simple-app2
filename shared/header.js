import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {

  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
      <View style={styles.headerTitle}>
        <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').height,
    height: '100%',
    backgroundColor:'rgb(31,57,113)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    left: 40,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fafafa',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    left: 20,
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
});