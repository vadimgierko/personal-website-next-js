import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "booz1s2l",
	dataset: "production",
	apiVersion: "2022-11-11",
	useCdn: false,
	//token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export const urlFor = (source) => builder.image(source);
