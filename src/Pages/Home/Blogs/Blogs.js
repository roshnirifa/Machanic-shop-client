import React from 'react';

const Blogs = () => {
    return (
        <div className=' px-20'>
            <div className='mt-10'>
                <h2 className='text-3xl'>How will you improve the performance of a React Application?</h2>
                <p>
                    1. Keeping component state local where necessary. <br />
                    2.Memoizing React components to prevent unnecessary re-renders.
                    <br />
                    3.Code-splitting in React using dynamic import()
                    <br />
                    4. Windowing or list virtualization in React.

                </p>
                <h2 className='text-3xl'>What are the different ways to manage a state in a React application?</h2>
                <p>There are four waysto manage a state in a React application <br />
                    1.Local state. <br />
                    2. Global state. <br />
                    3. Server state. <br />
                    4.URL state</p>
                <h2 className='text-3xl'> How does prototypical inheritance work?</h2>
                <p>The Prototypal Heritage is a point in javascript used to add styles and parcels in objects. It's a system by which an object can inherit the parcels and styles of another object. Traditionally, in order to get and set of an object, we use Object. getPrototypeOf and Object</p>

                <h2 className='text-3xl'> What is a unit test? Why should write unit tests?</h2>
                <p> Unit Test:
                    <br />
                    <p>This is a type of testing which is done by software inventors in which the lowest testable module of an operation-suchlike functions, procedures or interfaces- are tested to ascertain if they're fit to use.</p>
                    Use: <br />
                    <p>Unit testing ensures that all law meets quality norms before it's stationed. This ensures a dependable engineering terrain where quality is consummate. Over the course of the product development life cycle, unit testing saves time and plutocrat, and helps inventors write better law, more efficiently</p>
                </p>

                <h2 className='text-3xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p>
                    When someone directly update the state, it does not change the state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value then someone will lose control of the state across all components. Thats Why we didnt set the state directly.
                </p>
            </div>
        </div>
    );
};

export default Blogs;