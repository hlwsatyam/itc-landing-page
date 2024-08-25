import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const isAdminLogged = localStorage.getItem("adminLogged");
    if (isAdminLogged === "true") {
      fetchData();
    } else {
      window.location.href = "/";
    }
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/leads", {});
      if (res.status === 200) {
        setLeads(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Lead Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Phone
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold uppercase">
                Address
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {leads?.map((lead, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="px-4 py-3">{lead.name}</td>
                <td className="px-4 py-3">{lead.email}</td>
                <td className="px-4 py-3">{lead.mobile}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      lead.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {lead.postOffice}, {lead.disctict}, {lead.state},
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {leads?.length === 0 && (
          <div className="py-8 text-center text-gray-500">No leads found</div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
