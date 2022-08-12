import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import {RiArrowLeftSLine} from 'react-icons/ri'
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {

    const { asPath } = useRouter()

    const notHomePage = asPath != "/"

    return(
        <Flex
            as="header"
            w="100%"
            bg="white"
            h={["50", "100px"]}
            mx="auto"
            px="1rem"
            alignItems="center"
            justify="center"  
        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
            >

                {notHomePage && (
                    <Link href="/">
                        <a>
                            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start" />
                        </a>
                    </Link>
                )}

                <Image 
                    w={["81", "184"]}
                    src="/logo.svg" 
                    alt="Logo"
                    justifySelf="center" 
                    gridColumn="2"
                />
            </Grid>
        </Flex>
    )
}