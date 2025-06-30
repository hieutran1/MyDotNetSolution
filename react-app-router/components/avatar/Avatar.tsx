export default function Avatar({
  src,
  square = false,
  initials,
  className,
  slot = 'icon',
  alt
}: {
  src?: string;
  square?: boolean;
  initials?: string;
  className?: string;
  slot?: 'icon' | 'label';
  alt?: string;
}) {
  return (
    <>
      {
        (initials == '' || initials == null) ?
          (
            <span
              data-slot='avatar'
              className={className + ' inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/10 dark:outline-white/10 rounded-full *:rounded-full'}
            >
              <img className="size-full" src={src} alt="hel" />
            </span>
          ) :
          (
            <span
              data-slot='avatar'
              className={className + " inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1 outline -outline-offset-1 outline-black/10 dark:outline-white/10 rounded-full *:rounded-full"}
            >
              <svg
                className="size-full fill-current p-[5%] text-[48px] font-medium uppercase select-none"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <text x="50%" y="50%" alignment-baseline="middle" dominant-baseline="middle" text-anchor="middle" dy=".125em">
                  {initials}
                </text>
              </svg>
            </span>
          )
      }

    </>
  );
}