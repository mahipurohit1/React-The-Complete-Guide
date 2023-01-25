import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  console.log(authData);

  const mode = new URL(request.url).searchParams.get("mode") || "signup";
  if (mode !== "signup" && mode !== "login") {
    throw json({ message: "mode is not correct" }, { status: 422 });
  }

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "authentication is failed !!" }, { status: 500 });
  }
  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);
  return redirect("/");
}
