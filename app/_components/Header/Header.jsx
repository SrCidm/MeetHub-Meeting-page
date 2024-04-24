"use client";
import React from 'react';
import './Header.css';
// import PropTypes from 'prop-types';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

const Header = ({}) => {
	return (
		<div className='header'>
			<div className='flex items-baseline justify-between p-5 shadow-sm shadow-yellow-500'>
				<Image className='w-[150px] md:w-[200px]' src="/meethub.svg" alt="meethub" width={100} height={100} />
				<ul className='hidden md:flex gap-14 font-medium text-lg'>
					<li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
					<li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li>
					<li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact us</li>
					<li className='hover:text-primary transition-all duration-300 cursor-pointer'>About us</li>
				</ul>
				<div className='flex gap-5'>
					<LoginLink><Button variant="ghost">Login</Button></LoginLink>
					<RegisterLink><Button>Get Started</Button></RegisterLink>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {};

export default Header;