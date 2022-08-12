import { Flex, Heading} from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
import { Caracteristicas } from "../components/Caracteristicas";
import { Header } from "../components/Header";
import { Separador } from "../components/separador";
import { Slider } from "../components/Slider";

export default function Home() {
    return(
        
            <Flex direction="column">
                <Header/>
                <Banner/>
                <Caracteristicas />
                <Separador/>

                <Heading 
                    textAlign="center"
                    fontWeight="700"
                    mb={["5", "14"]}
                    fontSize={["lg", "3xl", "4xl"]}
                >
                    Vamos nessa?<br />Então escolha seu continente
                </Heading>

                <Slider />

            </Flex>
        
    )
}