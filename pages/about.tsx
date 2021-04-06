import Head from 'next/head'

// COMPONENTS
import Ethos from '../components/AboutComponents/Ethos'
import Mission from '../components/AboutComponents/Mission'
import Vision from '../components/AboutComponents/Vision'

const About = (): JSX.Element => {
	return (
		<>
			<Head>
				<title>About us | Bodhankar & Associates</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<div className="bg-white dark:bg-gray-800">
				<div className="container flex flex-col px-6 py-10 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
					<div className="flex items-center justify-center w-full h-96 md:w-1/2">
						<img
							className="object-cover w-full h-full max-w-2xl rounded-md"
							src="/images/why-us.jpeg"
							alt="Bodhankar & Associates"
						/>
					</div>

					<div className="w-full md:w-1/2">
						<div className="max-w-lg">
							<h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
								About{' '}
								<span className="text-indigo-600 dark:text-indigo-400">Us</span>
							</h2>
							<p className="mt-4 text-gray-600 dark:text-gray-400">
								<b>Bodhankar & Associates</b> is a proprietary concern set up to
								offer efficient, timely and professional services to organizations
								on management, legal, general administration and educational
								services.
							</p>
							<p className="mt-4 text-gray-600 dark:text-gray-400">
								We adhere to ethical professional standards in view of our
								multi-dimensional approach towards sustaining ethics & morality in
								business, work and life.
							</p>
							<p className="mt-4 text-gray-600 dark:text-gray-400">
								We focus on addressing industry wise Management & Legal Consultancy
								services. Our priority is to safeguard our client’s interests and
								ensure that personal or professional association of any Associate
								does not involve a conflict of interest.
							</p>

							<div className="mt-8">
								<a
									href="#"
									className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">
									Get In Touch
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Vision />
			<Mission />
			<Ethos />
		</>
	)
}

export default About
