import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BiCopyright } from 'react-icons/bi';
import Link from 'next/link';
import { useProduct } from '../context/productContext';

const Layout = ({ children }) => {
	const { products } = useProduct();

	return (
		<div className=' text-white h-screen bg-gradient-to-r from-[#e0c3fc] to-[#8ec5fc]'>
			<header className='flex bg-gray-800 text-white px-28 py-5 items-center justify-between'>
				<Link href={'/'} as={process.env.BACKEND_URL + '/'}>
					<h1 className='font-black text-lg'>
						Products
						<span className='ml-2 text-gray-400 font-bold'>
							{products.length}
						</span>
					</h1>
				</Link>

				<div>
					<Link
						className='text-right'
						href={'/new'}
						as={process.env.BACKEND_URL + '/new'}
					>
						<button className='bg-green-500 inline-flex items-center hover:bg-green-400 px-5 py-2 font-bold rounded'>
							<AiOutlinePlusCircle className='mr-2' />
							Add Product
						</button>
					</Link>
				</div>
			</header>

			<main className='px-28 '>{children}</main>

			<footer className='fixed bottom-0 inline-flex justify-center px-28 bg-gray-800 w-screen h-20'>
				<h3 className='inline-flex items-center'>
					Created by Tomas Mendez <BiCopyright className='ml-2' />{' '}
				</h3>
			</footer>
		</div>
	);
};

export default Layout;
