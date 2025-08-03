import MarkdownRenderer from "@/components/atoms/MarkdownRenderer";

// icons bank:
import { icons } from "@/content/icons";
// custom components:
// layout:
import Section from "@/layout/Section";
// atoms:
import Icon from "@/components/atoms/Icon";
// next.js:
import Link from "next/link";
import getEssentialFieldsData from "../lib/getEssentialFieldData";
import BioContainer from "./BioContainer";
import { getAllPagesContentObject } from "@/lib/getAllPagesContent";

export default function Home() {
	const fieldsOfInterests = getEssentialFieldsData();

	// const allPagesContentObject = getAllPagesContentObject();
	// console.log("allPagesContentObject", allPagesContentObject);

	return (
		<>
			<BioContainer />
			{fieldsOfInterests.map((field) => (
				<Section key={field.link}>
					{field.icon && <Icon IconType={icons[field.icon].Icon} size={80} />}
					{field.title && <h2 className="text-center my-3">{field.title}</h2>}
					{field.description && (
						<MarkdownRenderer markdown={field.description} />
					)}
					<Link href={field.link}>Więcej info</Link>
				</Section>
			))}
		</>
	);
}
