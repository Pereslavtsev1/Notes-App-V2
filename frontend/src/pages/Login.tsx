import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof LoginForm,
  ) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
    setErrors({
      ...errors,
      [key]: undefined,
    });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: Partial<LoginForm> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login data:", formData);
      navigate("/");
    }
  };

  return (
    <div className="w-wdw flex h-dvh flex-col items-center justify-center p-6 md:p-10">
      <div className="border-muted-foreground w-full max-w-sm space-y-4 rounded-lg border p-6 md:p-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="text-muted-foreground">
            Enter your email and password to access your account
          </p>
        </div>
        <div className="space-y-8">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Email</label>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
              <input
                type="email"
                className="base-input rounded-lg"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Password</label>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
              <input
                type="password"
                className="base-input rounded-lg"
                value={formData.password}
                onChange={(e) => handleChange(e, "password")}
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full font-bold">
              Login
            </Button>
          </form>
          <div className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
