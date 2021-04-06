import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// MUI
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

// NAV DATA
import { navbarLinks } from './navbar-links'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1
		}
	})
)

export default function Navbar() {
	const classes = useStyles()
	const router = useRouter()

	const [showDrawer, setShowDrawer] = useState(false)

	const toggleSideDrawer = () => setShowDrawer(!showDrawer)

	return (
		<nav className="border-b dark:border-gray-700">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<div>
						{/* <div
							className="mr-4 inline self-center"
							style={{ height: '30px !important' }}>
							<Image src="/logo.jpg" height="30" width="30" />
						</div> */}
						<Link href="/">
							<a
								className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300"
								href="#">
								BODHANKAR & ASSOCIATES
							</a>
						</Link>
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden">
						<button
							type="button"
							className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
							aria-label="Toggle menu">
							<svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
								<path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
							</svg>
						</button>
					</div>
				</div>

				{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
				<div className="items-center md:flex">
					<div className="flex flex-col mt-4 space-y-8 md:flex-row md:items-center md:mt-0 md:space-y-0 md:space-x-16">
						<Link href="/about">
							<a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
								About us
							</a>
						</Link>
						<a
							className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
							href="#">
							How it works!
						</a>
						<a
							className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
							href="#">
							Why us?
						</a>
						<a
							className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
							href="#">
							Contact
						</a>

						<button className="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
							Get In Touch
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

// <div className={classes.root}>
// 	<AppBar
// 		position="static"
// 		style={{
// 			backgroundColor: '#35363a'
// 		}}>
// 		<Toolbar>
// 			<div className="mr-4">
// 				<Image src="/logo.jpg" height="40" width="40" />
// 			</div>

// 			<p className="flex-1 font-bold text-md  md:text-2xl">BODHANKAR & ASSOCIATES</p>

// 			{/* NAV LINKS */}
// 			<div className="hidden md:block">
// 				{navbarLinks.map((l, idx) => (
// 					<Link href={l.url} key={idx}>
// 						<a className="mx-8 hover:text-yellow-400 font-bold">{l.label}</a>
// 					</Link>
// 				))}

// 				<Link href="/contact">
// 					<a className="mx-8 hover:text-yellow-400 hover:border-yellow-400 font-bold border-2 px-3 py-1 rounded-3xl">
// 						Contact
// 					</a>
// 				</Link>
// 			</div>

// 			{/* HAMBURGER MENU ICON */}
// 			<span className="md:hidden">
// 				<IconButton
// 					edge="start"
// 					color="inherit"
// 					aria-label="menu"
// 					onClick={toggleSideDrawer}
// 					style={{
// 						padding: 0
// 					}}>
// 					<MenuIcon />
// 				</IconButton>
// 			</span>
// 		</Toolbar>
// 	</AppBar>

// 	<Drawer open={showDrawer} onClose={toggleSideDrawer}>
// 		<div className="w-60">
// 			<List>
// 				{navbarLinks.map((l, idx) => (
// 					<ListItem
// 						button
// 						key={idx}
// 						onClick={() => {
// 							router.push(l.url)
// 							toggleSideDrawer()
// 						}}>
// 						<ListItemIcon>{l.icon}</ListItemIcon>
// 						<ListItemText primary={l.label} />
// 					</ListItem>
// 				))}
// 				<Divider />

// 				<ListItem
// 					button
// 					onClick={() => {
// 						router.push('/contact')
// 						toggleSideDrawer()
// 					}}>
// 					<ListItemIcon>
// 						<ContactPhoneIcon />
// 					</ListItemIcon>
// 					<ListItemText primary="Contact" />
// 				</ListItem>
// 			</List>
// 		</div>
// 	</Drawer>
// </div>
