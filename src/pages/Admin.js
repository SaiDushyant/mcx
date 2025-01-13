import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Admin() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await supabase.auth.getUser();
      if (!user.data.user) {
        navigate("/login"); // Redirect to login if not authenticated
      }
    };

    checkAuth();
    fetchFeedbacks();
  }, [navigate]);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("feedback").select("*");
      if (error) throw error;
      setFeedbacks(data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Admin Feedback Panel
      </h1>
      {loading ? (
        <p className="text-gray-600 text-center">Loading feedbacks...</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-gray-600 text-center">No feedbacks available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="border border-gray-300 px-6 py-3 font-medium text-left">
                  Name
                </th>
                <th className="border border-gray-300 px-6 py-3 font-medium text-left">
                  Place
                </th>
                <th className="border border-gray-300 px-6 py-3 font-medium text-left">
                  Email
                </th>
                <th className="border border-gray-300 px-6 py-3 font-medium text-left">
                  Phone
                </th>
                <th className="border border-gray-300 px-6 py-3 font-medium text-left">
                  Service
                </th>
                <th className="border border-gray-300 px-6 py-3 font-medium text-left">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr
                  key={index}
                  className={`text-gray-800 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="border border-gray-300 px-6 py-4">
                    {feedback.name}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    {feedback.place}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    {feedback.email}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    {feedback.phone}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    {feedback.service}
                  </td>
                  <td className="border border-gray-300 px-6 py-4">
                    {feedback.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin;
