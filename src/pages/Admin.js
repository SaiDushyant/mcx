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
    <div className="p-6 bg-gradient-to-r from-blue-50 via-white to-indigo-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800 text-center">
        Admin Feedback Panel
      </h1>
      {loading ? (
        <p className="text-gray-600 text-center">Loading feedbacks...</p>
      ) : feedbacks.length === 0 ? (
        <p className="text-gray-600 text-center">No feedbacks available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                {feedback.name}
              </h2>
              <p className="text-gray-600 mb-1">
                <strong>Place:</strong> {feedback.place}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Email:</strong> {feedback.email}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Phone:</strong> {feedback.phone}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Service:</strong> {feedback.status}
              </p>
              <p className="text-gray-600">
                <strong>Message:</strong> {feedback.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Admin;
