import React, { useEffect, useState } from 'react';
import Tools from '../Tools/Tools';

const OurTools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('ourTools.json')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='px-20'>
            <h1 className='text-5xl text-primary text-center font-bold my-7'>Our Tools</h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tools
                        tool={tool}
                    ></Tools>)
                }
            </div>



        </div>
    );
};

export default OurTools;