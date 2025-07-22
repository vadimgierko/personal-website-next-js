import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	async redirects() {
		return [
			{
				source: "/o-mnie",
				destination: "/",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
