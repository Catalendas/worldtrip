import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";


export default function Citys() {
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
                <City />
                <City />
                <City />
                <City />
                <City />
            </Grid>
        </>
    )
}