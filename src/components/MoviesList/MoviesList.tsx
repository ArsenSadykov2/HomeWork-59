import {Item} from "../../types";
import MoviesItem from "./MoviesItem/MoviesItem.tsx";

interface Props {
    movies: Item[];
    deleteFilm: (id: number) => void;
}

const MoviesList: React.FC<Props> = ({movies, deleteFilm}) => {
    return (
        <>
            <h4>Movies</h4>
            {movies.length < 0 ? <p>No movies yet</p> :
                <>
                    {movies.map((item) => (
                        <MoviesItem item={item} key={item.id} onClickItem={() => deleteFilm(item)}/>
                    ))}
                </>
            }
        </>
    );
};

export default MoviesList;