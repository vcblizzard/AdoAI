import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <video
        src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <main className="sm:p-8 px-4 py-8 w-full gradient min-h-screen-`calc(100vh - 73px)`">
        <section className="max-w-7xl mx-auto">
          <div>
            <h1 className="font-extrabold text-white text-5xl mt-40">
              Introducing GPT-4, Ado AI most <br /> advanced system
            </h1>
            <p className="mt-2 text-white text-lg max-w-lg mb-5">
              We’ve trained a model called Ado AI which interacts in a
              conversational way. The dialogue format makes it possible for Ado
              AI to answer followup questions, admit its mistakes, challenge
              incorrect premises, and reject inappropriate requests.
            </p>
            <Link
              to="/create-post"
              className="font-inter font-medium border border-white text-white px-4 py-2 rounded-md"
            >
              Try On AdoAI ?
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
