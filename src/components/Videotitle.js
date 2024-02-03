

const Videotitle = ({title,overview}) => {
  return (
    <div className=" w-screen pt-[20%] px-24 aspect-video text-white pt-36 absolute bg-gradient-to-r from-black ">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4"> {overview}</p>
        <div className="">
        <button className="bg-white text-xl text-black p-4 px-12 rounded-lg hover:bg-opacity-80"> ▷ Play  </button>
        <button className="mx-2 bg-gray-500 text-xl  p-4 px-12 rounded-lg bg-opacity-80 hover:bg-opacity-60">More info</button>

        </div>
    </div>
  )
}

export default Videotitle 