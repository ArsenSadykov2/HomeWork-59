import {Jokes} from "../../types";
import React from "react";

interface Props {
    memes: Jokes[];
}

const Memes: React.FC<Props> = ({memes}) => {
    return (
        <div>
            <div className="">
                <p>{memes}</p>
            </div>
        </div>
    );
};

export default Memes;