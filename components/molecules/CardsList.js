import Card from "../atoms/Card";

export default function CardsList({ items = [], linkText }) {
	//console.log("items in cardslist:", items);
	if (!items || !items.length) return null;

	return items.map((item, i) => (
		<Card key={item.title} item={item} left={i % 2 !== 0} linkText={linkText} />
	));
}
