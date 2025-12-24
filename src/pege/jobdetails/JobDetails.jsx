import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock } from "react-icons/fa";

const JobDetails = () => {
    const { title,
        _id,
        company,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        requirements,
        responsibilities,
        company_logo,
        hr_name,
        hr_email } = useLoaderData();




    return (
        <div className='my-10'>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border">

                {/* Header */}
                <div className="flex items-center gap-6 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                    <img
                        src={company_logo}
                        alt="Company Logo"
                        className="w-20 h-20 rounded-xl bg-white p-2"
                    />
                    <div>
                        <h2 className="text-3xl font-bold">{title}</h2>
                        <p className="text-lg opacity-90">{company}</p>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">

                    {/* Meta Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-indigo-600" />
                            {location}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaBriefcase className="text-indigo-600" />
                            {jobType} • {category}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaMoneyBillWave className="text-indigo-600" />
                            {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
                        </p>
                        <p className="flex items-center gap-2">
                            <FaClock className="text-indigo-600" />
                            Deadline: {applicationDeadline}
                        </p>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Job Description</h3>
                        <p className="text-gray-600 leading-relaxed">{description}</p>
                    </div>

                    {/* Requirements & Responsibilities */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {responsibilities.map((res, index) => (
                                    <li key={index}>{res}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* HR Info */}
                    <div className="bg-gray-50 p-4 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <p className="font-semibold">HR Contact</p>
                            <p className="text-gray-600">{hr_name}</p>
                            <p className="text-gray-600">{hr_email}</p>
                        </div>

                        <Link to={`/apply/${_id}`}>
                            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold">
                                Apply Now
                            </button>
                        </Link>

                    </div>


                </div>
            </div>


        </div>
    );
};

export default JobDetails;