import { Flex } from "@chakra-ui/react";
import Content from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import Citys from '../../components/Citys'
import { GetStaticPaths, GetStaticProps } from "next";
import { GetPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom"

export interface ContinentPropsContent {
    continent: {
        slug: string
        title: string
        description: string
        bannerimage: string
        contries: number
        languages: number
        cities: number
        cities_list: string
        cities100: {
                city: string,
                country: string,
                thumbnail: string,
                flag: string
        }[]
    }
}


export default function Continent({continent}: ContinentPropsContent) {
    return(
        <Flex direction="column">
            <Header />
            <ContinentBanner continent={continent}/>

            <Flex 
                direction="column"
                maxW="1160px"
                mx="auto"
                mb="10"
                px="1rem"
            >
                <Content continent={continent}/>
                <Citys continent={continent}/>
            </Flex>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = GetPrismicClient({})
    const continents = await prismic.getByType("continent")

    const paths = continents.results.map( continents => {
        return {
            params: {
                slug: continents.uid
            }
        }    
    })

    return {
        paths,
        fallback: true
    }
}


export const getStaticProps: GetStaticProps = async ({params}) => {
    const prismic = GetPrismicClient({})
    const {slug} = params
    const response = await prismic.getByUID("continent", String(slug))

    console.log(response.data)

    const continent = {
        slug: response.uid,
        title: response.data.title,
        description: RichText.asText(response.data.description),
        bannerimage: response.data.bannerimage.url,
        contries: response.data.contries,
        languages: response.data.languages,
        cities: response.data.cities,
        cities_list: response.data.citiesList,
        cities100: response.data.cities100.map(city => {
            return {
                city: city.city,
                country: city.contrie,
                thumbnail: city.thumbnail.url,
                flag: city.flag.url
            }
        })
    }

    return {
        props: {
            continent: response
        },
        revalidate: 1800
    }
}

