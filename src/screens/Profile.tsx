import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from "native-base";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

// Components
import ScreenHeader from "@components/ScreenHeader";
import UserPhoto from "@components/UserPhoto";
import Input from "@components/Input";
import Button from "@components/Button";

const PHOTO_SIZE = 33;

const Profile = () => {
    const [photoLoading, setPhotoLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState("https://github.com/dionesb.png");

    const toast = useToast();

    const handleUserPhotoSelect = async () => {
        setPhotoLoading(true);

        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            });

            if (photoSelected.canceled) return;

            if (photoSelected?.assets?.[0]?.uri) {
                const photoUri = photoSelected?.assets?.[0]?.uri;

                const photoInfo: any = await FileSystem.getInfoAsync(photoUri);

                if (photoInfo?.size && (photoInfo.size / 1024 / 1024) > 5) {
                    return toast.show({
                        title: "Essa imagem é muito frande. Escolha uma de até 5MB.",
                        placement: "top",
                        bgColor: "red.500"
                    });
                }

                setUserPhoto(photoUri);
            };
        } catch (error) {
            console.log(error);
        } finally {
            setPhotoLoading(false)
        }
    }

    const renderUserPhoto = () =>
        photoLoading ? (
            <Skeleton
                w={PHOTO_SIZE}
                h={PHOTO_SIZE}
                rounded="full"
                startColor="gray.500"
                endColor="gray.400"
            />
        ) : (
            <UserPhoto
                source={{ uri: userPhoto }}
                size={PHOTO_SIZE}
                alt="Foto do usuário"
            />
        );

    return (
        <VStack flex={1}>
            <ScreenHeader title="Perfil" />
            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
                <Center mt={6} px={10}>
                    {renderUserPhoto()}
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
                        <Text
                            color="green.500"
                            fontWeight="bold"
                            fontSize="md"
                            mt={2}
                            mb={8}
                        >
                            Alterar foto
                        </Text>
                    </TouchableOpacity>
                    <Input
                        bg="gray.600"
                        placeholder="Nome"
                    />
                    <Input
                        bg="gray.600"
                        placeholder="E-mail"
                        isDisabled
                    />
                    <Heading color="gray.200" fontSize="md" mb={2} alignSelf="flex-start" mt={12}>
                        Alterar senha
                    </Heading>
                    <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
                    <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
                    <Input bg="gray.600" placeholder="Confirme a nova senha" secureTextEntry />
                    <Button title="Atualizar" />
                </Center>
            </ScrollView>
        </VStack>
    );
};

export default Profile;
