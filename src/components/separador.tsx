import { Box } from "@chakra-ui/react";

export function Separador() {
    return(
        <Box w={["60px", "90px"]} 
            mx="auto"
            h="2px"
            bgColor="gray.700"
            my={["9", "20"]}
        />
    )
}