import './../styles/globals.css';
import { ProductProvider } from '../context/productContext';

function MyApp({ Component, pageProps }) {
	return (
		<ProductProvider>
			<Component {...pageProps} />
		</ProductProvider>
	);
}

export default MyApp;
