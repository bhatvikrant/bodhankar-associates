// STYLES
import styles from './index.module.css'

// MUI
import CheckIcon from '@material-ui/icons/Check'

const HomepageLanding = () => {
	return (
		<header className="bg-white dark:bg-gray-800">
			<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
				<div className="w-full md:w-1/2">
					<div className="max-w-lg">
						<h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
							Find your premium new glasses exported from US
						</h1>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							We work with the best remunated glasses dealers in US to find your new
							glasses.
						</p>
						<div className="grid gap-6 mt-8 sm:grid-cols-2">
							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />

								<span>Premium selection</span>
							</div>

							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />

								<span>Insurance</span>
							</div>

							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />

								<span>All legal documents</span>
							</div>

							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />

								<span>From US glasses dealers</span>
							</div>

							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />

								<span>Payment Security</span>
							</div>

							<div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
								<CheckIcon fontSize="small" />

								<span>Fast shipping (+ Express)</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center w-full h-96 md:w-1/2">
					<img
						className="object-cover w-full h-full max-w-2xl rounded-md"
						src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
						alt="glasses photo"
					/>
				</div>
			</div>
		</header>
	)
}

export default HomepageLanding

// <header className={styles.header__container}>
// 	<div className="absolute top-44 md:top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen text-center">
// 		<h1 className="text-2xl md:text-6xl font-bold text-white">
// 			Bodhankar & Associates
// 		</h1>
// 		<p className="mt-4 md:text-lg text-white">Management & Legal Consultants</p>
// 		<p className="mt-4 md:text-xs text-white font-light text-justify max-w-lg mx-auto hidden md:block">
// 			The firm advises on specific queries and documentation with respect to human
// 			resource, labour, organization development, HR strategies, statutory acts,
// 			government schemes, student counseling and career guidance.
// 		</p>
// 	</div>

// 	<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen text-center">
// 		<button className="bg-yellow-400 uppercase px-4 py-2 rounded-md mt-8 hover:bg-yellow-300 font-semibold">
// 			Contact us
// 		</button>
// 	</div>

// 	<div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen text-center grid grid-cols-3 divide-x divide-white text-white max-w-2xl mx-auto border-width ">
// 		<div>
// 			<h2 className="font-bold md:text-lg">20+ Years</h2>
// 			<p className="font-light text-xs">of Experience</p>
// 		</div>
// 		<div>
// 			<h2 className="font-bold md:text-lg">Expert Team</h2>
// 			<p className="font-light text-xs">Ready to help you</p>
// 		</div>
// 		<div>
// 			<h2 className="font-bold md:text-lg">Served 1000+</h2>
// 			<p className="font-light text-xs">Happy Clients</p>
// 		</div>
// 	</div>
// </header>
