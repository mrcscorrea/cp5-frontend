
import imageFiap from '../assets/fiap.webp'

function Card() {
    return (
        <div className=" flex flex-wrap justify-center gap-6 w-80 overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1">
            <img
                src={imageFiap}
                alt="FIAP ON"
                className="h-48 w-full object-cover"
            />

            <div className="p-5">
                <h2 className="mb-3 text-xl font-bold text-gray-800">
                    FIAP ON - MBA TECH
                </h2>

                <p className="mb-5 leading-relaxed text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ducimus incidunt possimus molestiae earum, aperiam sed ab quidem adipisci modi? Soluta non, impedit in nihil ipsam maiores odit ipsum? Dolor?
                </p>

                <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
                    Saiba mais
                </button>
            </div>
        </div>
    )
}

export default Card