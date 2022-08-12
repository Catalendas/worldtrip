import { Flex, Heading } from "@chakra-ui/react";


export function ContinentBanner () {
    return(
        <Flex
            w="100%"
            h={["150px", "300px", "500px"]}
            px={["0", "0", "36"]}
            pt={["0", "0", "72"]}
            bgImage="/image/europeBanner.png"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            align="center"
            justify={["center", "center", "start"]}
        >
            <Heading 
                color="gray.100"
                fontWeight="500"
                fontSize={["1.75rem", "5xl"]}
                textAlign={["center", "left"]}
            >Europa</Heading>
        </Flex>
    )
}