import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginForm() {
  return (
    <div className="mx-auto">
      <form className="border mt-3 mb-5 p-3 bg-white">
        <label className="m-2">Name:</label>
        <input type="text" name="name" placeholder="Your Name"></input>
        <label className="m-2">Email:</label>
        <input type="email" name="email" placeholder="Your Email"></input>
        <div>
          <input
            type="submit"
            value="Login"
            className="btn bg-success text-white my-3 mx-2"
          ></input>
        </div>
      </form>
    </div>
  );
}
