import {useState} from "react";
import {Item} from "../../types";


const Task1 = () => {
    const [movieItem, setMovieItem] = useState<Item>({
        id: String(new Date().toString()),
        name: '',
    });
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setMovieItem(prevState => ({...prevState, [name]: value}));
    }
    return (
        <div>
            <form>
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
        </div>
    );
};

export default Task1;