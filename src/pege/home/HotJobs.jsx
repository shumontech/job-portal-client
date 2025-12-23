import { div } from 'motion/react-client';
import React, { useEffect, useState } from 'react';

const HotJobs = ({ jobsPromise }) => {

    // const Jobs= use(jobsPromise);
    console.log(jobsPromise)
    const [jobs, setJobs] = useState([]);

    const { title, location, jobtype, category, despription, company, company_logo } = jobs;

    useEffect(() => {

        async function fetchJobs() {
            const response = await jobsPromise;
            console.log('Jobs Promise Changed:', jobsPromise);
            setJobs(response);
        }
        fetchJobs()


    }, [jobsPromise])


    return (
        <div>
            <div className=" rounded-3xl shadow-amber-200 bg-gradient-to-r from-indigo-200 via-green-600 to-pink-600 py-16">
  <h1 className="text-5xl font-extrabold text-center text-white tracking-wide drop-shadow-lg">
    🔥 HOT JOB OF THE DAY
  </h1>
</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">

                {jobs.map((job, index) => (
                    <div key={job._id} className="relative">

                        {/* Top Number Badge */}
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                            <div className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-xl shadow-lg font-bold">
                                {String(index + 1).padStart(2, "0")}
                            </div>
                        </div>

                        {/* Card */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 pt-10 text-center">

                            {/* Icon / Logo */}
                            <div className="flex justify-center mb-4">
                                <img
                                    src={job.company_logo}
                                    alt="Company Logo"
                                    className="w-14 h-14 rounded-full border p-1"
                                />
                            </div>

                            {/* Title */}
                            <h2 className="text-lg font-bold text-gray-800">
                                {job.title}
                            </h2>

                            <p className="text-sm text-gray-500 mb-2">
                                {job.company}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-4">
                                {job.description}
                            </p>

                            {/* Details */}
                            <div className="space-y-1 text-sm text-gray-700">
                                <p>💼 <span className="font-medium">Type:</span> {job.jobType}</p>
                                <p>📂 <span className="font-medium">Category:</span> {job.category}</p>

                                <p className="flex justify-center items-center gap-1">
                                    📍 <span className="font-medium">Location:</span> {job.location}
                                </p>
                            </div>

                            {/* Button */}
                            <div className="mt-5">
                                <button className="btn btn-sm btn-primary rounded-full px-6">
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>






    );
};

export default HotJobs;