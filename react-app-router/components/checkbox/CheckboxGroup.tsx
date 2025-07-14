export default function CheckboxGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="space-y-3 has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
      data-slot="control"
    >
      {children}
    </div>
  );
}