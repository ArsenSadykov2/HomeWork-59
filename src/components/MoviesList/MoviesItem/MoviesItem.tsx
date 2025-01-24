import {Item} from "../../../types";
import React, {useState} from "react";

interface Props {
    item: Item;
    onClickItem: React.MouseEventHandler;
}

const MoviesItem: React.FC<Props> = ({item, onClickItem}) => {
    const [movieNames, setMovieNames] = useState<Item[]>(item.name)
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setMovieNames(prevState => ({...prevState, [name]: value}));
    }
    return (
        <div className="row">
            <div className="col-4">
                <input
                    type="text"
                    id={item.id}
                    name="name"
                    className="form-control"
                    value={item.name}
                    onChange={inputChangeHandler}
                />
            </div>
            <div className="col-4">
                <button onClick={onClickItem}>X</button>
            </div>
        </div>
    );
};

export default MoviesItem;