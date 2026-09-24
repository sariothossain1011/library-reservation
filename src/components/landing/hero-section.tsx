import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 px-6 py-24 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="mb-4 font-semibold uppercase tracking-widest text-blue-300">
                            Online Library System
                        </p>

                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Reserve Your Favorite Books Easily
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                            Readora is a simple and responsive library reservation
                            system where students can explore books and reserve them
                            online.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/reserve"
                                className="rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-400"
                            >
                                Book Now
                            </Link>

                            <a
                                href="#books"
                                className="rounded-lg border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection