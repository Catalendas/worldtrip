import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
    return(
        <Box borderRadius="4px" overflow="hidden">
            <Image src="/cityimage/londres.png" alt="Londres" h="170" w="100%"/>
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
                <Flex direction="column">
                    <Heading fontSize="xl" fontWeight="500">Londres</Heading>
                    <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">Reino unido</Text>
                </Flex>
                <Image src="/cityimage/reinounido.png" w="30px" h="30px" objectFit="cover" borderRadius="50%" alt="Bandeira de Londres"/>
            </Flex>
        </Box>
    )
}