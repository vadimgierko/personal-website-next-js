import { Item } from "@/types";
import Card from "../atoms/Card";

export default function CardsList({
	items,
	linkText,
}: {
	items: Item[];
	linkText: string;
}) {
	if (!items || !items.length) return null;

	return items.map((item, i) => (
		<Card key={item.title} item={item} left={i % 2 !== 0} linkText={linkText} />
	));
}
