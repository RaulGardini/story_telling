import { createStackNavigator } from '@react-navigation/stack';
import Tab_navigator from './tab_navigator';
import StoryScreen from '../screens/story_screen';

const Stack = createStackNavigator();

export default function Stack_navigator() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Tab_navigator} />
        <Stack.Screen name="story_screen" component={StoryScreen} />
      </Stack.Navigator>
  );
}