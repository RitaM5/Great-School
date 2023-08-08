import React from 'react';
import home_hero from "../../../assets/home_hero.png"
import compare_desktop from "../../../assets/compare_desktop.png"
import review from "../../../assets/review.png"
import follow from "../../../assets/follow.png"
import osp from "../../../assets/osp.png"
import { BsChevronRight } from 'react-icons/bs';
import Footer from '../../Shared/Footer';
const Home = () => {
    return (
        <>
            <div className='bg-[#f0ebeb]'>
                <div className='my-container py-44 grid grid-cols-1 lg:grid-cols-2  items-center gap-20 lg:gap-72 '>
                    <div className=' w-full text-center lg:text-left'>
                        <div className='space-y-10 px-2 font-poppins'>
                            <h1 className='text-4xl font-bold'>Find a great school.</h1>
                            <div className="join">
                                <div>
                                    <div className='relative'>
                                        <input className=" h-14 w-[280px] md:w-[310px] lg:w-[250px] input input-bordered join-item" placeholder="School name, level, or type" />
                                        <button className=" rounded-lg   absolute right-2  mt-2"><img src="https://img.icons8.com/nolan/40/google-web-search.png" alt="google-web-search" /></button>
                                    </div>
                                </div>
                                <div className="relative lg:block hidden">
                                    <input className="input h-14 w-[250px] input-bordered join-item" placeholder="Address, city or zip" />
                                    <button className=" rounded-lg   absolute right-2 mr-2  mt-2"><img src="https://img.icons8.com/nolan/40/google-web-search.png" alt="google-web-search" /></button>
                                </div>

                            </div>
                            <div className='flex justify-center lg:justify-normal gap-6 lg:gap-12 text-center'>
                                <div>
                                    <img className='mx-auto mb-4' src="https://www.greatschools.org/webpack/top_rated_icon_2e43787d540e1e30dbd9a0e7b0f55b6c.svg" alt="" srcset="" />
                                    <a href="" target="_blank" rel="noopener noreferrer"><span className=' hover:underline'>Top-rated <br />schools</span></a>
                                </div>
                                <div>
                                    <img className='mx-auto mb-4' src="https://www.greatschools.org/webpack/equitable_schools_icon_525812aed75f83dcac4339366cd19a9e.svg" alt="" srcset="" />
                                    <a href="" target="_blank" rel="noopener noreferrer"><span className=' hover:underline'>Equitable<br /> schools</span></a>
                                </div>
                                <div>
                                    <img className='mx-auto mb-4' src="https://www.greatschools.org/webpack/ap_course_icon_a237e2ee8b63032d45670e7648fcc6ff.svg" alt="" srcset="" />
                                    <a className=' hover:underline-offset-2' href="" target="_blank" rel="noopener noreferrer"><span className=' hover:underline'>Offers AP <br />courses</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full '>
                        <img className='h-[400px] mx-auto' src={home_hero} alt="" srcset="" />
                    </div>
                </div>
            </div>
            {/* second section */}
            <section className=' font-poppins bg-slate-100'>
                <div className='my-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-72 items-center px-2 lg:px-24'>
                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 className=' text-3xl font-semibold'>Compare and choose.</h1>
                        <p className='text-lg'>Create a list of your top schools to quickly compare and find the best fit.</p>
                        <p className='pt-3 inline-flex gap-3 items-center text-blue-500 text-2xl font-semibold'> <a href="" className='hover:underline'>Start my list</a> <span><BsChevronRight /></span></p>
                    </div>
                    <div>
                        <img src={compare_desktop} className='h-[480px] mx-auto' alt="" srcset="" />
                    </div>
                </div>
            </section>
            {/* third section */}
            <section className='font-poppins bg-slate-100'>
                <div className='my-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-72 items-center px-2 lg:px-24'>
                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 className=' text-3xl font-semibold'>Share your experience.</h1>
                        <p className='text-lg'>Join over 200K people who help their school communities with reviews.</p>
                        <p className='pt-3 inline-flex gap-3 items-center text-blue-500 text-2xl font-semibold'> <a href="" className='hover:underline'>Review your school
                        </a> <span><BsChevronRight /></span></p>
                    </div>
                    <div>
                        <img src={review} className='h-[480px] mx-auto' alt="" srcset="" />
                    </div>
                </div>
            </section>
            {/* fourth section */}
            <section className=' font-poppins bg-slate-100'>
                <div className='my-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-72 items-center px-2 lg:px-24'>
                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 className=' text-3xl font-semibold'>Get emails about your school.</h1>
                        <p className='text-lg'>Follow schools to receive email updates when new information is available.</p>
                        <p className='pt-3 inline-flex gap-3 items-center text-blue-500 text-2xl font-semibold'> <a href="" className='hover:underline'>Follow your school
                        </a> <span><BsChevronRight /></span></p>
                    </div>
                    <div>
                        <img src={follow} className='h-[480px] mx-auto' alt="" srcset="" />
                    </div>
                </div>
            </section>
            {/* fifth section */}
            <section className=' font-poppins'>
                <div className='my-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-72 items-center px-2 lg:px-24'>
                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 className=' text-3xl font-semibold'>Work at a school?</h1>
                        <p className='text-lg'>Claim your school to add and update information, link to your enrollment application, and reply to reviews.</p>
                        <p className='pt-3 inline-flex gap-3 items-center text-blue-500 text-2xl font-semibold'> <a href="" className='hover:underline'>Claim your school
                        </a> <span><BsChevronRight /></span></p>
                    </div>
                    <div>
                        <img src={osp} className='h-[480px] mx-auto' alt="" srcset="" />
                    </div>
                </div>
            </section>
            {/* six section */}

            <svg className="blue-background font-poppins w-full" width="100%" viewBox="0 0 1401 529" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 529V0C120.745 116.047 983.679 107.796 1400.05 122.435V529H0Z" fill="#EAF1F4"></path>
                <foreignObject x="0" y="0" width="100%" height="100%">
                    <section className=''>

                        <div className='my-container grid  py-44  grid-cols-5 gap-9 lg:gap-0 items-center lg:py-44  lg:px-40'>

                            <div className='text-center'>
                                <img className='mx-auto rounded-full p-2 border mb-3 border-gray-500' src="https://img.icons8.com/stickers/50/about--v1.png" alt="about--v1" />
                                <a href="" target="_blank" rel="noopener noreferrer"><span className=' hover:underline'>About<br /> GreatSchools</span></a>
                            </div>
                            <div className='text-center'>
                                <img className='mx-auto rounded-full p-2 border mb-3 border-gray-500' src="https://img.icons8.com/ios/50/ratings.png" alt="ratings" />
                                <a href="" target="_blank" rel="noopener noreferrer"><span className=' hover:underline'>Data and<br /> ratings</span></a>
                            </div>
                            <div className='text-center'>
                                <img className='mx-auto rounded-full p-2 border mb-3 border-gray-500' src="https://img.icons8.com/ios/50/parenting.png" alt="parenting" />
                                <a href="" target="_blank" rel="noopener noreferrer"><span className=' hover:underline'>Parenting<br /> resources</span></a>
                            </div>
                            <div className='text-center'>
                                <img className='mx-auto rounded-full p-2 border mb-3 border-gray-500' src="https://img.icons8.com/nolan/50/handshake.png" alt="handshake" />
                                <a href="" target="_blank" rel="noopener noreferrer"><span className=' hover:underline'>Partnership<br /> and licensing</span></a>
                            </div>
                            <div className='text-center'>
                                <img className='mx-auto rounded-full p-2 border mb-3 border-gray-500' src="https://img.icons8.com/stickers/50/ratings.png" alt="ratings" />
                                <a href="" target="_blank" rel="noopener noreferrer"><span className=' hover:underline'>Research<br /> reports</span></a>
                            </div>
                        </div>
                    </section>
                </foreignObject>
            </svg>

        </>
    );
};

export default Home;