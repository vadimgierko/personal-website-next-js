import { useTheme } from "../contexts/useTheme";
// react-bootstrap components:
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// react-icons:
import {
	BsLinkedin,
	BsGithub,
	BsInstagram,
	BsSunFill,
	BsMoonFill,
	BsEnvelope,
} from "react-icons/bs";
// next.js:
import Link from "next/link";

const NAV_LINKS = [
	{
		name: "o mnie",
		link: "/o-mnie",
	},
	{
		name: "programowanie",
		link: "/web-development",
	},
	{
		name: "proces twórczy",
		link: "/creative-process-management",
	},
	{
		name: "myślenie wizualne",
		link: "/visual-thinking",
	},
	{
		name: "muzyka",
		link: "/music",
	},
];

const SOCIAL_LINKS = [
	{
		name: "github",
		link: "https://github.com/vadimgierko",
		Icon: BsGithub,
	},
	{
		name: "linkedin",
		link: "https://pl.linkedin.com/in/vadimgierko",
		Icon: BsLinkedin,
	},
	{
		name: "instagram",
		link: "https://www.instagram.com/vadim.gierko/",
		Icon: BsInstagram,
	},
];

export default function NavigationBar({ maxWidth = "" }) {
	const { theme, switchTheme } = useTheme();

	return (
		<header id="navbar">
			<Navbar
				collapseOnSelect
				expand="lg"
				bg={theme}
				variant={theme}
				className="fixed-top shadow"
			>
				<Container style={{ maxWidth: 900 }}>
					<Navbar.Brand>
						<Image
							src="/vadim-gerko-zdjecie-cv.jpg"
							style={{ width: 20, paddingBottom: 4 }}
							alt="vadim gierko profile picture"
						/>{" "}
						Vadim Gierko
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							{NAV_LINKS.map((navLink) => (
								<Link
									key={navLink.name}
									href={navLink.link}
									passHref
									legacyBehavior
								>
									<Nav.Link>{navLink.name}</Nav.Link>
								</Link>
							))}
						</Nav>
						<Nav>
							<Nav.Link>
								{theme === "light" ? (
									<BsMoonFill onClick={switchTheme} />
								) : (
									<BsSunFill onClick={switchTheme} />
								)}
							</Nav.Link>

							{SOCIAL_LINKS.map((social) => (
								<Nav.Link key={social.link} href={social.link} target="_blank">
									<social.Icon />
								</Nav.Link>
							))}

							<Link href="/contact" passHref legacyBehavior>
								<Nav.Link>
									<BsEnvelope />
								</Nav.Link>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
