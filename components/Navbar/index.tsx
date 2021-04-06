import Link from "next/link";
import Image from "next/Image";

// STYLES
import styles from "./index.module.css";

// BOOTSTRAP
import { Navbar, Nav } from "react-bootstrap";

const navLinkItems = [
	{
		path: "/",
		label: "Home",
	},
	{
		path: "/services",
		label: "Services",
	},
	{
		path: "/team",
		label: "Team",
	},
	{
		path: "/about",
		label: "About",
	},
	{
		path: "/contact",
		label: "Contact",
		styleClassName: "rounded__nav__link",
	},
];

const NavbarComponent = () => {
	return (
		<Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#35363a" }}>
			<Link href="/">
				<a className="d-flex">
					<Image src="/logo.jpg" height="50" width="50" />
				</a>
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<div className="mr-auto" />

				<div>
					{navLinkItems.map((i, idx) => (
						<div
							key={idx}
							className={`${i.styleClassName && styles[i.styleClassName]} m-4`}
						>
							<Link href={i.path}>
								<a
									className={`${
										i.styleClassName && styles[i.styleClassName]
									} m-4`}
								>
									{i.label}
								</a>
							</Link>
						</div>
					))}
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
