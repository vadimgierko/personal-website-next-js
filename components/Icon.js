export default function Icon({ IconType, size }) {
	if (!IconType) return null;
	return <IconType size={size} />;
}
