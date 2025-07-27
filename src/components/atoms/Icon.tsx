import { IconType } from "react-icons";

type IconProps = { IconType: IconType, size: number, className?: string }

export default function Icon({ IconType, size, className = "" }: IconProps) {
	if (!IconType) return null;
	return <IconType size={size} className={className} />;
}
