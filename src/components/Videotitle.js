

const Videotitle = ({title,overview}) => {
  return (
    <div className="pt-36 px-12 ">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg"> {overview}</p>
        <button>Play</button>
        <button>More info</button>
    </div>
  )
}

export default Videotitle 