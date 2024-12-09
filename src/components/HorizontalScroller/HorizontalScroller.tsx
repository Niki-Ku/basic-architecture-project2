import FilmCard from "../FilmCard/FilmCard";
import { Film, IGenre } from "../../pages/HomePage/HomePage";
import "./HorizontalScroller.css";
import { useRef } from "react";
import { ReactComponent as ArrowShort } from "../../assets/icons/ArrowDownShort.svg";
import { ReactComponent as Arrow } from "../../assets/icons/ArrowDownFull.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IHorizontalScroller {
	films: Film[];
	genres: IGenre[];
	onBookmarkClick: () => void;
	link?: string;
	heading?: string;
}

const HorizontalScroller: React.FC<IHorizontalScroller> = ({
	films,
	genres,
	onBookmarkClick,
	link,
	heading
}) => {
	const { t } = useTranslation();
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);

	const scroll = (direction: string) => {
		if (scrollContainerRef.current) {
			const scrollAmount =
				scrollContainerRef.current.getBoundingClientRect().width; 
			scrollContainerRef.current.scrollLeft +=
				direction === "left" ? -scrollAmount : scrollAmount;
		}
	};

	return (
		<section className="group/scroll md:px-10 relative">
			{heading && link &&
				<Link to={link}>
					<div className="text-2xl inline-block mb-2 mx-2">
						<span>{t(heading)}</span>
						<Arrow className="-rotate-90 w-8 h-8 fill-text-default inline" />
					</div>
				</Link>
			}
			<button
				onClick={() => scroll("left")}
				className="md:group-hover/scroll:block hidden absolute h-full w-10 top-0 left-0"
				aria-label={t('slide-left')}
			>
				<ArrowShort className="w-10 h-10 fill-text-default rotate-90" />
			</button>
			<div
				ref={scrollContainerRef}
				className="scrollbar overflow-x-auto scroll-smooth scroll-px-2 sm:scroll-px-0 grid grid-flow-col gap-4 snap-x
					auto-cols-mobile sm:auto-cols-sm md:auto-cols-md lg:auto-cols-lg 2xl:auto-cols-xxl"
			>
				{films.map((film) => (
					<FilmCard
						key={film.title}
						cardData={film}
						genres={genres}
						link={`movies/${film.id}`}
						inWatchlist={true}
						onBookmarkClick={onBookmarkClick}
					/>
				))}
			</div>
			<button
				onClick={() => scroll("right")}
				className="hidden md:group-hover/scroll:block absolute h-full w-10 top-0 right-0"
				aria-label={t('slide-right')}
			>
				<ArrowShort className="w-10 h-10 fill-text-default -rotate-90" />
			</button>
		</section>
	);
};

export default HorizontalScroller;
