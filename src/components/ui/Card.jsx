export default function Card({ imgSrc, imgAlt, title, country, mapsLink, dates, text }) {
    return (
        <div className="flex p-10">
            <div className="flex-shrink-0">
                <img src={imgSrc} className=" w-34 rounded-md size-40 h-100" alt={imgAlt} />
            </div>
            <div className="pl-5">
                <div className="flex text-sm">
                    <p>{country}</p>
                    <a href={mapsLink} className="pl-2">View on Google Maps</a>
                </div>
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-3 font-bold text-xs">{dates}</p>
                <p className="mt-1 max-w-[300px] text-sm">{text}</p>
            </div>
        </div>
    )
}