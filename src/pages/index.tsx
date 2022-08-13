import { Flex, Heading} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";
import { Banner } from "../components/Banner";
import { Caracteristicas } from "../components/Caracteristicas";
import { Header } from "../components/Header";
import { Separador } from "../components/separador";
import { Slider } from "../components/Slider";
import { GetPrismicClient } from "../services/prismic";

export interface ContinentProps {
    continents: {
        slug: string
        title: string
        summary: string
        image: string
    }[]
}


export default function Home({ continents }: ContinentProps) {
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

                <Slider continents={continents}/>

            </Flex>
        
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = GetPrismicClient({})

    const response = await prismic.getByType("continent")
    const continents = response.results.map(continent => {

        return {
            slug: continent.uid,
            title: continent.data.title,
            summary: continent.data.sumary,
            image: continent.data.sliderimage.url,
        }
    })



    return {
        props: {
            continents,
        },
        revalidate: 1800
    }
}