import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useProduct } from '../context/productContext';
import { useRouter } from 'next/router';

const ProductFormPage = () => {
	const [product, setProduct] = useState({
		title: '',
		description: '',
	});

	const { createProduct, updateProduct, products } = useProduct();
	const { push, query } = useRouter();

	const handleChange = e => {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (!query.id) {
			createProduct(product.title, product.description, product.prize);
		} else {
			updateProduct(query.id, product);
		}

		push('/');
	};

	useEffect(() => {
		if (query.id) {
			const productFound = products.find(product => product.id === query.id);
			setProduct({
				title: productFound.title,
				description: productFound.description,
				prize: productFound.prize,
			});
		}
	}, []);

	return (
		<Layout>
			<form
				onSubmit={handleSubmit}
				className='bg-gray-600 py-5 px-5 mt-5 rounded-xl'
			>
				<h1 className='text-lg text-center font-semibold mb-2'>
					{query.id ? `Update product` : 'Create a product'}
				</h1>
				<input
					className='rounded-xl bg-gray-800 focus:text-gray 100 focus:outline-none w-full py-3 px-4 mb-5'
					name='title'
					type='text'
					placeholder='Write a title'
					onChange={handleChange}
					value={product.title}
				/>
				<textarea
					className='rounded-xl bg-gray-800 focus:text-gray 100 focus:outline-none w-full py-3 px-4 mb-5'
					name='description'
					rows='2'
					placeholder='Wirte a description'
					onChange={handleChange}
					value={product.description}
				></textarea>
				<input
					className='rounded-xl bg-gray-800 focus:text-gray 100 focus:outline-none w-full py-3 px-4 mb-5'
					name='prize'
					type='number'
					placeholder='Write a prize'
					onChange={handleChange}
					value={product.prize}
				/>

				<button
					className='disabled:opacity-30 rounded-xl bg-green-500 hover:bg-green-400 px-4 py-2'
					disabled={!product.title}
				>
					Save
				</button>
			</form>
		</Layout>
	);
};

export default ProductFormPage;
