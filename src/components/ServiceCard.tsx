
interface props {
    id: number
    title: string
    desc: string
}

function ServiceCard(data: props) {
    return (
        <>
            <div className={`w-full px-4 pt-5 pb-10 h-auto flex flex-col justify-start items-center relative overflow-hidden rounded-4xl bg-[#e10069]`}>
                <div className={`w-full h-[500px] z-10 absolute bg-black rounded-full -top-72 blur-[80px]`} />
                <h1 className={`w-full z-20 text-start text-7xl font-Lemon text-white opacity-25 font-black`}>{data.id}</h1>
                <p className={`w-full text-start z-20 text-white text-3xl font-semibold mt-5`}>{data.title}</p>
                <p className={`w-full text-start z-20 text-white text-sm font-light mt-5`}>{data.desc}</p>
            </div>
        </>
    )
}

export default ServiceCard
