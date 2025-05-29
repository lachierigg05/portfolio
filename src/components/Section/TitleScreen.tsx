import React from "react";

const TitleScreen: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="text-center">
                <h1 
                    className="text-8xl font-bold text-white mb-12"
                    style={{ fontFamily: "'DaltonWhite', sans-serif" }}
                 >
                    Lachie Rigg
                </h1>
                <p className="text-xl text-gray-300">Software Engineer</p>
            </div>
        </section>
    )
}

export default TitleScreen; 