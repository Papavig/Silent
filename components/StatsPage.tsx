import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
// import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

// Sample data for the bar chart
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [1, 2, 4, 3, 2, 3, 6], // Example hours spent
    },
  ],
};

// App icons
const appIcons = [
  { id: '1', name: 'Instagram', icon: require('../Silent/assets/1.png') },
  { id: '2', name: 'Pinterest', icon: require('../Silent/assets/2.png') },
  { id: '3', name: 'YouTube', icon: require('../Silent/assets/3.png') },
];

const App = () => {
//   const renderAppIcon = ({ item }) => (
//     <TouchableOpacity style={styles.appIcon}>
//       <Image source={item.icon} style={styles.iconImage} />
//     </TouchableOpacity>
//   );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Time spent on apps</Text>
      </View>
      <View style={styles.chartContainer}>
        {/* <BarChart
          data={data}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.chart}
        /> */}
      </View>
      <View style={styles.dateSelector}>
        <TouchableOpacity>
          <Text style={styles.arrow}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>Sun, 25 Aug</Text>
        <TouchableOpacity>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconWrapper}>
        <FlatList
          data={appIcons}
          horizontal
        //   renderItem={renderAppIcon}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.iconList}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity style={styles.lockButton}>
        <Text style={styles.lockButtonText}>Lock Selected Apps</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  chart: {
    borderRadius: 10,
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10, // Reduced margin for better spacing
  },
  arrow: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
  },
  iconWrapper: {
    height:340,
    backgroundColor: '#f3f3ff', // Light purple background
    borderRadius: 20, // Rounded corners
    paddingVertical: 20, // Increased padding for more height
    paddingHorizontal: 30, // Padding for left and right
    marginBottom: 20, // Space below the sect
    alignItems: 'flex-start', // Center the icons horizontally
    justifyContent: 'flex-start', // Center the content vertically
  },
  
  iconList: {
    flexDirection: 'row', // Align icons in a row
    justifyContent: 'space-between', // Distribute icons evenly
  },
  appIcon: {
    marginHorizontal: 15, // Space between individual icons
  },
  iconImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff', // White background for the icons
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1, // Add a border for the icon
    borderColor: '#d0d0d0', // Light gray border
  },
  lockButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  lockButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
