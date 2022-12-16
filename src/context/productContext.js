import { createContext, useContext, useState } from 'react';

let numCode = '';
let num = '0123456789';

export function NumCode(numLength) {
	for (let i = 0; i < numLength; i++) {
		numCode += num.charAt(Math.floor(Math.random() * num.length));
	}

	let result = numCode;

	numCode = '';

	return result;
}

export const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
	const [products, setProduct] = useState([]);

	const createProduct = (title, description, prize) => {
		setProduct([...products, { title, description, prize, id: NumCode(10) }]);
	};

	const updateProduct = (id, updatedProduct) => {
		setProduct([
			...products.map(product =>
				product.id === id ? { ...product, ...updatedProduct } : product
			),
		]);
	};

	const deleteProduct = id =>
		setProduct([...products.filter(product => product.id !== id)]);

	return (
		<ProductContext.Provider
			value={{ products, createProduct, updateProduct, deleteProduct }}
		>
			{children}
		</ProductContext.Provider>
	);
};
