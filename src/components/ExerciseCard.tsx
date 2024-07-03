import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { Entypo } from "@expo/vector-icons";

interface IExerciseCardProps extends TouchableOpacityProps { }

const ExerciseCard: React.FC<IExerciseCardProps> = ({ ...rest }) => {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynXOJ7ePCuQ9U-0ooW0Our1KhhoOQkJs4VA&s",
                    }}
                    alt="Imagem do exercicio"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="center"
                />
                <VStack flex={1}>
                    <Heading fontSize="lg" color="white">Remada unilateral</Heading>
                    <Text fontSize="sm" color="gray.200" numberOfLines={2}>3 séries x 12 repetições</Text>
                </VStack>
                <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
            </HStack>
        </TouchableOpacity>
    );
};

export default ExerciseCard;
