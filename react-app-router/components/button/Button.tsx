import { Button as ButtonH } from "@headlessui/react";

export default function Button({
  type = 'button',
  color = 'zinc',
  outline = false,
  plain = false,
  disabled = false,
  href,
  children,
  onClick
}: {
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  outline?: boolean;
  plain?: boolean;
  disabled?: boolean;
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <ButtonH
      type={type}
      className={`btn btn-${color}${outline ? '-outline' : ''}${plain ? '-plain' : ''}`}
      disabled={disabled}
    >{children}</ButtonH>
  );
}