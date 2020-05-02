import { HeaderView, LightColor } from '@sqd-ffrog/components';
import {
  StackNavigationOptions,
  TransitionSpecs,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

const screenOptions: StackNavigationOptions = {
  headerTitle: '',
  headerTransparent: true,
  headerBackground: HeaderView,
  cardStyle: {
    backgroundColor: LightColor.backgroundColor,
  },
  headerTintColor: LightColor.textColor,
  headerLeftContainerStyle: {
    marginLeft: 8,
  },
  headerBackTitleVisible: false,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
};

export default screenOptions;
