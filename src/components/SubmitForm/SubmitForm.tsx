import {useState} from "react";
import {Item} from "../../types";
import * as React from "react";

interface Props {
    onSubmitForm: (newFilm: Item) => void;
}


const SubmitForm: React.FC<Props> = ({onSubmitForm}) => {
    const [movieItem, setMovieItem] = useState<Item>({
        id: String(new Date().toString()),
        name: '',
    });
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setMovieItem(prevState => ({...prevState, [name]: value}));
    }
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitForm({...movieItem,});
        setMovieItem({ id: String(new Date().toString()), name: '' });
    }
    return (
            <form onSubmit={onSubmit}>
                <h3>Add New Film to my List</h3>
                <hr/>
                <div className="row">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id={movieItem.id}
                        name="name"
                        className="form-control"
                        value={movieItem.name}
                        onChange={inputChangeHandler}
                    />
                    <button type="submit" className="btn btn-primary mt-4">Add</button>
                </div>
            </form>
    );
};

export default SubmitForm;