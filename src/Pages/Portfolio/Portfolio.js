import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
            <div className='text-center mb-8'>
                <h1 className='text-4xl mt-8 font-bold '> My Portfolio</h1>
                <h1 className='text-xl mt-5'>Name: Afsana Ifat</h1>
                <h2 className='text-xl'>Email: roshnirifa998@gmail.com</h2>
            </div>
            <div className='flex justify-around items-center'>

                <div>




                    <h1 className='text-3xl font-bold'>Educational Background</h1>
                    <h3>Shanto Mariam University of Creative Technology</h3>
                    <p>Bsc in CSE (2018- 2022)</p>
                    <h1 className='text-3xl font-bold'>Skill</h1>
                    <p>1. Html</p>
                    <p>2. Html5</p>
                    <p>3. CSS</p>
                    <p>4. CSS3</p>
                    <p>5. TailwindCss</p>
                    <p>6. Bootstrap</p>
                    <p>7. ReactJs</p>
                    <p>8. JS</p>
                    <p>9. Monogodb</p>
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>Projects</h1>
                    <li> <a href="https://phonezone-api.netlify.app/" > PhoneZone</a></li>
                    <li>  <a href="https://roshnirifa.github.io/assignment-2/"></a>Influencer-gears</li>
                    <li><a href="https://warehouse-d5a66.web.app/">WareHouse</a>
                    </li>
                </div>
            </div>


        </div>
    );
};

export default Portfolio;