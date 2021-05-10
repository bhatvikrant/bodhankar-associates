import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// MUI
import MenuIcon from '@material-ui/icons/Menu'

export default function Navbar() {
	const [showDrawer, setShowDrawer] = useState(false)

	const toggleSideDrawer = () => setShowDrawer(!showDrawer)

	return (
		<nav className="border-b dark:border-gray-700">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<div>
						<Link href="/">

							<a
								className="mr-4 inline self-center"
								aria-label='BODHANKAR & ASSOCIATES logo'
							>
								<Image src="/logo.png" height="80" width="150" alt='BODHANKAR & ASSOCIATES logo' />
							</a>
						</Link>
						{/* <Link href="/">
							<a className="font-bold text-gray-800 dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 my-auto">
								BODHANKAR & ASSOCIATES
							</a>
						</Link> */}
					</div>
					{/* <!-- Mobile menu button --> */}
					<div className="md:hidden">
						<button
							type="button"
							className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
							aria-label="Toggle menu"
							onClick={toggleSideDrawer}>
							<MenuIcon />
						</button>
					</div>
				</div>

				{/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
				<div className={`items-center md:flex ${showDrawer ? 'block' : 'hidden'} md:block`}>
					<div className="flex flex-col mt-4 space-y-8 md:flex-row md:items-center md:mt-0 md:space-y-0 md:space-x-16">
						<Link href="/">
							<a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
								Home
							</a>
						</Link>
						<Link href="/about">
							<a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
								About us
							</a>
						</Link>
						<Link href="/ethos">
							<a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
								Ethos
							</a>
						</Link>
						<Link href="/what-we-do">
							<a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
								What We Do
							</a>
						</Link>
						<Link href="/">
							<a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
								Resources
							</a>
						</Link>
						<Link href="/">
							<a className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
								Associate
							</a>
						</Link>
						{/* <a
							className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
							href="#">
							Why us?
						</a> */}

						<Link href="/contact">
							<a className="flex items-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 cursor-pointer">
								Get In Touch
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
