import Link from 'next/link'

// MUI
import CheckIcon from '@material-ui/icons/Check'

const Landing = () => {
	return (
		<header className="bg-white dark:bg-gray-800">
			<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
				<div className="w-full md:w-1/2">
					<div className="max-w-lg">
						<h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
							Get Accurate Legal Assistance
						</h1>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							Our services are pure consultations on Management and Legal matters. We
							provide advise, counsel and suggest modes for resolution to our clients.
						</p>
						<div className="grid gap-6 mt-8 sm:grid-cols-2">
							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />
								<span>Human Resource Consulting</span>
							</div>

							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />
								<span>Legal Advisory</span>
							</div>

							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />
								<span>Legal Due Diligence</span>
							</div>

							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />
								<span>MSME & Startup Compliance</span>
							</div>
						</div>
					</div>

					<div className="mt-8">
						<Link href="/what-we-do">
							<a className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">
								See All Services
							</a>
						</Link>
					</div>
				</div>

				<div className="flex items-center justify-center w-full h-96 md:w-1/2">
					<img
						className="object-cover w-full h-full max-w-2xl rounded-md"
						src="/images/homepage-landing.jpeg"
						alt="Blindfolded woman holding a balance"
					/>
				</div>
			</div>
		</header>
	)
}

export default Landing
