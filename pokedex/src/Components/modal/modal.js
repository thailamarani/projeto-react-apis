import {
    Modal,
    ModalOverlay,
    ModalContent,
    Button,
    useDisclosure,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react';
import { useContext } from 'react';
import { GlobalStateContext } from '../../Global/GlobalStateContext';

export default function ModalPokemon() {
    const { isOpen, setIsOpen, controlModal, setControlModal } = useContext(GlobalStateContext)

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    {controlModal === 1 ?
                        <Flex w={"450px"} h={"220px"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                            <Heading>Gotcha!</Heading>
                            <Text fontWeight={"bold"}>O pokémon foi adicionado a sua Pokédex!</Text>
                        </Flex>
                        :
                        <Flex w={"450px"} h={"220px"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                            <Heading>Oh, no!</Heading>
                            <Text fontWeight={"bold"}>O pokémon foi removido a sua Pokédex!</Text>
                        </Flex>
                    }

                </ModalContent>
            </Modal>
        </>
    )
};