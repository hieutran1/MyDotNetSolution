export default function Avatar({
  src,
  square = false,
  initials,
  className,
  slot = 'icon',
}: {
  src?: string;
  square?: boolean;
  initials?: string;
  className?: string;
  slot?: 'icon' | 'label';
}) {
  return (
    <span
      className={`${className} ${
        square ? 'rounded-none' : 'rounded-full'
      }`} />
  );
}