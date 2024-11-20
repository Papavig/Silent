import { NativeModules } from 'react-native';

const { AppUsageModule } = NativeModules;

const getAppUsageData = async () => {
  try {
    const data = await AppUsageModule.getAppUsageData();
    return JSON.parse(data);
  } catch (error) {
    console.error('Failed to get app usage data:', error);
    return [];
  }
};

export default getAppUsageData;
