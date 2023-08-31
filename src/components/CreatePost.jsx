import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

function CreatePost() {
  const [ide, setIde] = useState("");
  const [hasil, setHasil] = useState("");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const cariIde = async (e) => {
    e.preventDefault();
    const tulisanAi = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: ide,
      temperature: 0.5,
      max_tokens: 1000,
    });
    setHasil(tulisanAi.data.choices[0].text);
  };

  return (
    <div className="flex-wrap items-center sm:p-8 px-4 py-8 w-full min-h-screen-[calc(100vh-73px)]">
      <h1 className="font-extrabold text-[#ffffff] text-[32px]">
        GPT-4 can solve difficult problems with greater accuracy, thanks to{" "}
        <br /> its broader general knowledge and problem solving abilities.
      </h1>
      <p className="ml-4 mt-2">
        GPT-4 is more creative and collaborative than ever before. <br /> It can
        generate, edit, and iterate with users on creative and technical writing
        tasks, <br /> such as composing songs, writing screenplays, or learning
        a user’s writing style.
      </p>
      <h2 className="text-white gap-2 mt-7 max-w-3xl mx-auto ml-8 mb-2">
        Tuliskan Pertanyaan Anda!
      </h2>
      <form onSubmit={(e) => cariIde(e)}>
        <input
          type="text"
          placeholder="Saya akan menjawab pertanyaan yang ada berikan :)"
          className="input input-bordered bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-[#28a9ff] focus:border-[#22d3ee] outline-none py-1 w-full flex justify-center items-center sm:px-8 px-4"
          onChange={(e) => setIde(e.target.value)}
        />
        <button className="btn btn-primary mt-5">Cari Ide</button>
      </form>
      <h2 className="text-white flex justify-center mt-10">
        Hasil Jawaban dari AI
      </h2>
      <p className="markdown prose w-full break-words dark:prose-invert light">
        {hasil}
      </p>
    </div>
  );
}

export default CreatePost;
