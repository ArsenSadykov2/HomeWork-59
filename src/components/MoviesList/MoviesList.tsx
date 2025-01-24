import {Item} from "../../types";
import MoviesItem from "./MoviesItem/MoviesItem.tsx";

interface Props {
    movies: Item[];
    deleteFilm: (id: Item) => void;
    saveChangeValues: (newName: Item) => void;
}

const MoviesList: React.FC<Props> = ({movies, deleteFilm, saveChangeValues}) => {
    return (
        <>
            <h4>My List Of Movies</h4>
            <hr/>
                <>
                    {movies.map((item) => (
                        <MoviesItem
                            item={item}
                            key={item.id}
                            onClickItem={() => deleteFilm(item)}
                            onChangeValue={() => saveChangeValues(item)}
                        />
                    ))}
                </>
        </>
    );
};

export default MoviesList;