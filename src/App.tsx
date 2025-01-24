import './App.css'
import {useState} from "react";
import SubmitForm from "./components/SubmitForm/SubmitForm.tsx";
import {Item} from "./types";
import MoviesList from "./components/MoviesList/MoviesList.tsx";

const App = () => {
    const [newmovies, setNewmovies] = useState<Item[]>([]);

    const addFilm = (newFilm: Item) => {
        setNewmovies(prevState => [newFilm, ...prevState]);
    }

    const deleteFilm = (id: number) => {
        const peopleArrayCopy = [...newmovies];
        peopleArrayCopy.splice(id, 1);
        setNewmovies(peopleArrayCopy);
    }

   return (
    <>
        <main className="container">
            <div className="row">
                <div className="col-6">
                    <SubmitForm onSubmitForm={addFilm} />
                </div>
                <div className="col-6">
                    <MoviesList movies={newmovies} deleteFilm={deleteFilm} />
                </div>
            </div>
        </main>
    </>
   )

}

export default App
