import React, { useState } from 'react'
import Link from 'next/link'
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
		<div className={classes.root}>
			<AppBar
				position="static"
				style={{
					backgroundColor: '#35363a'
				}}>
				<Toolbar>
					{/* HAMBURGER MENU ICON */}
					<span className="md:hidden">
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={toggleSideDrawer}>
							<MenuIcon />
						</IconButton>
					</span>

					<p className="flex-1 font-bold text-md  md:text-2xl">BODHANKAR & ASSOCIATES</p>

					{/* NAV LINKS */}
					<div className="hidden md:block">
						{navbarLinks.map((l, idx) => (
							<Link href={l.url} key={idx}>
								<a className="mx-8 hover:text-yellow-400 font-bold">{l.label}</a>
							</Link>
						))}

						<Link href="/contact">
							<a className="mx-8 hover:text-yellow-400 hover:border-yellow-400 font-bold border-2 px-3 py-1 rounded-3xl">
								Contact
							</a>
						</Link>
					</div>
				</Toolbar>
			</AppBar>

			<Drawer open={showDrawer} onClose={toggleSideDrawer}>
				<div className="w-60">
					<List>
						{navbarLinks.map((l, idx) => (
							<ListItem
								button
								key={idx}
								onClick={() => {
									router.push(l.url)
									toggleSideDrawer()
								}}>
								<ListItemIcon>{l.icon}</ListItemIcon>
								<ListItemText primary={l.label} />
							</ListItem>
						))}
						<Divider />

						<ListItem
							button
							onClick={() => {
								router.push('/contact')
								toggleSideDrawer()
							}}>
							<ListItemIcon>
								<ContactPhoneIcon />
							</ListItemIcon>
							<ListItemText primary="Contact" />
						</ListItem>
					</List>
				</div>
			</Drawer>
		</div>
	)
}
