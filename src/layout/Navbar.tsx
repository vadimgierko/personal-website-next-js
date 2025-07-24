"use client";

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
import { Theme } from "@/types";
import { useEffect, useState } from "react";

export const LOCAL_STORAGE_THEME_KEY = "vadimgierko.com-theme";

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

export default function NavigationBar() {
	const [theme, setTheme] = useState<Theme>("dark");

	function switchTheme() {
		const newTheme: Theme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		document.documentElement.setAttribute("data-bs-theme", newTheme);
	};

	useEffect(() => {
		const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

		if (savedTheme) {
			setTheme(savedTheme as Theme);
			document.documentElement.setAttribute("data-bs-theme", savedTheme);
		} else {
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, "dark");
			document.documentElement.setAttribute("data-bs-theme", "dark");
		}
	}, []);

	return (
		<Navbar
			id="navbar"
			collapseOnSelect
			expand="lg"
			bg={theme}
			variant={theme}
			className="fixed-top shadow"
		>
			<Container style={{ maxWidth: 900 }}>
				<Navbar.Brand>
					<Image
						src="/vadim-gierko-avatar.jpg"
						style={{ width: 20, paddingBottom: 4, borderRadius: "50%" }}
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
	);
}
