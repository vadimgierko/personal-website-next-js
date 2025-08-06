import { Item } from "@/types";
import Card from "../atoms/Card";
import { NewItem } from "@/scripts";

export default function CardsList({
	items,
	linkText,
}: {
	items: NewItem[];
	linkText: string;
}) {
	if (!items || !items.length) return null;

	return items.map((item, i) => (
		<Card
			key={item.metadata.title}
			item={item}
			left={i % 2 !== 0}
			linkText={linkText}
		/>
	));
}
