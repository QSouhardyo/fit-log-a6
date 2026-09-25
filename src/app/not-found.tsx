import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center px-4">

            <div className="text-center">

                <h1 className="text-5xl font-bold">
                    Workout Not Found
                </h1>

                <p className="mt-4 text-gray-400">
                    The workout you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-6 px-6 py-3 rounded-lg bg-[#C2F800] text-black font-bold"
                >
                    Back to Workouts
                </Link>

            </div>

        </div>
    );
};

export default NotFound;