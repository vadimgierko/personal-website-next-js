export default function Icon({ IconType, size, className = "" }) {
	if (!IconType) return null;
	return <IconType size={size} className={className} />;
}
