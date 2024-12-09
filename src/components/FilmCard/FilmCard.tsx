import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as BookmarkIcon } from "../../assets/icons/BookmarkIcon.svg";
import { Film, IGenre } from "../../pages/HomePage/HomePage";

interface movieCardProps {
	cardData: Film;
	genres: IGenre[];
	link: string;
	inWatchlist: boolean;
	onBookmarkClick: () => void;
}

const FilmCard: React.FC<movieCardProps> = ({
	cardData,
	genres,
	link,
	inWatchlist,
	onBookmarkClick,
}) => {
	const { t } = useTranslation();
	return (
		<div className="snap-start">
			<Link to={link}>
				<div className="group overflow-hidden rounded-2xl relative">
					<div className="absolute w-full h-full bg-black-black-30 -top-full group-hover:top-0 right-0">
						<button
							onClick={onBookmarkClick}
              className="w-7 h-7 absolute top-5 right-2 bg-gray-static rounded-full flex justify-center items-center"
              aria-label={t('')}   
						>
							<BookmarkIcon
								className={`w-5 h-5 ${inWatchlist ? "" : "fill-transparent"}`}
							/>
						</button>
					</div>
					<img
						className="w-full ablsoute object-cover"
						src={`https://image.tmdb.org/t/p/w500${cardData.poster_path}`}
						alt={cardData.title + t('movie')}
					/>
				</div>
				<h4 className="font-semibold">{cardData.title}</h4>
				{genres.map(
					(genre, index) =>
						Number(genre.id) === cardData.genre_ids[0] && <p key={genre.id + index} className="text-xs">{genre.name}</p>
				)}
			</Link>
		</div>
	);
};

export default FilmCard;
