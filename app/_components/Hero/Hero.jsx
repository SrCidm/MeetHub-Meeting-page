"use client";
import { Button } from '@/components/ui/button';
import React from 'react';
import Link from 'next/link';
//import PropTypes from 'prop-types';
import Image from "next/image";

const Hero = ({}) => {
	return (
		<div className='hero flex flex-col justify-center items-center my-20'>
			<div className='hidden lg:block'>
				<Image src='/imagen1.jpeg' alt='imagen1' width={150} height={150} className='h-[150px] object-cover rounded-3xl absolute right-2'/>
				<Image src='/imagen2.jpeg' alt='imagen2' width={150} height={150} className='h-[150px] object-cover rounded-3xl absolute top-22 left-20'/>
				<Image src='/imagen3.jpeg' alt='imagen3' width={150} height={150} className='h-[150px] object-cover rounded-3xl absolute bottom-60 left-10'/>
				<Image src='/imagen4.jpeg' alt='imagen4' width={150} height={150} className='h-[150px] object-cover rounded-3xl absolute right-40 bottom-60'/>
			</div>
			<div className='text-center max-w-3xl'>
				<h2 className='font-bold text-[60px] text-slate-500'>
					Seductive Scheduling, No Shades Needed 
				</h2>
				<h2 className='text-xl mt-5 text-slate-300'>
					Meethub: Making calendar coordination sexier than a steamy novel.
				</h2>
				<div className='flex gap-4 flex-col mt-5'>
					<h3 className='text-sm'>
						Sign Up with Google and Facebook
					</h3>
					<div className='flex justify-center gap-8'>
						<Button className='p-6 flex gap-4'>
							<Image src='/google.png' alt="Google" width={40} height={40} />
							Sign up with Google
						</Button>
						<Button className='p-6 flex gap-4'>
							<Image src='/facebook.png' alt="Google" width={40} height={40} />
							Sign up with Facebook
						</Button>
					</div>
					<hr></hr>
					<h2><Link href='' className='text-primary'>Sign up Free with your Email</Link></h2>
				</div>
			</div>
 		</div>
	);
};

Hero.propTypes = {};

export default Hero;
