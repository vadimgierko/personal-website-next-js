import { CMS, Domain } from "@/types";
import { writeCMSJsonFile } from "./helpers/writeCMSJsonFile";
import { writeJsonToLocalFile } from "..";
import { domain } from "@/content/domain";

async function generateDomains({}: {
	domainNames: string[];
	domains: { [key: string]: Domain };
}) {}

async function goBaby() {
	const dName = "vadimgierko.com";

	const cms: CMS = {
		domains: {
			names: [dName],
			values: {
				[dName]: domain,
			},
		},
	};

	await writeCMSJsonFile({ data: cms, dir: ["cms", "index.json"] });

	const dMetadata: Domain["metadata"] = {
		title: "Vadim Gierko",
		description: "Strona internetowa Vadima Gierko",
		authorName: "Vadim Gierko",
		favicon: "https://vadimgierko.com/vadim-gierko-avatar.jpg",
		openGraph: {
			title: "Vadim Gierko",
			description: "Vadim Gierko's personal website",
			image:
				"https://www.vadimgierko.com/img/web-development/projects/vadimgierko-com-personal-website-next-js-screen-vadim-gierko.png",
			url: "https://" + dName,
			type: "website",
		},
	};

	await writeCMSJsonFile({
		data: dMetadata,
		dir: ["domains", dName, "metadata", "index.json"],
	});
}

goBaby();

//========================= 12.09.2025 =========================//

// async function convertContentIntoJSON() {
// 	await writeCMSJsonFile({ data: content, dir: ["content.json"] });
// }

// convertContentIntoJSON();
