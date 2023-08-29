"use client";
const page = () => {
  const handleSetCookie = () => {
    fetch("http://localhost:3000/api/cookieset");
  };

  return (
    <div>
      <h1 className="text-center mt-6 font-bold ">
        Cookie Setup for my Next Project
      </h1>

      <button
        onClick={handleSetCookie}
        class="bg-blue-500 hover:bg-blue-700 mt-6 text-white font-bold ml-[47%] py-2 px-4 border border-blue-700 rounded"
      >
        Button
      </button>
    </div>
  );
};

export default page;
