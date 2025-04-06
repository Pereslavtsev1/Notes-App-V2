import { ReactNode } from "react";
import { Button } from "../ui/button";

interface InputFieldProps {
  label: string;
  id: string;
  type?: "text" | "email" | "password";
  description?: string;
}

const InputField = ({ label, type = "text", description }: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-lg font-semibold">{label}</label>
    <input type={type} className="base-input max-w-64 rounded-lg" />
    {description && (
      <p className="text-muted-foreground text-sm">{description}</p>
    )}
  </div>
);

interface SectionProps {
  title: string;
  description: string;
  children: ReactNode;
  buttonLabel: string;
}

const Section = ({
  title,
  description,
  children,
  buttonLabel,
}: SectionProps) => (
  <div>
    <div className="flex flex-col items-start gap-y-8">
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <form className="flex flex-col gap-y-8">{children}</form>
      <Button>{buttonLabel}</Button>
    </div>
  </div>
);
const AccountSettings = () => {
  return (
    <div className="space-y-10">
      <Section
        title="Account"
        description="Update your account settings."
        buttonLabel="Update Profile"
      >
        <InputField
          label="Email"
          id="email"
          type="email"
          description="We'll never share your email with anyone else."
        />
        <InputField
          label="Username"
          id="username"
          description="This is your public display name. It can be your real name or a pseudonym."
        />
      </Section>

      <Section
        title="Security"
        description="Update your security preferences."
        buttonLabel="Update Password"
      >
        <InputField
          label="Current Password"
          id="currentPassword"
          type="password"
        />
        <InputField
          label="New Password"
          id="newPassword"
          type="password"
          description="Password must be at least 8 characters long."
        />
        <InputField
          label="Confirm New Password"
          id="confirmNewPassword"
          type="password"
        />
      </Section>
    </div>
  );
};

export default AccountSettings;
