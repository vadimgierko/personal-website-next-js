import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: "booz1s2l",
	dataset: "production",
	apiVersion: "2022-11-11",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
