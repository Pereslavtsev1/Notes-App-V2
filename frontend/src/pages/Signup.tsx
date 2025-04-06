import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<SignupForm>>({});
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof SignupForm,
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
    const newErrors: Partial<SignupForm> = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

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
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup data:", formData);
      navigate("/login");
    }
  };

  return (
    <div className="w-wdw flex h-dvh flex-col items-center justify-center p-6 md:p-10">
      <div className="border-muted-foreground w-full max-w-sm space-y-4 rounded-lg border p-6 shadow-lg md:p-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-muted-foreground">
            Enter your information to create an account
          </p>
        </div>
        <div className="space-y-8">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Name</label>
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
              <input
                type="text"
                className="base-input rounded-lg"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Email</label>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
              <input
                type="email"
                className="base-input rounded-lg"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Password</label>
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
              <input
                type="password"
                className="base-input rounded-lg"
                value={formData.password}
                onChange={(e) => handleChange(e, "password")}
              />
            </div>
            <Button type="submit" className="w-full font-bold">
              Sign Up
            </Button>
          </form>
          <div className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-semibold underline-offset-4 hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
