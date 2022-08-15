import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { ContinentPropsContent } from "../../pages/continent/[slug]";

export default function Infos({continent}: ContinentPropsContent) {
    return(
        <Flex
            align="center"
            justifyContent="space-between" 
        >
            <Flex flexDirection="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow" fontWeight="500">{continent.data.contries}</Heading>
                <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.7000">Países</Text>
            </Flex>

            <Flex flexDirection="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow" fontWeight="500">{continent.data.languages}</Heading>
                <Text fontWeight="600" fontSize={["md", "xl"]} color="gray.7000">Linguas</Text>
            </Flex>

            <Flex flexDirection="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow" fontWeight="500">{continent.data.cities}</Heading>
                <Flex fontWeight="600" fontSize={["md", "xl"]} color="gray.7000">
                    <Text>Cidades +100</Text>

                    <Popover>
                        <PopoverTrigger>
                            <span>
                                <Icon cursor="pointer" as={RiInformationLine} ml="1" color="gray.400" w={["10px", "16px"]} h={["10px", "16px"]}/>
                            </span>
                        </PopoverTrigger>
                        <PopoverContent bg="gray.700" color="yellow.400">
                            <PopoverArrow bg="gray.700"/>
                            <PopoverCloseButton />
                            <PopoverBody fontWeight="400" fontSize="lg">
                            {continent.data.cities_list}
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
                
            </Flex>
        </Flex>
        
    )
}