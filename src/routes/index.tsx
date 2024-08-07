import { useTheme, Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"

// Routes
import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"

export const Routes = () => {
    const { colors } = useTheme();

    const theme = DefaultTheme;
    theme.colors.background = colors.gray[700];

    return (
        <Box flex={1} bg="gray.700">
            <NavigationContainer theme={theme}>
                <AppRoutes />
            </NavigationContainer>
        </Box>
    )
}