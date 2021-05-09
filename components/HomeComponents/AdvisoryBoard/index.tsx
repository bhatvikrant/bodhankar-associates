// DATA
import { advisoryBoard } from "./data"

const AdvisoryBoard = (): JSX.Element => {

	return (
		<section className="text-gray-600 body-font bg-white ">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
						ADVISORY BOARD
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						We are active partners of evolving HR & Legal ecosystem that improvises with challenging times and workplace. Eminent and Senior Advisers are our guiding force. They guide us on professional fronts on variety of critical subject matters and related issues.
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{advisoryBoard.map((advisor, idx) => (
						<div className="p-4 lg:w-1/4 md:w-1/2" key={idx}>
							<div className="h-full flex flex-col items-center text-center" >
								<img
									alt="team"
									className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
									src="https://dummyimage.com/200x200"
								/>
								<div className="w-full">
									<h2 className="title-font font-medium text-lg text-gray-900">
										{advisor.name}
									</h2>
									<h3 className="text-gray-500 mb-3">{advisor.designation}</h3>
									<p className="mb-4 text-justify">
										{advisor.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AdvisoryBoard
