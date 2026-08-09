"use client";

const Skills = () => {
    return (
        <div>
            <section
                id="skills"
                className="relative py-24 overflow-hidden bg-slate-50"
            >
                {/* Subtle Background Decorations */}
                <div
                    className="absolute -top-32 -right-32 w-96 h-96
                               rounded-full bg-indigo-200/20 blur-3xl"
                />

                <div
                    className="absolute -bottom-32 -left-32 w-96 h-96
                               rounded-full bg-cyan-200/20 blur-3xl"
                />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

                    {/* ================= HEADER ================= */}
                    <div className="max-w-2xl mb-14">

                        <span
                            className="inline-flex items-center gap-2
                                       px-3 py-1.5 rounded-full
                                       bg-indigo-50 border border-indigo-100
                                       text-xs font-semibold
                                       tracking-wider text-indigo-600 uppercase"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            My Expertise
                        </span>

                        <h2
                            className="mt-5 text-4xl md:text-5xl
                                       font-bold tracking-tight text-slate-900"
                        >
                            Skills
                        </h2>

                        <p
                            className="mt-5 text-lg leading-8 text-slate-600"
                        >
                            I’m continuously developing my technical and
                            research skills through academic projects,
                            research, and hands-on development.
                        </p>

                    </div>


                    {/* ================= MAIN CONTENT ================= */}
                    <div
                        className="grid lg:grid-cols-[0.8fr_1.5fr]
                                   gap-16 items-center"
                    >

                        {/* ================================================= */}
                        {/* LEFT SECTION                                       */}
                        {/* ================================================= */}

                        <div
                            className="relative flex flex-col items-center
                                       rounded-[1rem]
                                       px-8 py-10
                                       bg-sky-100
                                       border border-slate-200/80
                                       shadow-sm
                                       overflow-hidden"
                        >

                            {/* Gentle Decorative Glow */}
                            <div
                                className="absolute -top-20 -left-20
                                           w-40 h-40 rounded-full
                                           bg-indigo-200/30 blur-3xl"
                            />

                            <div
                                className="absolute -bottom-20 -right-20
                                           w-40 h-40 rounded-full
                                           bg-cyan-200/30 blur-3xl"
                            />


                            {/* ================= AI VISUAL ================= */}

                            <div
                                className="relative w-72 h-72
                                           flex items-center justify-center"
                            >

                                {/* Main Background Circle */}
                                <div
                                    className="absolute w-56 h-56
                                               rounded-full
                                               bg-gradient-to-br
                                               from-indigo-100
                                               via-white
                                               to-cyan-100
                                               border border-indigo-100
                                               shadow-inner"
                                />

                                {/* AI Core */}
                                <div
                                    className="relative w-28 h-28
                                               rounded-3xl
                                               bg-white
                                               border border-indigo-100
                                               shadow-xl
                                               flex items-center justify-center"
                                >
                                    <span
                                        className="text-4xl font-black
                                                   tracking-tighter
                                                   bg-gradient-to-r
                                                   from-indigo-600
                                                   via-purple-600
                                                   to-cyan-500
                                                   bg-clip-text
                                                   text-transparent"
                                    >
                                        AI
                                    </span>
                                </div>


                                {/* Python */}
                                <div
                                    className="absolute top-2 left-5
                                               w-14 h-14 rounded-2xl
                                               bg-gradient-to-br
                                               from-indigo-500 to-blue-500
                                               shadow-lg shadow-indigo-200
                                               flex items-center
                                               justify-center
                                               text-2xl text-white"
                                >
                                    <i className="fa-brands fa-python" />
                                </div>


                                {/* Git */}
                                <div
                                    className="absolute top-16 right-0
                                               w-14 h-14 rounded-2xl
                                               bg-gradient-to-br
                                               from-orange-400 to-red-500
                                               shadow-lg shadow-orange-200
                                               flex items-center
                                               justify-center
                                               text-2xl text-white"
                                >
                                    <i className="fa-brands fa-git-alt" />
                                </div>


                                {/* Java */}
                                <div
                                    className="absolute bottom-5 left-8
                                               w-14 h-14 rounded-2xl
                                               bg-gradient-to-br
                                               from-red-500 to-rose-600
                                               shadow-lg shadow-red-200
                                               flex items-center
                                               justify-center
                                               text-2xl text-white"
                                >
                                    <i className="fa-brands fa-java" />
                                </div>


                                {/* Code */}
                                <div
                                    className="absolute bottom-12 right-2
                                               w-14 h-14 rounded-2xl
                                               bg-gradient-to-br
                                               from-slate-700 to-slate-900
                                               shadow-lg
                                               flex items-center
                                               justify-center
                                               text-xl text-white"
                                >
                                    <i className="fa-solid fa-code" />
                                </div>

                            </div>


                            {/* ================= TECHNOLOGY PILLS ================= */}

                            <div
                                className="relative flex flex-wrap
                                           justify-center gap-2
                                           max-w-sm mt-6"
                            >

                                {[
                                    "Python",
                                    "TensorFlow",
                                    "PyTorch",
                                    "C++",
                                    "Java",
                                    "Git",
                                    "Figma",
                                    "Canva",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5
                                                   rounded-full
                                                   bg-white
                                                   border border-slate-200
                                                   text-sm text-slate-600
                                                   shadow-sm
                                                   hover:border-indigo-200
                                                   hover:bg-indigo-50
                                                   hover:text-indigo-600
                                                   transition-all duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* RIGHT SECTION                                      */}
                        {/* ================================================= */}

                        <div className="grid sm:grid-cols-2 gap-5">


                            {/* ================= PROGRAMMING ================= */}

                            <div
                                className="group p-6 bg-white rounded-2xl
                                           border border-slate-200
                                           hover:border-indigo-200
                                           hover:shadow-xl
                                           hover:shadow-indigo-100/50
                                           hover:-translate-y-1
                                           transition-all duration-300"
                            >

                                <div
                                    className="flex items-center gap-3 mb-5"
                                >

                                    <div
                                        className="w-11 h-11 rounded-xl
                                                   bg-gradient-to-br
                                                   from-indigo-500 to-blue-500
                                                   text-white
                                                   shadow-md shadow-indigo-200
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-code" />
                                    </div>

                                    <h3 className="font-semibold text-slate-900">
                                        Programming
                                    </h3>

                                </div>

                                <div className="flex flex-wrap gap-2">

                                    <span className="skill-tag">
                                        Python
                                    </span>

                                    <span className="skill-tag">
                                        C++
                                    </span>

                                    <span className="skill-tag">
                                        Java
                                    </span>

                                </div>

                            </div>


                            {/* ================= AI & DATA ================= */}

                            <div
                                className="group p-6 bg-white rounded-2xl
                                           border border-slate-200
                                           hover:border-purple-200
                                           hover:shadow-xl
                                           hover:shadow-purple-100/50
                                           hover:-translate-y-1
                                           transition-all duration-300"
                            >

                                <div
                                    className="flex items-center gap-3 mb-5"
                                >

                                    <div
                                        className="w-11 h-11 rounded-xl
                                                   bg-gradient-to-br
                                                   from-purple-500 to-fuchsia-500
                                                   text-white
                                                   shadow-md shadow-purple-200
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-brain" />
                                    </div>

                                    <h3 className="font-semibold text-slate-900">
                                        AI & Data
                                    </h3>

                                </div>

                                <div className="flex flex-wrap gap-2">

                                    <span className="skill-tag">
                                        Machine Learning
                                    </span>

                                    <span className="skill-tag">
                                        Deep Learning
                                    </span>

                                    <span className="skill-tag">
                                        Data Science
                                    </span>

                                    <span className="skill-tag">
                                        Computer Vision
                                    </span>

                                    <span className="skill-tag">
                                        XAI
                                    </span>

                                </div>

                            </div>


                            {/* ================= DEVELOPMENT ================= */}

                            <div
                                className="group p-6 bg-white rounded-2xl
                                           border border-slate-200
                                           hover:border-cyan-200
                                           hover:shadow-xl
                                           hover:shadow-cyan-100/50
                                           hover:-translate-y-1
                                           transition-all duration-300"
                            >

                                <div
                                    className="flex items-center gap-3 mb-5"
                                >

                                    <div
                                        className="w-11 h-11 rounded-xl
                                                   bg-gradient-to-br
                                                   from-cyan-500 to-blue-500
                                                   text-white
                                                   shadow-md shadow-cyan-200
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-laptop-code" />
                                    </div>

                                    <h3 className="font-semibold text-slate-900">
                                        Development
                                    </h3>

                                </div>

                                <div className="flex flex-wrap gap-2">

                                    <span className="skill-tag">
                                        Web Development
                                    </span>

                                    <span className="skill-tag">
                                        FastAPI
                                    </span>

                                    <span className="skill-tag">
                                        Git
                                    </span>

                                </div>

                            </div>


                            {/* ================= RESEARCH ================= */}

                            <div
                                className="group p-6 bg-white rounded-2xl
                                           border border-slate-200
                                           hover:border-emerald-200
                                           hover:shadow-xl
                                           hover:shadow-emerald-100/50
                                           hover:-translate-y-1
                                           transition-all duration-300"
                            >

                                <div
                                    className="flex items-center gap-3 mb-5"
                                >

                                    <div
                                        className="w-11 h-11 rounded-xl
                                                   bg-gradient-to-br
                                                   from-emerald-500 to-teal-500
                                                   text-white
                                                   shadow-md shadow-emerald-200
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-flask" />
                                    </div>

                                    <h3 className="font-semibold text-slate-900">
                                        Research Interests
                                    </h3>

                                </div>

                                <div className="flex flex-wrap gap-2">

                                    <span className="skill-tag">
                                        Artificial Intelligence
                                    </span>

                                    <span className="skill-tag">
                                        Medical Imaging
                                    </span>

                                    <span className="skill-tag">
                                        Remote Sensing
                                    </span>

                                    <span className="skill-tag">
                                        Spatio-Temporal Prediction
                                    </span>

                                    <span className="skill-tag">
                                        Explainable AI
                                    </span>

                                </div>

                            </div>


                            {/* ================= DESIGN ================= */}

                            <div
                                className="group p-6 bg-white rounded-2xl
                                           border border-slate-200
                                           hover:border-pink-200
                                           hover:shadow-xl
                                           hover:shadow-pink-100/50
                                           hover:-translate-y-1
                                           transition-all duration-300"
                            >

                                <div
                                    className="flex items-center gap-3 mb-5"
                                >

                                    <div
                                        className="w-11 h-11 rounded-xl
                                                   bg-gradient-to-br
                                                   from-pink-500 to-rose-500
                                                   text-white
                                                   shadow-md shadow-pink-200
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-pen-ruler" />
                                    </div>

                                    <h3 className="font-semibold text-slate-900">
                                        Design
                                    </h3>

                                </div>

                                <div className="flex flex-wrap gap-2">

                                    <span className="skill-tag">
                                        UI/UX
                                    </span>

                                    <span className="skill-tag">
                                        Figma
                                    </span>

                                    <span className="skill-tag">
                                        Canva
                                    </span>

                                </div>

                            </div>


                            {/* ================= FRAMEWORKS ================= */}

                            <div
                                className="group p-6 bg-white rounded-2xl
                                           border border-slate-200
                                           hover:border-orange-200
                                           hover:shadow-xl
                                           hover:shadow-orange-100/50
                                           hover:-translate-y-1
                                           transition-all duration-300"
                            >

                                <div
                                    className="flex items-center gap-3 mb-5"
                                >

                                    <div
                                        className="w-11 h-11 rounded-xl
                                                   bg-gradient-to-br
                                                   from-orange-500 to-amber-500
                                                   text-white
                                                   shadow-md shadow-orange-200
                                                   flex items-center
                                                   justify-center"
                                    >
                                        <i className="fa-solid fa-layer-group" />
                                    </div>

                                    <h3 className="font-semibold text-slate-900">
                                        Frameworks
                                    </h3>

                                </div>

                                <div className="flex flex-wrap gap-2">

                                    <span className="skill-tag">
                                        TensorFlow
                                    </span>

                                    <span className="skill-tag">
                                        PyTorch
                                    </span>

                                    <span className="skill-tag">
                                        FastAPI
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};


/* ================================================= */
/* REUSABLE SKILL TAG                                */
/* ================================================= */

export default Skills;