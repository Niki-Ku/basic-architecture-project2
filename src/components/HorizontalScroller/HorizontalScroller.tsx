import FilmCard from "../FilmCard/FilmCard";
import { Film, IGenre } from "../../pages/HomePage/HomePage";
import "./HorizontalScroller.css";
import { useRef, useState } from "react";

interface IHorizontalScroller {
	films: Film[];
	genres: IGenre[];
	onBookmarkClick: () => void;
}

// TODO
// Finish it :)
// decide whether we need fixed w and h in FilmCard


const HorizontalScroller: React.FC<IHorizontalScroller> = ({
	films,
	genres,
	onBookmarkClick,
}) => {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);
	// const [scrollAmount, setScrollAmount] = useState<number>(0)

	// const scroll = (direction: string) => {
	// 	const scrollA = 200; // Adjust this value for how much to scroll
	// 	setScrollAmount((prev) => prev + scrollA)
	// 	if (scrollContainerRef.current) {
	// 		console.log('yes')
	// 		scrollContainerRef.current.scrollLeft = scrollAmount;
	// 	}
	// };
	const scroll = (direction:string) => {
		if (scrollContainerRef.current) {
			const scrollAmount = scrollContainerRef.current.getBoundingClientRect().width; // Adjust this value for how much to scroll
      scrollContainerRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };
	return (
		<section
			className="group/scroll md:px-10 relative"
		>
			<button
				onClick={() => scroll("left")}
				className="group-hover/scroll:block hidden absolute h-full w-10 top-0 left-0"
			>
				left
			</button>
			<div
				ref={scrollContainerRef}
				className="scrollbar overflow-x-auto grid grid-flow-col auto-cols-[15%] gap-4 snap-x scroll-px-4">
				{films.map((film) => (
					<FilmCard
						key={film.title}
						cardData={film}
						genres={genres}
						link="#"
						inWatchlist={true}
						onBookmarkClick={onBookmarkClick}
					/>
				))}
			</div>
			<button
				onClick={() => scroll("right")}
				className="hidden group-hover/scroll:block  absolute h-full w-10 top-0 right-0"
			>
				right
			</button>
		</section>
	);
};

export default HorizontalScroller;
