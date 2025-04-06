import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-dvh w-wdw items-center justify-center flex flex-col p-6 md:p-10">
      <div className="w-full max-w-sm border rounded-lg space-y-6 p-6 md:p-10 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold ">Login</h1>
          <p className="text-muted-foreground">
            Enter your email and password to access your account
          </p>
        </div>
        <div className="space-y-10">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Email</label>
              <input type="email" className="base-input  rounded-lg" />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Password</label>
              <input type="password" className="base-input  rounded-lg" />
            </div>
          </form>
          <div className="flex flex-col space-y-4">
            <Button className="w-full font-bold">Login</Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary underline-offset-4 hover:underline"
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
