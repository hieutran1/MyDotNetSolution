import * as Headless from "@headlessui/react";

export default function Button({
  type = 'button',
  color = 'zinc',
  outline = false,
  plain = false,
  disabled = false,
  href,
  children,
  onClick,
  className = ''
}: {
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  outline?: boolean;
  plain?: boolean;
  disabled?: boolean;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Headless.Button
      as={href ? 'a' : 'button'}
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Headless.Button>
  );
}