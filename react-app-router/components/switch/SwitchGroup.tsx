export default function SwitchGroup({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      data-slot="control"
      className="space-y-3 **:data-[slot=label]:font-normal has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium">
      {children}
    </div>
  );
}