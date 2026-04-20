import { useNavigate } from "react-router-dom";

export default function LinkButton({
  to,
  children,
  variant = "orange",
}: LinkButtonProps) {
  const navigate = useNavigate();
  return (
    <button className={variant} onClick={() => navigate(to)}>
      {children}
    </button>
  );
}

type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
  variant: "orange" | "black" | "minimal";
};
