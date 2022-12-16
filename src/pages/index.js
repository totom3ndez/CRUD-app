import Layout from '../components/Layout';
import { useProduct } from '../context/productContext';
import { VscTrash, VscEdit } from 'react-icons/vsc';
import { useRouter } from 'next/router';

const Home = () => {
	const { products, deleteProduct } = useProduct();
	const { push } = useRouter();
	return (
		<Layout>
			<div className='flex justify-center'>
				{products.length === 0 ? (
					<h2 className='mt-10 bg-gray-600 px-4 py-2 rounded-md'>
						There are no Products
					</h2>
				) : (
					<div>
						{products.map(product => (
							<div
								key={product.id}
								className='relative bg-gray-700 cursor pointer px-20 py-5 m-2 rounded-lg hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]'
							>
								<h1 className='font-bold mb-2'>{product.title}</h1>
								<div className='absolute right-2 top-2 flex gap-2'>
									<button
										onClick={() => {
											push('/edit/' + product.id);
										}}
										className='inline-flex font-bold items-center bg-yellow-400 hover:bg-yellow-500 px-1 rounded-sm'
									>
										<VscEdit className='mr-2' />
										Edit
									</button>
									<button
										className='inline-flex items-center font-bold bg-red-400 hover:bg-red-500 px-1 rounded-sm'
										onClick={e => {
											e.stopPropagation();
											deleteProduct(product.id);
										}}
									>
										<VscTrash />
										Delete
									</button>
								</div>
								<p className='text-gray-300'>{product.description}</p>
								<p className='font-bold mb-2'>${product.prize}</p>
								<span className='text-gray-400'>
									<span className='font-semibold'>Product ID: </span>
									{product.id}
								</span>
							</div>
						))}
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Home;
