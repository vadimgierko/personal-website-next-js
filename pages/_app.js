// import bootstrap css:
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "../contexts/useTheme";

function MyApp({ Component, pageProps }) {
	// import bootstrap:
	useEffect(() => {
		require("bootstrap");
	}, []);

	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
