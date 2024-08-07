import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, HStack, Heading, VStack, Text } from "native-base";

// Routes
import { AppNavigationRoutesProps } from "@routes/app.routes";

// Components
import Group from "@components/Group";
import HomeHeader from "@components/HomeHeader";
import ExerciseCard from "@components/ExerciseCard";

const Home = () => {
    const [groups, setGroups] = useState(["costas", "ombro", "peito", "bíceps"]);
    const [exercises, setExercises] = useState(["Puxada frontal", "Remada curvada", "Remada unilateral", "Levantamento terra"]);
    const [groupSelected, setgroupSelected] = useState("costas");

    const navigation = useNavigation<AppNavigationRoutesProps>();

    const handleOpenExerciseDetails = () => {
        navigation.navigate("exercise");
    };

    return (
        <VStack flex={1}>
            <HomeHeader />
            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
                        onPress={() => setgroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />
            <VStack flex={1} px={8}>
                <HStack justifyContent="space-between" mb={5}>
                    <Heading color="gray.200" fontSize="md">
                        Exercícios
                    </Heading>
                    <Text color="gray.200" fontSize="sm">
                        {exercises.length}
                    </Text>
                </HStack>
                <FlatList
                    data={exercises}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <ExerciseCard onPress={handleOpenExerciseDetails} />}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    );
};

export default Home;
