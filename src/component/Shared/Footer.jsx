import React from 'react';

const Footer = () => {
    return (
        <div>
            <section className='bg-[#15314E] py-8 font-poppins'>
                <div className="footer my-container p-10 text-base-content">
                    <div className='text-white space-y-2 w-full'>
                        <h1 className='text-2xl text-white font-medium'>An excellent education for every child</h1>
                        <p className=''>
                            GreatSchools is the leading nonprofit providing high-quality information that supports parents pursuing a great education for their child, schools striving for excellence, and communities working to diminish inequities in education.
                        </p>
                        <p className='pt-3'>GreatSchools is a 501(c)(3) non-profit organization. Support our mission.</p>
                    </div>
                    <div className='text-blue-500 mr-8'>
                        <h1 className='text-2xl text-white font-medium'>Join us</h1>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className='text-blue-500 mr-8'>
                        <h1 className='text-2xl text-white font-medium'>Learn more</h1>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className='text-blue-500 mr-8'>
                        <h1 className='text-2xl text-white font-medium'>Connect</h1>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
            </section>
            <section className='bg-[#254970] py-10 font-poppins'>
                <h1 className='text-2xl font-medium my-container text-white pl-10'>Find great schools in your community</h1>
                <div className="footer my-container p-10 text-base-content">
                    <div className='text-blue-500'>
                        <a className="link link-hover">Anchorage, AK</a>
                        <a className="link link-hover">Atlanta, GA</a>
                        <a className="link link-hover">Austin, TX</a>
                        <a className="link link-hover">Baltimore, MD</a>
                        <a className="link link-hover">Boise, ID</a>
                        <a className="link link-hover">Atlanta, GA</a>
                        <a className="link link-hover">Boston, MA</a>
                        <a className="link link-hover">Charlotte, NC</a>
                    </div>
                    <div className='text-blue-500'>
                        <a className="link link-hover">Fremont, CA</a>
                        <a className="link link-hover">Grand Rapids, MI</a>
                        <a className="link link-hover">Honolulu, HI</a>
                        <a className="link link-hover">Houston, TX</a>
                        <a className="link link-hover">Huntsville, AL</a>
                        <a className="link link-hover">Indianapolis, IN</a>
                        <a className="link link-hover">Jacksonville, FL</a>
                        <a className="link link-hover">Kansas City, MO</a>
                    </div>
                    <div className='text-blue-500'>
                        <a className="link link-hover">Minneapolis, MN</a>
                        <a className="link link-hover">Newark, NJ</a>
                        <a className="link link-hover">Milwaukee, WI</a>
                        <a className="link link-hover">Oakland, CA</a>
                        <a className="link link-hover">Philadelphia, PA</a>
                        <a className="link link-hover">Phoenix, AZ</a>
                        <a className="link link-hover">Portland, OR</a>
                        <a className="link link-hover">Sacramento, CA</a>
                    </div>
                    <div className='text-blue-500'>
                        <a className="link link-hover">Salt Lake City, UT</a>
                        <a className="link link-hover">San Antonio, TX</a>
                        <a className="link link-hover">San Diego, CA</a>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Seattle, WA</a>
                        <a className="link link-hover">Stamford, CT</a>
                        <a className="link link-hover">Vancouver, WA</a>
                        <a className="link link-hover">West Palm Beach, FL</a>
                    </div>
                </div>
            </section>
            <footer className='bg-[#15314E] text-center font-poppins text-white py-6'>
                <p>©1998-2023 GreatSchools.org All Rights Reserved. GreatSchools is a 501(c)(3) not-for-profit organization</p>
            </footer>
        </div>
    );
};

export default Footer;