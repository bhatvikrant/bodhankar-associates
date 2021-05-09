import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import PropTypes from 'prop-types'

// MUI
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'

// TAILWIND
import 'tailwindcss/tailwind.css'

// COMPONENTS
import Navbar from '../components/Navbar/index'
import Footer from '../components/Footer/index'

export default function MyApp({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<React.Fragment>
			<Head>
				<title>Bodhankar & Associates</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="icon"
					type="image/png"
					href="/favicon.jpg" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired
}
