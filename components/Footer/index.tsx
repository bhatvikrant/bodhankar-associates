import Link from 'next/link'

// MUI ICONS
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

const Footer = (): JSX.Element => {
	return (
		<footer className="dark:bg-gray-800">
			<div className="container px-6 py-4 mx-auto">
				<div className="lg:flex">
					<div className="w-full -mx-6 lg:w-2/5">
						<div className="px-6">
							<div>
								<Link href="/">
									<a className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
										Bodhankar & Associates
									</a>
								</Link>
							</div>

							<p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">
								We provide advise, counsel and suggest modes for resolution to our
								clients.
							</p>

							<div className="flex mt-4 -mx-2">
								<a
									href="https://www.linkedin.com/company/bodhankar-&-associates/"
									target="_blank"
									rel="noreferrer"
									className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
									aria-label="Linkden">
									<LinkedInIcon />
								</a>

								<a
									href="https://www.instagram.com/sunbodh/"
									target="_blank"
									rel="noreferrer"
									className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
									aria-label="Instagram">
									<InstagramIcon />
								</a>

								<a
									href="https://twitter.com/sunbodh"
									target="_blank"
									rel="noreferrer"
									className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
									aria-label="Twitter">
									<TwitterIcon />
								</a>
							</div>
						</div>
					</div>

					<div className="mt-6 lg:mt-0 lg:flex-1">
						<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
							<div>
								<h3 className="text-gray-700 uppercase dark:text-white">About</h3>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									Company
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									community
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									Careers
								</a>
							</div>

							<div>
								<h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									Tec
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									Music
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									Videos
								</a>
							</div>

							<div>
								<h3 className="text-gray-700 uppercase dark:text-white">
									Products
								</h3>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									Mega cloud
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									Aperion UI
								</a>
								<a
									href="#"
									className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									Meraki UI
								</a>
							</div>

							<div>
								<a href='tel:+919849792800'>
									<h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
									<span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
										+91 9849792800
								</span>
								</a>
								<span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
									example@email.com
								</span>
							</div>
						</div>
					</div>
				</div>

				<hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

				<div>
					<p className="text-center text-gray-800 dark:text-white">
						© Bodhankar & Associates {new Date().getFullYear()} - All rights reserved
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
