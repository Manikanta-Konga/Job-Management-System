import axios from "axios";
import { useEffect, useState } from "react";

export default function ShowJobs() {

    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/jobs")
            .then(res => setJobsData(res.data.data))
            .catch((error) => {
                console.log(jobsData);
                console.log("Error Occured")
                console.log(error);
            })
    }, [])


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card shadow">
                            <h2 className="text-center fw-bold mt-3">All Jobs</h2>
                            <div className="card-body table-responsive">
                                <table className="table table-striped table-bordered table-hover">
                                    <thead className="bg-dark text-white">
                                        <tr>
                                            <th>Job Title</th>
                                            <th>Company Name</th>
                                            <th>Location</th>
                                            <th>Salary</th>
                                            <th>Job Type</th>
                                            <th>Experience</th>
                                            <th>Description</th>
                                            <th>Skills</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {
                                            jobsData.map(job => (
                                                <tr>
                                                    <td>{job.title}</td>
                                                    <td>{job.companyName}</td>
                                                    <td>{job.location}</td>
                                                    <td>{job.salary}</td>
                                                    <td>{job.jobType}</td>
                                                    <td>{job.experience}</td>
                                                    <td>{job.description}</td>
                                                    <td>
                                                        {
                                                            job.skills.map(skill => (
                                                                <span>[{skill}] </span>))
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}