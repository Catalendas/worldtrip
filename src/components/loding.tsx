import { Flex, Spinner } from "@chakra-ui/react";

export default function Loding(){
    return(
        <Flex
            align="center"
            justify="center"
            bg="rgba(245, 248, 250, .9)"
            top="0 "
            right="0"
            w="100vw"
            h="100vh"
            zIndex="20"
        >
            <Spinner size="xl" color="yellow.400"/>
        </Flex>
    )
}