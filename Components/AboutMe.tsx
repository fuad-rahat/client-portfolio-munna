"use client";
import React from "react";

const AboutMe = () => {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-24">

            {/* Subtle Background Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96
                            rounded-full bg-indigo-600/10 blur-3xl" />

            <div className="absolute -bottom-40 -left-40 w-96 h-96
                            rounded-full bg-cyan-600/10 blur-3xl" />

            <div className="relative max-w-6xl mx-auto px-6">

                <div className="flex flex-col md:flex-row
                                items-center gap-10">


                    {/* ================= PROFILE IMAGE ================= */}

                    <div className="relative w-full md:w-1/2 group">

                        <div className="overflow-hidden
                                        md:shadow-2xl
                                        transition-transform
                                        duration-500">

                            <img
                                src="/Basic photos/munna_image2.jpeg"
                                alt="Profile of Munna"
                                className="w-[12rem] md:w-full
                                           h-[12rem] md:h-[80rem]
                                           mx-auto
                                           rounded-full md:rounded-2xl
                                           object-cover
                                           border border-white/10"
                            />

                        </div>

                    </div>


                    {/* ================= TEXT CONTENT ================= */}

                    <div className="w-full md:w-1/2 space-y-10">


                        {/* ================= INTRODUCTION ================= */}

                        <div className="space-y-4">

                            <span
                                className="inline-flex items-center gap-2
                                           px-3 py-1.5
                                           rounded-full
                                           bg-indigo-500/10
                                           border border-indigo-400/20
                                           text-xs font-semibold
                                           tracking-wider
                                           text-indigo-300 uppercase"
                            >
                                <span className="w-1.5 h-1.5 rounded-full
                                                 bg-indigo-400" />

                                About Me
                            </span>


                            <h2
                                className="mt-5 text-4xl md:text-5xl
                                           font-bold tracking-tight
                                           text-white"
                            >
                                Hello, I’m Munna
                            </h2>


                            <p
                                className="mt-5 text-lg leading-8
                                           text-slate-300"
                            >
                                I’m a Software Engineering student at
                                Daffodil International University passionate
                                about AI, Data Science, Deep Learning, and
                                research. I enjoy combining technology, data,
                                and research to build practical solutions for
                                real-world problems.
                            </p>

                        </div>


                        {/* ================= WHAT I DO ================= */}

                        <div>

                            <h2
                                className="text-3xl font-semibold
                                           text-white mb-6"
                            >
                                What I Do
                            </h2>


                            <div className="space-y-5">


                                {/* AI & Machine Learning */}
                                <div className="flex gap-4">

                                    <div
                                        className="mt-1 w-10 h-10 shrink-0
                                                   rounded-xl
                                                   bg-gradient-to-br
                                                   from-indigo-500
                                                   to-blue-500
                                                   text-white
                                                   shadow-lg
                                                   shadow-indigo-500/20
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-brain text-sm" />
                                    </div>


                                    <div>
                                        <h3
                                            className="font-semibold
                                                       text-white"
                                        >
                                            AI & Machine Learning
                                        </h3>

                                        <p
                                            className="mt-1
                                                       text-slate-400"
                                        >
                                            Developing intelligent
                                            predictive solutions.
                                        </p>
                                    </div>

                                </div>


                                {/* Data Science */}
                                <div className="flex gap-4">

                                    <div
                                        className="mt-1 w-10 h-10 shrink-0
                                                   rounded-xl
                                                   bg-gradient-to-br
                                                   from-cyan-400
                                                   to-blue-500
                                                   text-white
                                                   shadow-lg
                                                   shadow-cyan-500/20
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-chart-line text-sm" />
                                    </div>


                                    <div>
                                        <h3
                                            className="font-semibold
                                                       text-white"
                                        >
                                            Data Science
                                        </h3>

                                        <p
                                            className="mt-1
                                                       text-slate-400"
                                        >
                                            Analyzing data and discovering
                                            meaningful insights.
                                        </p>
                                    </div>

                                </div>


                                {/* Deep Learning & XAI */}
                                <div className="flex gap-4">

                                    <div
                                        className="mt-1 w-10 h-10 shrink-0
                                                   rounded-xl
                                                   bg-gradient-to-br
                                                   from-purple-500
                                                   to-fuchsia-500
                                                   text-white
                                                   shadow-lg
                                                   shadow-purple-500/20
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-network-wired text-sm" />
                                    </div>


                                    <div>
                                        <h3
                                            className="font-semibold
                                                       text-white"
                                        >
                                            Deep Learning & XAI
                                        </h3>

                                        <p
                                            className="mt-1
                                                       text-slate-400"
                                        >
                                            Working with computer vision
                                            and explainable models.
                                        </p>
                                    </div>

                                </div>


                                {/* Research */}
                                <div className="flex gap-4">

                                    <div
                                        className="mt-1 w-10 h-10 shrink-0
                                                   rounded-xl
                                                   bg-gradient-to-br
                                                   from-emerald-400
                                                   to-teal-500
                                                   text-white
                                                   shadow-lg
                                                   shadow-emerald-500/20
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-flask text-sm" />
                                    </div>


                                    <div>
                                        <h3
                                            className="font-semibold
                                                       text-white"
                                        >
                                            Research
                                        </h3>

                                        <p
                                            className="mt-1
                                                       text-slate-400"
                                        >
                                            Exploring innovative approaches
                                            to real-world problems.
                                        </p>
                                    </div>

                                </div>


                                {/* Software Development */}
                                <div className="flex gap-4">

                                    <div
                                        className="mt-1 w-10 h-10 shrink-0
                                                   rounded-xl
                                                   bg-gradient-to-br
                                                   from-blue-500
                                                   to-cyan-500
                                                   text-white
                                                   shadow-lg
                                                   shadow-blue-500/20
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-laptop-code text-sm" />
                                    </div>


                                    <div>
                                        <h3
                                            className="font-semibold
                                                       text-white"
                                        >
                                            Software Development
                                        </h3>

                                        <p
                                            className="mt-1
                                                       text-slate-400"
                                        >
                                            Turning ideas and models into
                                            practical applications.
                                        </p>
                                    </div>

                                </div>


                                {/* UI/UX */}
                                <div className="flex gap-4">

                                    <div
                                        className="mt-1 w-10 h-10 shrink-0
                                                   rounded-xl
                                                   bg-gradient-to-br
                                                   from-pink-500
                                                   to-rose-500
                                                   text-white
                                                   shadow-lg
                                                   shadow-pink-500/20
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-pen-ruler text-sm" />
                                    </div>


                                    <div>
                                        <h3
                                            className="font-semibold
                                                       text-white"
                                        >
                                            UI/UX Design
                                        </h3>

                                        <p
                                            className="mt-1
                                                       text-slate-400"
                                        >
                                            Designing intuitive and
                                            user-focused experiences.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================= CURRENTLY EXPLORING ================= */}

                        <div>

                            <h2
                                className="text-3xl font-semibold
                                           text-white mb-5"
                            >
                                Currently Exploring
                            </h2>


                            <div className="flex flex-wrap gap-2">

                                {[
                                    "Medical Imaging",
                                    "Flood Forecasting",
                                    "Disease Prediction",
                                    "Explainable AI",
                                    "Computer Vision",
                                ].map((topic) => (

                                    <span
                                        key={topic}
                                        className="px-3 py-2
                                                   rounded-full
                                                   bg-white/5
                                                   border border-white/10
                                                   text-sm font-medium
                                                   text-slate-300
                                                   hover:bg-indigo-500/10
                                                   hover:border-indigo-400/30
                                                   hover:text-indigo-300
                                                   transition-all duration-200"
                                    >
                                        {topic}
                                    </span>

                                ))}

                            </div>

                        </div>


                        {/* ================= WHY WORK WITH ME ================= */}

                        <div>

                            <h2
                                className="text-3xl font-semibold
                                           text-white mb-4"
                            >
                                Why Work With Me?
                            </h2>


                            <p
                                className="text-lg leading-8
                                           text-slate-300"
                            >
                                I bring together research, technical skills,
                                creativity, and continuous learning to
                                approach problems from both a theoretical
                                and practical perspective.
                            </p>

                        </div>


                        {/* ================= CONTACT ================= */}

                        <div className="pt-2">

                            <h2
                                className="text-3xl font-semibold
                                           text-white mb-5"
                            >
                                Contact
                            </h2>


                            <div className="space-y-4">

                                {/* Email */}
                                <p
                                    className="flex items-center gap-3
                                               text-slate-300"
                                >

                                    <span
                                        className="w-9 h-9 rounded-lg
                                                   bg-gradient-to-br
                                                   from-indigo-500
                                                   to-blue-500
                                                   text-white
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-envelope text-sm" />
                                    </span>


                                    <span>

                                        <span
                                            className="font-medium
                                                       text-white"
                                        >
                                            Email:
                                        </span>{" "}

                                        <a
                                            href="mailto:mm736757@gmail.com"
                                            className="hover:text-indigo-300
                                                       transition-colors"
                                        >
                                            mm736757@gmail.com
                                        </a>

                                    </span>

                                </p>


                                {/* Phone */}
                                <p
                                    className="flex items-center gap-3
                                               text-slate-300"
                                >

                                    <span
                                        className="w-9 h-9 rounded-lg
                                                   bg-gradient-to-br
                                                   from-cyan-500
                                                   to-blue-500
                                                   text-white
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-phone text-sm" />
                                    </span>


                                    <span>

                                        <span
                                            className="font-medium
                                                       text-white"
                                        >
                                            Phone:
                                        </span>{" "}

                                        <a
                                            href="tel:+8801908863619"
                                            className="hover:text-cyan-300
                                                       transition-colors"
                                        >
                                            +8801908863619
                                        </a>

                                    </span>

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default AboutMe;