import React from 'react';
import {Image, Linking} from 'react-native';
import {List, ListItem, Text, View, Content, Icon, Footer} from 'native-base';

import styles from './Styles/DrawerContentStyles';
import {Images, Colors} from '../Themes';

const DrawerContent = (props) => {
  const navigation = props.navigation;
  const items = props.items;

  const callNumber = (url) => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.logo} style={styles.logo} />
      </View>
      <Content style={styles.content}>
        <List
          dataArray={items}
          renderRow={(item) => (
            <ListItem onPress={() => navigation.navigate(item.routeName)}>
              <Text style={{paddingLeft: 10}}>{item.routeName}</Text>
            </ListItem>
          )}
        />
      </Content>
      <Footer style={styles.callus}>
        <Icon name="call" style={{fontSize: 25, color: Colors.pink0}} />
        <Text
          style={{paddingLeft: 15}}
          //TODO move number to firebase
          onPress={() => callNumber('tel:+79619974245')}>
          Позвоните нам
        </Text>
      </Footer>
    </View>
  );
};

export default DrawerContent;
