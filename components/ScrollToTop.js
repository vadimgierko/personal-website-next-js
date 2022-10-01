import { BsArrowUpCircle } from "react-icons/bs";
import scrollToTop from "../helper-functions/scrollToTop";

export default function ScrollToTop() {
	return (
		<BsArrowUpCircle
			className="scroll-to-top" // style & position is defined in index.css
			size={40}
			onClick={scrollToTop}
		/>
	);
}
