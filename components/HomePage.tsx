import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

type AppUsageItem = {
  id: string;
  iconUri: string;
  timeUsed: string;
};

function HomePage(): React.JSX.Element {
  // const buttonPress = () => {
  //   Alert.alert('Button Pressed');
  // };

  const appUsageData: AppUsageItem[] = [
    {
      id: '1',
      iconUri: 'https://picsum.photos/200/300?random=1',
      timeUsed: '2h 15m',
    },
    {
      id: '2',
      iconUri: 'https://picsum.photos/200/300?random=2',
      timeUsed: '1h 45m',
    },
    {
      id: '3',
      iconUri: 'https://picsum.photos/200/300?random=3',
      timeUsed: '30m',
    },
  ];

  const renderAppItem = ({item}: {item: AppUsageItem}) => (
    <View style={styles.appItem}>
      <Image source={{uri: item.iconUri}} style={styles.icon} />
      <Text style={styles.timeText}>{item.timeUsed}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navText}>Silent</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text
            style={styles.button}
            onPress={() => {
              // buttonPress();
            }}>
            Lock Phone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text
            style={styles.button}
            onPress={() => {
              // buttonPress();
            }}>
            Lock App
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.Title}>Most Used App</Text>
      </View>
      <View style={styles.ActivityContainer}>
        <FlatList
          data={appUsageData}
          renderItem={renderAppItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  // title
  navbar: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    fontSize: 36,
    fontWeight: '600',
    color: '#000',
  },

  // buttons
  buttonContainer: {
    margin: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonWrapper: {
    marginBottom: 26,
    width: '95%',
    backgroundColor: '#b6b6b6',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.4,
  },
  button: {
    color: '#000',
    padding: 16,
    margin: 'auto',
    fontSize: 18,
    fontWeight: '300',
  },

  Title:{
    marginBottom: 24,
    alignSelf: 'flex-start',
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
  },

  //Activity-box
  ActivityContainer: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center',
  },
  listContainer: {
    paddingVertical: 5,
  },
  appItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  timeText: {
    fontSize: 16,
    color: '#000',
  },
});

export default HomePage;
