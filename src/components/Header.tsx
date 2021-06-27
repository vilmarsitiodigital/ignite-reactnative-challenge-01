import React, { FC } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

interface HeaderProps {
  isEnabled: boolean;
  toggleSwitch: () => void;
}

export const Header: FC<HeaderProps> = ({ isEnabled, toggleSwitch }) => {
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: isEnabled ? '#483C67' : '#273FAD' },
      ]}
    >
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
        do
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
});
