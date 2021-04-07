// MUI
import CheckIcon from '@material-ui/icons/Check'

const servicesData = [
	'Litigation Services',
	'Non-Litigation Services',
	'Corporate Services',
	'Retainership'
]

const scopeOfWork = [
	'Industrial Relations & Labour Laws',
	'Human Resource',
	'Administration',
	'Secretarial Due Diligence',
	'Legal Due Diligence (General & Specific)',
	'Title Search/Valuation/Registration of residential properties',
	'Intellectual Property Rights',
	'Cyber Laws',
	'Vetting/Drafting of Legal Documents',
	'Immigration Laws'
]

const Services = (): JSX.Element => {
	return (
		<div className="bg-gray-100">
			<div className="px-4 py-16 w-full space-y-1 text-center bg-white">
				<h2 className="pb-3 text-3xl font-bold md:text-4xl">Nature of Work</h2>
				<p>
					Our services are pure consultations on Management and Legal matters. We provide
					advise, counsel and suggest modes for resolution to our clients.
				</p>
			</div>

			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-gray-800">
				<h2 className="mb-8 text-2xl md:text-4xl font-bold leading-none text-center">
					What do we have to offer?
				</h2>
				<ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-2 px-12">
					{servicesData.map((service, idx) => (
						<li className="flex items-center space-x-2" key={idx}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="w-5 h-5 fill-current text-indigo-500">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<span>{service}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="px-12 md:px-16 py-16 w-full space-y-1 text-center bg-white">
				<h2 className="pb-3 text-3xl font-bold md:text-4xl">Scope of Work</h2>
				<p className="pb-16">
					We advise and give legal opinions on specific queries and documentation in
					relation to various agreements and contracts on certain matters referred and as
					required by our clients.
				</p>

				<dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
					{scopeOfWork.map((scope, idx) => (
						<div className="flex" key={idx}>
							<CheckIcon className="flex-shrink-0 w-6 h-6 text-indigo-500" />
							<div className="ml-3">
								<dt className="text-sm font-medium text-justify">{scope}</dt>
							</div>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}

export default Services
