import React from 'react'

const Footer = () => {
    return (
        <>
            <footer
                id="contact"
                className="bg-slate-900 px-6 py-12 text-white"
            >
                <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

                    <div>
                        <h3 className="text-2xl font-bold text-blue-400">
                            Readora
                        </h3>

                        <p className="mt-3 text-slate-400">
                            A simple online library book reservation system for
                            students.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold">Contact</h4>

                        <p className="mt-3 text-slate-400">
                            Email: library@Readora.com
                        </p>

                        <p className="text-slate-400">
                            Phone: +880 1234-567890
                        </p>

                        <p className="text-slate-400">
                            Dhaka, Bangladesh
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold">Follow Us</h4>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <a
                                href="#"
                                className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-blue-600"
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-blue-600"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-blue-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
                    © 2026 Readora Library. All rights reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer