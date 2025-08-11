import SearchableScanner from "../components/token-scanner/SearchableScanner";

const Scan = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-center font-bold text-2xl lg:text-4xl 2xl:text-5xl ">Search for any BSC token.</h1>
            <SearchableScanner />
        </section>
    )
}

export default Scan;