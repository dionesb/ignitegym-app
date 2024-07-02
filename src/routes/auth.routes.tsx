import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

// Screens
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";

type AuthRoutes = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export const AuthRoutes = () => {
    return (
        <Navigator>
            <Screen name="signIn" component={SignIn} />
            <Screen name="signUp" component={SignUp} />
        </Navigator >
    )
}