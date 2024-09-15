const Carousel = ({ movies }) => {
    return (
        <div className="overflow-clip">
            <div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
                {movies.map((movie, index) => (
                    <div
                        className="aspect-video w-[40vw] shrink-0 md:w-[23vw]"
                        key={`${movie.name}-${index}`}
                    >
                        <div
                            className="h-full w-full bg-blue-400 rounded-xl object-cover"
                            
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Carousel;