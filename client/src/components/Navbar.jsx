import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("token")
    )
    const [menuOpen, setMenuOpen] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"))
        setMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [location.pathname])

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        navigate("/")
    }

    const links = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Services", path: "/services" },
        { name: "Why Choose Us", path: "/why-choose-us" },
        { name: "Contact", path: "/contact" }
    ]

    return (
        <nav className="sticky top-0 z-50 border-b border-blue-500/20 bg-[#020817]/95 shadow-xl shadow-black/20 backdrop-blur-md">

            <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:h-[86px] sm:px-6">

                <Link
                    to="/"
                    className="min-w-0 shrink-0 leading-none"
                >
                    <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-base font-black tracking-wide text-white sm:text-2xl">
                            MANI
                        </span>

                        <span className="text-base font-black tracking-wide text-blue-400 sm:text-2xl">
                            ELECTRICALS
                        </span>
                    </div>

                    <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2 sm:gap-2">
                        <span className="h-[2px] w-5 bg-yellow-400 sm:w-7" />

                        <span className="text-[7px] font-bold tracking-[0.18em] text-slate-300 sm:text-xs sm:tracking-[0.25em]">
                            & ELECTRONICS
                        </span>
                    </div>
                </Link>

                <div className="hidden items-center gap-5 lg:flex">

                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className="whitespace-nowrap font-semibold text-slate-200 transition hover:text-blue-400"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {isLoggedIn ? (
                        <>
                            <Link
                                to="/admin"
                                className="whitespace-nowrap rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-2.5 font-bold text-blue-300 transition hover:bg-blue-500/20"
                            >
                                Dashboard
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="whitespace-nowrap rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2.5 font-bold text-red-300 transition hover:bg-red-500/20"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="whitespace-nowrap rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-2.5 font-bold text-blue-300 transition hover:bg-blue-500/20"
                        >
                            Admin use
                        </Link>
                    )}

                    <Link
                        to="/contact"
                        className="whitespace-nowrap rounded-xl bg-yellow-400 px-5 py-3 font-black text-[#06112f] shadow-lg shadow-yellow-400/20 transition hover:-translate-y-0.5 hover:bg-yellow-300"
                    >
                        Request a Quote
                    </Link>

                </div>

                <div className="flex shrink-0 items-center gap-2 lg:hidden">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/40 text-lg text-white transition hover:bg-blue-500/10 sm:h-11 sm:w-11"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                </div>

            </div>

            {menuOpen && (
                <div className="border-t border-blue-500/20 bg-[#020817] px-5 py-5 shadow-lg lg:hidden">

                    <div className="flex flex-col gap-1">

                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="rounded-lg px-3 py-3 font-semibold text-slate-200 transition hover:bg-blue-500/10 hover:text-blue-400"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="mt-3 flex flex-col gap-3 border-t border-blue-500/20 pt-4">

                            {isLoggedIn ? (
                                <>
                                    <Link
                                        to="/admin"
                                        className="rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-3 text-center font-bold text-blue-300"
                                    >
                                        Dashboard
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 font-bold text-red-300"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className="rounded-lg border border-blue-500/50 bg-blue-500/10 px-4 py-3 text-center font-bold text-blue-300"
                                >
                                    Admin use
                                </Link>
                            )}

                            <Link
                                to="/contact"
                                className="rounded-xl bg-yellow-400 px-5 py-3 text-center font-black text-[#06112f]"
                            >
                                Request a Quote
                            </Link>

                        </div>

                    </div>

                </div>
            )}

        </nav>
    )
}

export default Navbar