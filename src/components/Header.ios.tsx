import React, { useState, FC } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

interface HeaderProps {
  isEnabled: boolean;
  toggleSwitch: () => void;
}

export const Header: FC<HeaderProps> = ({ isEnabled, toggleSwitch }) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isEnabled ? '#483C67' : '#273FAD' },
      ]}
    >
      <View style={[styles.header]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>
          do
        </Text>
      </View>
      <View style={styles.toogle}>
        <Switch
          trackColor={{ false: '#483C67', true: '#273FAD' }}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#483C67"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  header: {
    paddingBottom: 44,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  toogle: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
});
