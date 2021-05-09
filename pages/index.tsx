import HomepageLanding from '../components/HomeComponents/Landing'
import Trustedby from '../components/HomeComponents/Trustedby'
import AdvisoryBoard from '../components/HomeComponents/AdvisoryBoard'
import WhyUs from '../components/HomeComponents/WhyUs'
import DisclaimerModal from '../components/HomeComponents/DisclaimerModal'

const Home = () => {
	return (
		<div>
			<HomepageLanding />
			<Trustedby />
			<WhyUs />
			<AdvisoryBoard />


			{/* DISCLAIMER MODAL */}
			<DisclaimerModal />
		</div>
	)
}

export default Home
