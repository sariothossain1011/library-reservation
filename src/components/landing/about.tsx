import Link from "next/link";
const About = () => {
    return (
        <>
            <section
                id="about"
                className="bg-white px-6 py-20"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 text-center">
                        <p className="font-semibold text-blue-600">
                            WHY Readora?
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900">
                            Simple Library Reservation
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                            Find books quickly, submit a reservation request and
                            manage your library visit with ease.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">

                        {/* Card 1 */}
                        <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
                            <div className="text-4xl">🔎</div>

                            <h3 className="mt-5 text-xl font-bold">
                                Find Books
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Explore popular and useful books available in our
                                library.
                            </p>

                            <Link
                                href="/reserve"
                                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                            >
                                Explore
                            </Link>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
                            <div className="text-4xl">⚡</div>

                            <h3 className="mt-5 text-xl font-bold">
                                Quick Reservation
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Reserve your selected book using our simple online
                                form.
                            </p>

                            <Link
                                href="/reserve"
                                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                            >
                                Reserve
                            </Link>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-2xl bg-slate-50 p-8 shadow-sm">
                            <div className="text-4xl">📚</div>

                            <h3 className="mt-5 text-xl font-bold">
                                Easy Access
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Save time by completing your reservation before
                                visiting.
                            </p>

                            <Link
                                href="/reserve"
                                className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About