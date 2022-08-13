import * as prismic from '@prismicio/client'
import { HttpRequestLike } from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'



interface PrismicClientProps {
    req?: HttpRequestLike
}

export function GetPrismicClient(config: PrismicClientProps): prismic.Client {

    const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT)

    enableAutoPreviews({
        client,
        req: config.req
    })

    return client

}