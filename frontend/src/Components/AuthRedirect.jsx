import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await fetch(
          "https://shieldher-backend-1h8b.onrender.com/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Status:", res.status);

        if (res.status === 200) {
          navigate("/dashboard");
        } else if (res.status === 404) {
          navigate("/details");
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    checkProfile();
  }, []);

  return <h2>Checking user...</h2>;
};

export default AuthRedirect;