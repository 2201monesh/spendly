import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate();

  // form state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    const user = data.user ?? data.session?.user;

    if (!user) {
      setErrorMsg("Login failed!");
      return;
    }

    // Success → redirect
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleLogin}>
                <FieldGroup>
                  {errorMsg && (
                    <p className="text-red-500 text-sm mb-2">{errorMsg}</p>
                  )}

                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </Field>

                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      {/* <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot password?
                      </a> */}
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={form.password}
                      onChange={handleChange}
                    />
                  </Field>

                  <Field>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Logging in..." : "Login"}
                    </Button>

                    <Button variant="outline" type="button">
                      Login with Google
                    </Button>

                    <FieldDescription className="text-center">
                      Don&apos;t have an account?{" "}
                      <a href="/signup" className="underline">
                        Sign up
                      </a>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
