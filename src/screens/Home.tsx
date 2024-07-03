import { useState } from "react";
import { FlatList, HStack, VStack } from "native-base";

// Components
import Group from "@components/Group";
import HomeHeader from "@components/HomeHeader";

const Home = () => {
    const [groups, setGroups] = useState(["costa", "ombro", "peito", "bíceps"]);
    const [groupSelected, setgroupSelected] = useState("costa");

    return (
        <VStack flex={1}>
            <HomeHeader />
            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected === item}
                        onPress={() => setgroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
            />
        </VStack>
    );
};

export default Home;
