import Head from 'next/head'
import Link from 'next/link'

// COMPONENTS
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
							<p className="mt-4 text-gray-600 dark:text-gray-400 text-justify">
								<b>Bodhankar & Associates</b> is a knowledge services firm providing consulting services in the areas of Human Resource Management, Legal Compliance & Organization Development. The firm guides individuals, small & medium enterprises and startups through consultation and mediation.
							</p>
							<p className="mt-4 text-gray-600 dark:text-gray-400 text-justify">
								The firm advises on specific queries and documentation with respect to human resource, labour, organization development, HR strategies, statutory acts, government schemes, student counseling programs and career guidance. The firm provides paralegal support services to various types of businesses.
							</p>
							<p className="mt-4 text-gray-600 dark:text-gray-400 text-justify">
								The firm adheres to ethical professional standards in view of its multi-dimensional approach towards sustaining ethics & morality in business, work and life. The firm is registered under MSME Act, 2006 and is affiliated to several academic forums and socio-legal associations.
							</p>

							<div className="mt-8">
								<Link href="/contact">
									<a className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">
										Get In Touch
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Vision />
			<div className='bg-white'>
				<div className='max-w-4xl mx-auto px-6 md:px-0 py-16'>
					<p className="mt-4 text-gray-600 dark:text-gray-400 text-justify">
						Driven by hunger for intellectual stimulation, we are constantly involved in researching ideas, conducting qualitative and quantitative analysis and applying complex frameworks to solve knotty problems. Our primary goal is to help people and their businesses. We built trust because of our will to help our clients accomplish their goals. Our role is to assist organization in critical areas of their inclusiveness work. We act as an educator, a catalyst for deeper change, a resource or a facilitator, the leadership of the process remains within your organization. We act as an extension of in-house legal cell or as independent legal consultants. Our efforts are towards being strategic partners for our clients growth and not just be a consulting firm.
							</p>

					<p className="mt-4 text-gray-600 dark:text-gray-400 text-justify">
						Our Associates have a successful track record of representing companies and individuals before domestic courts and arbitration tribunals. Although, our Associates have been collaborating on various matters since a fairly long time, the firm was formed recently in order to serve a larger platform for new clients and associates.

							</p>
					<p className="mt-4 text-gray-600 dark:text-gray-400 text-justify">
						We focus on addressing industry wise Management & Legal Consultancy services. Our priority is to safeguard our client’s interests and ensure that personal or professional association of any Associate does not involve a conflict of interest.
							</p>
					<p className="mt-4 text-gray-600 dark:text-gray-400 text-justify">
						We are a socially responsible firm and undertake pro-bono work to support several philanthropic organizations, NGOs and government initiatives related to social justice, child-care and education.
							</p>
				</div>
			</div>

			<Mission />
		</>
	)
}

export default About
