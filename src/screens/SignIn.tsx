import { VStack, Image, Text, Center } from "native-base";

// Assets
import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

const SignIn = () => {
    return (
        <VStack flex={1} bg="gray.700">
            <Image
                source={BackgroundImg}
                alt="Pessoas treinando"
                resizeMode="stretch"
                position="absolute"
            />
            <Center my={24}>
                <LogoSvg />
                <Text color="gray.100" fontSize="sm">
                    Treine sua mente e seu corpo
                </Text>
            </Center>
        </VStack>
    );
};

export default SignIn;