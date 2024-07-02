import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

// Screens
import Home from "@screens/Home";
import History from "@screens/History";
import Profile from "@screens/Profile";
import Exercise from "@screens/Exercise";

type AppRoutes = {
    home: undefined;
    history: undefined;
    profile: undefined;
    exercise: undefined;
}

export type AppNavigationRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export const AppRoutes = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="history" component={History} />
            <Screen name="profile" component={Profile} />
            <Screen name="exercise" component={Exercise} />
        </Navigator >
    )
}