import { CMS } from "@/types";
import { generateDomain } from "./generateDomain";

function generateCMS(domainNames: string[]): CMS {
	const cms: CMS = {
		domains: {
			names: domainNames,
			values: {
				...domainNames.reduce(
					(prev, curr) => ({ ...prev, [curr]: generateDomain(curr) }),
					{} as CMS["domains"]["values"]
				),
			},
		},
	};

	return cms;
}

export const cms = generateCMS(["vadimgierko.com"]);
