import { Fragment } from 'react'
import ETHOS_DATA from './data'

const Ethos = (): JSX.Element => {
	return (
		<section className="bg-white text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="text-center mb-20">
					<div className="container p-4 mx-auto text-center">
						<h2 className="text-4xl font-bold mt-8 text-black">Ethos</h2>
					</div>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
						We believe in adhering to the highest ethical standards. Our
						multi-dimensional approach towards sustaining ethics in business, work and
						life is based upon:
					</p>
				</div>

				{ETHOS_DATA.map((ethosData, idx) => (
					<Fragment key={idx}>
						<h3 className="mt-16 mb-4 text-xl font-semibold text-gray-800 dark:text-white text-center">
							{ethosData.heading}
						</h3>
						<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
							{ethosData.data.map((point, idx) => (
								<div className="p-2 sm:w-1/2 w-full" key={idx}>
									<div className="bg-gray-100 rounded flex p-4 h-full items-center">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="3"
											className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
											viewBox="0 0 24 24">
											<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
											<path d="M22 4L12 14.01l-3-3"></path>
										</svg>
										<span className="title-font font-medium">{point}</span>
									</div>
								</div>
							))}
						</div>
					</Fragment>
				))}
				{/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
					Button
				</button> */}
			</div>
		</section>
	)
}

export default Ethos
