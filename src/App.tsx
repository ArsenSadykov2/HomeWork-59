import './App.css'
import React from "react";
import Task1 from "./components/Task1/Task1.tsx";

const App = () => {
    const [newmovies, setNewmovies] = React.useState([]);


   return (
    <>
        <main className="container">
            <div className="row">
                <div className="col-6">
                    <Task1/>
                </div>
                <div className="col-6"></div>
            </div>
        </main>
    </>
   )

}

export default App
