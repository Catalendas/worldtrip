import { ChakraProvider } from '@chakra-ui/react'
import {AppProps} from 'next/app'
import React from 'react'
import { theme } from '../styles/theme'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/slider.scss'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps}: AppProps) {
    return(
        <ChakraProvider theme={theme}>
            <NextNProgress
                color="#ffba00"
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
            />
            < Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp