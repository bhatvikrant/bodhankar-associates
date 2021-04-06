// STYLES
import styles from './index.module.css'

const HomepageLanding = () => {
	return (
		<header className={styles.header__container}>
			<div className="absolute top-44 md:top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen text-center">
				<h1 className="text-2xl md:text-6xl font-bold text-white">
					Bodhankar & Associates
				</h1>
				<p className="mt-4 md:text-lg text-white">Management & Legal Consultants</p>
				<p className="mt-4 md:text-xs text-white font-light text-justify max-w-lg mx-auto hidden md:block">
					The firm advises on specific queries and documentation with respect to human
					resource, labour, organization development, HR strategies, statutory acts,
					government schemes, student counseling and career guidance.
				</p>
			</div>

			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen text-center">
				<button className="bg-yellow-400 uppercase px-4 py-2 rounded-md mt-8 hover:bg-yellow-300 font-semibold">
					Contact us
				</button>
			</div>

			<div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen text-center grid grid-cols-3 divide-x divide-white text-white max-w-2xl mx-auto border-width ">
				<div>
					<h2 className="font-bold md:text-lg">20+ Years</h2>
					<p className="font-light text-xs">of Experience</p>
				</div>
				<div>
					<h2 className="font-bold md:text-lg">Expert Team</h2>
					<p className="font-light text-xs">Ready to help you</p>
				</div>
				<div>
					<h2 className="font-bold md:text-lg">Served 1000+</h2>
					<p className="font-light text-xs">Happy Clients</p>
				</div>
			</div>
		</header>
	)
}

export default HomepageLanding
