import './App.css'
import {useState} from "react";
import SubmitForm from "./components/SubmitForm/SubmitForm.tsx";
import {Item} from "./types";
import MoviesList from "./components/MoviesList/MoviesList.tsx";
import Memes from "./components/Memes/Memes.tsx";

const App = () => {
    const [newmovies, setNewmovies] = useState<Item[]>([]);
    const [memes, setMemes] = useState('');

    const addFilm = (newFilm: Item) => {
        setNewmovies(prevState => [newFilm, ...prevState]);
    }

    const deleteFilm = (id: number) => {
        const peopleArrayCopy = [...newmovies];
        peopleArrayCopy.splice(id, 1);
        setNewmovies(peopleArrayCopy);
    }

    const saveChangeValues = (id: string, newName: string) => {
        setNewmovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === id ? {...movie, name: newName} : movie
            )
        );
    }

    const requestMemes = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        setMemes(data.value);
    };

   return (
    <>
        <main className="container mb-5">
            <div className="row">
                <div className="col-6">
                    <SubmitForm onSubmitForm={addFilm} />
                </div>
                <div className="col-6">
                    <MoviesList movies={newmovies} deleteFilm={deleteFilm} saveChangeValues={saveChangeValues} />
                </div>
            </div>
        </main>
        <footer className="container">
            <h1>Мемы про Чак Норриса</h1>
            <Memes memes={memes}/>
            <button
                onClick={requestMemes}
                className="btn btn-primary"
            >Request New Joke</button>
        </footer>
    </>
   )

}

export default App
