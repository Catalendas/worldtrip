import { Grid, Heading } from "@chakra-ui/react";
import { ContinentPropsContent } from "../../pages/continent/[slug]";
import City from "./City";

export default function Citys({continent}: ContinentPropsContent) {
    return(
        <>
            <Heading fontWeight="500" mb="10" fontSize={["2xl", "4xl"]}>
                Cidades +100
            </Heading>

            <Grid 
                templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} 
                gap={["20", "45"]} 
                alignItems="center" 
                justifyContent="center" 
                px={["30px", "0"]}
            >
                {continent.cities100.map(city => (
                    <City 
                        key={city.city}
                        name={city.city}
                        country={city.country}
                        flag={city.flag}
                        thumbnail={city.thumbnail}
                    />
                ))}
               
            </Grid>
        </>
    )
}