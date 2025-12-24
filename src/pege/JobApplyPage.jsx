import { useParams } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const JobApplyPage = () => {
  const { id } = useParams(); // job id

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      jobId: id,
      ...formData
    };

    try {
      const res = await fetch("http://localhost:3000/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(applicationData)
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted 🎉",
          text: "Your job application has been sent successfully!",
          confirmButtonColor: "#16a34a"
        });

        // form reset
        setFormData({
          name: "",
          email: "",
          phone: "",
          resume: ""
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: data.error || "Something went wrong!",
          confirmButtonColor: "#dc2626"
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to submit application. Please try again later.",
        confirmButtonColor: "#dc2626"
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6">Apply for this Job</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full input input-bordered"
          required
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full input input-bordered"
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full input input-bordered"
          required
        />

        <input
          name="resume"
          value={formData.resume}
          onChange={handleChange}
          placeholder="Resume Link"
          className="w-full input input-bordered"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApplyPage;
