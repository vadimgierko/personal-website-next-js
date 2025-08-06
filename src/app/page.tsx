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
import { newContent } from "@/scripts/new-content";
import { NewField } from "@/scripts";
import { allowedFieldNames, FieldName } from "@/types";

export default function Home() {
	// const fieldsOfInterests: {
	// 	title: string;
	// 	description: string;
	// 	link: string;
	// 	icon: string;
	// }[];
	// const fieldsOfInterests = getEssentialFieldsData();
	const fields = allowedFieldNames.map(
		(fieldName) => newContent.fields[fieldName]
	);

	return (
		<>
			<BioContainer />
			{fields.map((field) => (
				<Section key={field.metadata.link}>
					{field.props.icon && (
						<Icon IconType={icons[field.props.icon].Icon} size={80} />
					)}
					{field.metadata.title && (
						<h2 className="text-center my-3">{field.metadata.title}</h2>
					)}
					{field.metadata.description && (
						<MarkdownRenderer markdown={field.metadata.description} />
					)}
					<Link href={field.metadata.link}>Więcej info</Link>
				</Section>
			))}
		</>
	);
}
