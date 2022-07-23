import {
    createClient,
    createPortableTextComponent,
    createPreviewSubscriptionHook,
} from "next-sanity";
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


import { config } from "./config";

if (!config.projectId) {
    throw Error("The Project ID is not set. Check your environment variables.");
}

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
// export const PortableText = createPortableTextComponent({
//     ...config,
//     // Serializers passed to @sanity/block-content-to-react
//     // (https://github.com/sanity-io/block-content-to-react)
//     serializers: {
//         types: {
//             code: (props) => (
//                 <pre data-language={props.node.language}>
//                     <code>{props.node.code}</code>
//                 </pre>
//             ),
//         },
//     },
// });



export const client = sanityClient(config);
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export const previewClient = createClient({
    ...config,
    useCdn: false,
});

export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;
