import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
       <div className="flex items-center bg-base-200 p-2">
        <p className='bg-red-600'>Latest 

        </p>
        <Marquee className='space-x-10'>
            <Link to="/news">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste sint hic maiores reiciendis autem, voluptas odit eaque modi ipsa reprehenderit eos, incidunt veniam saepe libero necessitatibus magnam quam molestiae aspernatur?</Link>
        </Marquee>
       </div>

    );
};

export default LatestNews;