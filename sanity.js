import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
 projectId: "h9exym15",
 dataset:"production",
 useCdn: true,
 apiVersion: "2021-10-21",
});

//helper function to fetch image url from our sanity backend
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

//RUN THIS to add exception for localhost 3000 CORS policy
//sanity cors add http://localhost:3000

export default client;