import { Link } from "react-router-dom";

const buttonVariants = {
  primary: `
    p-5 text-md rounded-lg border border-white 
    hover:text-black
    hover:bg-white
    hover:border-transparent
    transition-all
    duration-250
    ease-in-out
    `,
  secondary: `
    p-5 text-md rounded-lg border border-blue 
    hover:text-white
    hover:bg-blue
    hover:border-transparent
    transition-all
    duration-250
    ease-in-out
    `,
};

type ButtonVariant = keyof typeof buttonVariants;
interface ButtonProps {
  title: string;
  variant: ButtonVariant;
  linkTo?: string;
  onClick?: () => void;
}

const Button = ({ title, variant, linkTo, onClick }: ButtonProps) => {
  if (linkTo) {
    return (
      <Link to={linkTo}>
        <button className={buttonVariants[variant]} onClick={onClick}>
          {title}
        </button>
      </Link>
    );
  }
  return (
    <button className={buttonVariants[variant]} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
