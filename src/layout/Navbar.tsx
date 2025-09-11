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
	BsFacebook,
	BsYoutube,
} from "react-icons/bs";
// next.js:
import Link from "next/link";
import { Domain, ItemsType, SocialLinkName, Theme } from "@/types";
import { ReactNode, useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { content } from "@/content/content";

const SOCIAL_LINKS_OBJECTS: { [key in SocialLinkName]: ReactNode } = {
	facebook: <BsFacebook />,
	github: <BsGithub />,
	instagram: <BsInstagram />,
	linkedin: <BsLinkedin />,
	youtube: <BsYoutube />,
};

export function NavigationBar({
	brand,
	links,
	localStorageThemeKey: LOCAL_STORAGE_THEME_KEY,
}: {
	localStorageThemeKey: Domain["localStorageThemeKey"];
	brand: Domain["layout"]["navbar"]["brand"];
	links: Domain["layout"]["navbar"]["links"];
}) {
	const {
		social: SOCIAL_LINKS,
		categories: CATEGORIES_LINKS,
		items: ITEMS_LINKS,
	} = links;

	const [theme, setTheme] = useState<Theme>("dark");

	function switchTheme() {
		const newTheme: Theme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		document.documentElement.setAttribute("data-bs-theme", newTheme);
	}

	useEffect(() => {
		const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

		if (savedTheme) {
			setTheme(savedTheme as Theme);
			document.documentElement.setAttribute("data-bs-theme", savedTheme);
		} else {
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, "dark");
			document.documentElement.setAttribute("data-bs-theme", "dark");
		}
	}, [LOCAL_STORAGE_THEME_KEY]);

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
						src={brand.image.src}
						style={{ width: 20, paddingBottom: 4, borderRadius: "50%" }}
						alt={brand.image.alt}
					/>{" "}
					{brand.value}
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Link href={links.about.href} passHref legacyBehavior>
							<Nav.Link>{links.about.value}</Nav.Link>
						</Link>

						{Object.keys(CATEGORIES_LINKS).map((categoryName) => (
							<NavDropdown
								key={categoryName}
								title={CATEGORIES_LINKS[categoryName]}
							>
								{Object.keys(ITEMS_LINKS).map(
									(itemsType) =>
										/** CONDITIONALLY RENDER FIELD ITEMS IF EXIST */
										Object.keys(
											content.categories[categoryName].items[
												itemsType as ItemsType
											]
										).length > 0 && (
											<Link
												key={categoryName + "-" + itemsType}
												href={`/${categoryName}/${itemsType}`}
												passHref
												legacyBehavior
											>
												<NavDropdown.Item>
													{ITEMS_LINKS[itemsType as ItemsType]}
												</NavDropdown.Item>
											</Link>
										)
								)}
								<NavDropdown.Divider />
								<NavDropdown.Item href={`/${categoryName}`}>
									wszystko
								</NavDropdown.Item>
							</NavDropdown>
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

						{Object.keys(SOCIAL_LINKS).map((socialLinkName) => (
							<Nav.Link
								key={socialLinkName}
								href={SOCIAL_LINKS[socialLinkName as SocialLinkName]}
								target="_blank"
							>
								{SOCIAL_LINKS_OBJECTS[socialLinkName as SocialLinkName]}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
