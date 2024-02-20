
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardPage from './screens/DashboardPage';
import SleepMonitoringPage from './screens/SleepMonitoringPage';
import AltitudeMeasurementPage from './screens/AltitudeMeasurementPage';
import SpeedMeasurementPage from './screens/SpeedMeasurementPage';
import BloodOxygenPressurePage from './screens/BloodOxygenPressurePage';
import SocialMediaNotificationsPage from './screens/SocialMediaNotificationsPage';
import HeartRateFitnessTrackingPage from './screens/HeartRateFitnessTrackingPage';
import ThermometerPage from './screens/ThermometerPage';
import CalendarAlarmPage from './screens/CalendarAlarmPage';
import CountdownPage from './screens/CountdownPage';
import { Dimensions } from 'react-native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="SleepMonitoring" component={SleepMonitoringPage} />
        <Stack.Screen name="AltitudeMeasurement" component={AltitudeMeasurementPage} />
        <Stack.Screen name="SpeedMeasurement" component={SpeedMeasurementPage} />
        <Stack.Screen name="BloodOxygenPressure" component={BloodOxygenPressurePage} />
        <Stack.Screen name="SocialMediaNotifications" component={SocialMediaNotificationsPage} />
        <Stack.Screen name="HeartRateFitnessTracking" component={HeartRateFitnessTrackingPage} />
        <Stack.Screen name="Thermometer" component={ThermometerPage} />
        <Stack.Screen name="CalendarAlarm" component={CalendarAlarmPage} />
        <Stack.Screen name="Countdown" component={CountdownPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
