import HowWorksCard from "./HowWorksCard";
function HowItWorks() {
    const details = [
        {
            index: 1,
            title: "Enter URL",
            data: "Simply input the website URL you want to scrape."
        }, {
            index: 2,
            title: "Select Data",
            data: "Choose the specific data you want to extract."
        },
        {
            index: 3,
            title: "Get Results",
            data: "Receive structured, ready-to-use data in seconds."
        }
    ]

    const renderCards = details.map((card) => {
        return <HowWorksCard index={card.index} title={card.title} data={card.data} key={card.index} />
    })
    return (
        <div className="pt-20 pb-8">
            <div className="flex justify-center mb-10 text-3xl font-bold">How it Works</div>
            <div className="flex justify-around flex-wrap">{renderCards}</div>
        </div>
    )
}
export default HowItWorks;