import {Item} from "../../../types";
import React, {useEffect, useState} from "react";

interface Props {
    item: Item;
    onClickItem: React.MouseEventHandler;
    onChangeValue: (id: string, newName: string) => void;
}

const MoviesItem: React.FC<Props> = ({item, onClickItem, onChangeValue}) => {
    const [movieNames, setMovieNames] = useState<string>(item.name)
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieNames(e.target.value);
    }
    useEffect(() => {
        setMovieNames(item.name);
    }, [item.name]);

    const saveChanges = () => {
        onChangeValue(item.id, movieNames);
    }
    return (
        <div className="row ">
            <div className="col-8">
                <input
                    type="text"
                    id={item.id}
                    name="name"
                    className="form-control"
                    value={movieNames}
                    onChange={inputChangeHandler}
                />
            </div>
            <div className="col-4">
                <button
                    onClick={onClickItem}
                    className="btn btn-danger me-4"
                >X</button>
                <button
                    onClick={saveChanges}
                    className="btn btn-warning"
                >Save</button>
            </div>
        </div>
    );
};

export default MoviesItem;