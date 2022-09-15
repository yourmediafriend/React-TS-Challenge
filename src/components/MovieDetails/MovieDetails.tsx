import React from "react";
import styled from "styled-components";
import { TMDB_API, TMDB_IMAGESIZES } from "../../utils/constants/tmdbApi";
import useGetData from "../../utils/hooks/useGetData";
import MoviePoster from "../MoviePoster/MoviePoster";
import GenreList from "./GenreList";

const { AUTH, ENDPOINT, MOVIE, URL } = TMDB_API;
const apiQuery = `?api_key=${AUTH}`;

const DetailsWrapperSC = styled.div`
	width: 100vw;
	height: 100%;
	display: grid;
	grid-template-columns: minmax(auto, 400px) minmax(auto, 600px);
	grid-gap: 24px;
	position: relative;
`;
const BackgroundSC = styled.div<{ backdrop_path: string }>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0.2;
	z-index: 0;
	filter: grayscale(1);
	${(props) =>
		props.backdrop_path &&
		`background: url(${URL}/t/p/original/${props.backdrop_path})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

const TitleWrapperSC = styled.div`
	margin-bottom: 8px;
`;

const MetaWrapperSC = styled.div`
	margin-bottom: 8px;
`;
const OverviewWrapperSC = styled.div`
	margin-bottom: 8px;
`;

const MovieTitleSC = styled.h1`
	font-size: 36px;
	font-weight: bold;
	line-height: 1.2em;
`;
const MovieOriginalTitleSC = styled.h2`
	color: #6a6a6a;
	font-size: 18px;
`;

const ColumnImageSC = styled.div`
	position: relative;
	z-index: 1;
`;
const ColumnTextSC = styled.div`
	padding: 16px 0;
	position: relative;
	z-index: 1;
`;

const MoviePosterSC = styled(MoviePoster)`
	width: 100%;
	display: block;
`;

type MovieDetailsProps = {
	id: number | string | undefined;
};

const MovieDetails = ({ id }: MovieDetailsProps): JSX.Element | null => {
	const url = `${ENDPOINT}${MOVIE}/${id}${apiQuery}`;
	const tmdbResonse = useGetData(url);
	const movieDetail = tmdbResonse && tmdbResonse.data;
	const loading = tmdbResonse && tmdbResonse.loading;

	const yyyy = movieDetail && new Date(movieDetail.release_date).getFullYear();

	return !loading && movieDetail ? (
		<DetailsWrapperSC>
			<BackgroundSC backdrop_path={movieDetail.backdrop_path} />
			<ColumnImageSC>
				<MoviePosterSC
					image_url={movieDetail.poster_path}
					alt={movieDetail.original_title}
					size={TMDB_IMAGESIZES.poster_sizes[4]}
				/>
			</ColumnImageSC>
			<ColumnTextSC>
				<TitleWrapperSC>
					<MovieTitleSC>{movieDetail.title}</MovieTitleSC>
					{movieDetail.title !== movieDetail.original_title && (
						<MovieOriginalTitleSC>
							{movieDetail.original_title}
						</MovieOriginalTitleSC>
					)}
				</TitleWrapperSC>
				<MetaWrapperSC>
					<p>Rating: {movieDetail.popularity}</p>
					<p>Runtime: {movieDetail.runtime} min</p>
					<p>{yyyy}</p>
				</MetaWrapperSC>
				<GenreList genres={movieDetail.genres} />
				<OverviewWrapperSC>
					<p>{movieDetail.overview}</p>
				</OverviewWrapperSC>
				<a
					href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
					target="_blank"
				>
					IMDB
				</a>
			</ColumnTextSC>
		</DetailsWrapperSC>
	) : null;
};

export default MovieDetails;
