// import bootstrap css:
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "../contexts/useTheme";
import Layout from "../layout";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
	// import bootstrap:
	useEffect(() => {
		require("bootstrap");
	}, []);

	return (
		<ThemeProvider>
			<Layout>
				{/**=============== Google tag (gtag.js) ====================*/}
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-SDYR1XY35B" strategy="afterInteractive" />
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-SDYR1XY35B');
					`}
				</Script>
				{/**=============== Google tag (gtag.js) END ================*/}

				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
