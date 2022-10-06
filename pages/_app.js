// import bootstrap css:
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "../contexts/useTheme";
import Layout from "../layout";

function MyApp({ Component, pageProps }) {
	// import bootstrap:
	useEffect(() => {
		require("bootstrap");
	}, []);

	return (
		<ThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
