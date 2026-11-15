import { ReactNode } from "react";
import Link from "next/link";
import styles from "../styles/components/LinkButton.module.scss";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "text";
  external?: boolean;
  className?: string;
};

const LinkButton = ({ href, children, variant = "outline", external, className }: Props) => {
  const buttonClassName = [styles.button, styles[variant], className].filter(Boolean).join(" ");

  if (external) {
    return (
      <a className={buttonClassName} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={buttonClassName} href={href}>
      {children}
    </Link>
  );
};

export default LinkButton;
