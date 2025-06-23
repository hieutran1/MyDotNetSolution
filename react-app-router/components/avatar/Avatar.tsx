export default function Avatar({
  src,
  square = false,
  initials,
  className
}: {
  src?: string;
  square?: boolean;
  initials?: string;
  className?: string;
}) {
  return (
    <span
      className={`${className} ${
        square ? 'rounded-none' : 'rounded-full'
      }`} />
  );
}