import { Flex } from "@chakra-ui/react";
import Content from "../../components/Content";
import { ContinentBanner } from "../../components/ContinentBanner";
import { Header } from "../../components/Header";
import Citys from '../../components/Citys'
import { GetStaticPaths, GetStaticProps } from "next";
import { GetPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom"
import Head from "next/head";
import { useRouter } from "next/router";
import Loding from "../../components/loding";

export interface ContinentPropsContent {
    continent: {
        slug: string;
        data: {
            title: string;
            description: string;
            bannerimage: string;
            contries: number;
            languages: number;
            cities: number;
            cities_list: string;
            cities100: {
                    city: string;
                    country: string;
                    thumbnail: string;
                    flag: string;
            }[]
        }
    }
}


export default function Continent({continent}: ContinentPropsContent) {
    const router = useRouter()
    if(router.isFallback){
        return <Loding/>
    }

    return(
        <>       
            <Head>
                <title> {continent.data.title} | worldtrip</title>
            </Head>

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
        </>
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
    const response = await prismic.getByUID('continent', String(slug))

    const continent = {
        slug: response.uid,
        data: {
            title: response.data.title,
            description: RichText.asText(response.data.description),
            bannerimage: response.data.bannerimage.url,
            contries: response.data.contries,
            languages: response.data.languages,
            cities: response.data.cities,
            cities_list: response.data.citieslist,
            cities100: response.data.cities100.map(cities => {
                return {
                    city: cities.city,
                    country: cities.contrie,
                    thumbnail: cities.thumbnail.url,
                    flag: cities.flag.url
                }
            })

        }
    }

    return {
        props: {
            continent
        },
        revalidate: 1800
    }
}

