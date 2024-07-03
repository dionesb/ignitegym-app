import { HStack, Heading, Text, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

// Components
import UserPhoto from "./UserPhoto";

const HomeHeader = () => {
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto
                size={16}
                mr={4}
                source={{ uri: "https://github.com/dionesb.png" }}
                alt="Imagem do usuário"
            />
            <VStack flex={1}>
                <Text color="gray.100" fontSize="md">
                    Olá,
                </Text>
                <Heading color="gray.100" fontSize="md">
                    Diones
                </Heading>
            </VStack>
            <TouchableOpacity>
                <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
            </TouchableOpacity>
        </HStack>
    );
};

export default HomeHeader;
