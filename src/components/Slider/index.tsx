import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import { ContinentProps } from "../../pages";


export function Slider({continents}: ContinentProps) {
    return(
        <Flex w="100%" maxW="1240" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{clickable: true}}
                autoplay={{
                    delay: 4000
                }}
                style={{ width: '100%', flex: '1'}}
            >
             {continents.map( continents => (
                    <SwiperSlide key={continents.image}>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage={`url('${continents.image}')`}
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                        bgPosition="center"
                    >
                        <Link href={`/continent/${continents.slug}`}>
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">{continents.title}</Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>{continents.summary}</Text>
                            </a>
                        </Link>
                    </Flex>
                </SwiperSlide>
             ))}                
            </Swiper>
        </Flex>
    )
}