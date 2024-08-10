import { useState } from "react";
import { createUser } from "../../services/actions/users/users";
import { useDispatch } from "react-redux";

const Create = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    // const body = { username: username, email: email, password: password };
    // const onSuccess = () => {};
    // const onFailure = () => {};
    // dispatch(createUser(body, onSuccess, onFailure));
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
      <div className="bg-white vh-100 d-flex align-items-center justify-content-center">
        <div className="bg-light p-4 rounded">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                disabled={loading ? true : false}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                disabled={loading ? true : false}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                disabled={loading ? true : false}
                required
              />
            </div>
            {loading ? (
              <button class="btn btn-primary" type="button" disabled>
                <span
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            ) : (
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
