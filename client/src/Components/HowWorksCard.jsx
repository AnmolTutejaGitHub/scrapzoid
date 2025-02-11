function HowWorksCard({ index, title, data }) {
    return (<div className="flex flex-col gap-2 w-60  items-center justify-center p-2">
        <div className="flex h-14 w-14 rounded-full bg-white items-center justify-center">
            <div className="text-black">{index}</div>
        </div>
        <p className="text-xl">{title}</p>
        <p className="text-gray-400">{data}</p>
    </div>);
}
export default HowWorksCard;