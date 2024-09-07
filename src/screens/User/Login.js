import { useState, startTransition } from "react";
import { createUser } from "../../services/actions/users/users";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    startTransition(() => {
      const body = { email, password }; // Adjust the body as needed

      const onSuccess = () => {
        setLoading(false);
        // Redirect or handle success
      };

      const onFailure = (error) => {
        setLoading(false);
        setError(error.message || "An error occurred");
      };

      dispatch(createUser(body, onSuccess, onFailure));
    });
  };

  return (
    <>
      {loading && (
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="bg-light vh-100 d-flex align-items-center justify-content-center">
        <div className="bg-white p-4 rounded">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
            </div>
            {loading ? (
              <button className="btn btn-primary mt-3" type="button" disabled>
                <span
                  className="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            ) : (
              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            )}
          </form>
          <Link className="mt-3 text-decoration-none" to={"/user/create"}>
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
