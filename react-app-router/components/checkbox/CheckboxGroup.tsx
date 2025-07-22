export default function CheckboxGroup({
  children,
  role
}: {
  children: React.ReactNode;
  role?: string;
}) {
  return (
    <div
      className="space-y-3 has-data-[slot=description]:space-y-6 has-data-[slot=description]:**:data-[slot=label]:font-medium"
      data-slot="control"
      role={role}
    >
      {children}
    </div>
  );
}