export default function Logo({
    className = ""
}: {
    className?: string
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
        >
            <path
                fillRule="evenodd"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.5 5.25a1.5 1.5 0 113 0v4.5a1.5 1.5 0 11-3 0v-4.5zM12 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                clipRule="evenodd"
            />
        </svg>
    );
}