import React from "react";
import { Hero } from "./components/hero/hero";

const Home = ({movies}) => {
    return (
        <Hero movies={movies} />
    )
}

export default Home;