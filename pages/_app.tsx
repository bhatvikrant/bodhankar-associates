import "bootstrap/dist/css/bootstrap.min.css";

import type { AppProps /*, AppContext */ } from "next/app";
import NavbarComponent from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavbarComponent />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
