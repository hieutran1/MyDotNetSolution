export default function Flag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-white bg-red-500 rounded-full">
            {children}
        </span>
    );
}