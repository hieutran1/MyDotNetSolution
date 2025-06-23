export default function CheckboxGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="checkbox-group"
      role="group"
    >
      {children}
    </div>
  );
}