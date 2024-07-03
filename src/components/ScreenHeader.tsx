import { Center, Heading } from "native-base";

interface IScreenHeaderProps {
    title: string;
}

const ScreenHeader: React.FC<IScreenHeaderProps> = ({ title }) => {
    return (
        <Center bg="gray.600" pb={6} pt={16}>
            <Heading color="gray.100" fontSize="xl">{title}</Heading>
        </Center>
    )
}

export default ScreenHeader;