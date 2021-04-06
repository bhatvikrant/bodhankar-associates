import Link from 'next/link'

const WhyUs = (): JSX.Element => {
	return (
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
							Why <span className="text-indigo-600 dark:text-indigo-400">Us?</span>
						</h2>
						<p className="mt-4 text-gray-600 dark:text-gray-400">
							<b>Bodhankar & Associates</b> is a proprietary knowledge firm registered
							under MSMED Act, 2006 providing consulting services in the areas of
							Human Resource Management, Legal Compliance, Organization Development &
							Career Counseling. The firm guides individuals, small & medium
							enterprises and startups through consultation and mediation.
						</p>
						<p className="mt-4 text-gray-600 dark:text-gray-400">
							The firm advises on specific queries and documentation with respect to
							human resource, labour, organization development, HR strategies,
							statutory acts, government schemes, student counseling and career
							guidance.
						</p>
						{/* <p className="mt-4 text-gray-600 dark:text-gray-400">
							We have a hunger for intellectual stimulation and are constantly
							involved in researching ideas, conducting qualitative and quantitative
							analysis and applying complex frameworks to solve knotty problems. Our
							primary goal is to help people and their businesses. We build trust
							because of our will to help our clients accomplish their goals. Our role
							is to assist organization in critical areas of their inclusiveness work.
							We may act as an educator, a catalyst for deeper change, a resource, or
							a facilitator, the leadership of the process remains within your
							organization.
						</p> */}

						<div className="mt-8">
							<Link href="/contact">
								<a className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">
									Get in touch
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default WhyUs
