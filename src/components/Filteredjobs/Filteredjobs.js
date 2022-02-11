import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Locations from '../Locations/Locations';
import JobStatus from '../JobStatus/JobStatus';
import './Filteredjobs.css';

const Filteredjobs = () => {
    const [control, setControl] = useState('categories');
    return (
        <div className=' detailbody'>
            <div className='pt-5 ms-4' >
                <button className='p-2 button' onClick={() => setControl("categories")}>
                    Categories
                </button>

                <button className='p-2 ms-4 button'
                    onClick={() => setControl("locations")}

                >
                    Locations
                </button>
                <button className='p-2 ms-3 button'
                    onClick={() => setControl("status")}

                >
                    Employment Status
                </button>
            </div>
            <div >

                {control === "categories" && <Categories></Categories>}
                {control === "locations" && <Locations></Locations>}
                {control === "status" && <JobStatus></JobStatus>}




            </div>

        </div>
    );
};

export default Filteredjobs;