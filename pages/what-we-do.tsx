// MUI
import CheckIcon from '@material-ui/icons/Check'

const servicesData: Array<{ service: string, dataJSX: JSX.Element }> = [
	{
		service: 'Litigation Services', dataJSX: <>
			<p className='mb-4'>We attend the following Honorable Courts in India through our Associate Network:</p>
			<ol className='list-decimal'>
				<li>District &amp; State Consumer Court (Hyderabad)</li>
				<li>City Civil Courts (Hyderabad, Secunderabad &amp; RR District)</li>
				<li>Debt Recovery Tribunal (Hyderabad)</li>
				<li>High Court of Telangana &amp; Andhra Pradesh</li>
			</ol>
			<p className='mt-4'>We arrange Advocate-on-Record for Supreme Court also.</p>
		</>
	},
	{ service: 'Non-Litigation Services', dataJSX: <p>We undertake Alternative Dispute Mechanisms esp. Arbitration, Mediation, Negotiation &amp; Conciliation on behalf of the client organization.</p> },
	{ service: 'Corporate Services', dataJSX: <p>We conduct Due Diligence Search (Secretarial, Legal &amp; Assets) during Mergers or Acquisitions. We represent clients in Civil, Criminal, High Court and DRT Courts (Telangana) by drafting plaints, written statements, affidavits, etc.</p> },
	{
		service: 'Retainership', dataJSX: <>
			<p className='mb-4'>We undertake Retainership with client organizations for a minimum period of one year with a renewal option for further periods. The advantages are:</p>
			<ol className='list-decimal'>
				<li>Competitive Retainership charges;</li>
				<li>In-house legal representations;</li>
				<li>Accessibility of Advocates at call;</li>
				<li>Twice a week visit to clients designated place at convenient times;</li>
				<li>Collaboration with client for conferences and meetings;</li>
				<li>Liaison with authorities for compliance during inspections;</li>
				<li>Feedback and appraisal on matters within minimum TAT;</li>
				<li>Periodic updates on labour legislation amendments, notifications and on related laws;</li>
				<li>Enabling client to focus on core organizational goals &amp; objectives;</li>
				<li>Ensuring timely compliance and resolving legal hurdles through liaison;</li>
				<li>Awareness mailers on updates on related statutory compliance;</li>
				<li>MIS on statutory reports;</li>
				<li>Consultation on maintenance of statutory records &amp; registers;</li>
				<li>Assistance in claim settlement under labour laws.</li>
			</ol>
		</>
	},
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

const WhatWeDo = (): JSX.Element => {
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
					{servicesData.map((data, idx) => (
						<li className="flex items-center space-x-2" key={idx}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								className="w-5 h-5 fill-current text-indigo-500">
								<path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
								<polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
							</svg>
							<span>{data.service}</span>
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

				<dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 max-w-6xl mx-auto">
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

			<section className="bg-white text-coolGray-800">
				<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
					<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">What We Do</p>
					<h1 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Services</h1>
					<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-300">
						{servicesData.map((data, idx) => (
							<details key={idx}>
								<summary className="py-2 outline-none cursor-pointer font-bold">{data.service}</summary>
								<div className="px-4 pb-4">
									{data.dataJSX}
								</div>
							</details>
						))}

					</div>
				</div>
			</section>
		</div>
	)
}

export default WhatWeDo
