import {
    VStack,
    Image,
    Text,
    Center,
    Heading,
    View,
    ScrollView,
} from "native-base";

// Assets
import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

// Components
import Input from "@components/Input";
import Button from "@components/Button";

const SignUp = () => {
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <Image
                source={BackgroundImg}
                defaultSource={BackgroundImg}
                alt="Pessoas treinando"
                resizeMode="stretch"
                position="absolute"
            />
            <VStack flex={1} px={10} pb={16}>
                <Center my={24}>
                    <LogoSvg />
                    <Text color="gray.100" fontSize="sm">
                        Treine sua mente e seu corpo
                    </Text>
                </Center>
                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Crie sua conta
                    </Heading>
                    <Input placeholder="Nome" />
                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input placeholder="Senha" secureTextEntry />
                    <Button title="Criar sua conta" />
                </Center>
                <Center mt={24}>
                    <Button title="Voltar para o login" variant="outline" />
                </Center>
            </VStack>
        </ScrollView>
    );
};

export default SignUp;
