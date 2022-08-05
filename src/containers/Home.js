import React from "react";
import * as images from '../assets/index'
import Thumbnail from "../components/Thumbnail";

function Home() {
    return (
        <main style={{ padding: "50px" }}>
            <header >
                <h3>Image loading using Observer API</h3>
                <section >
                    {Object.keys(images).map((image, i) => (
                        <Thumbnail src={images[image]} key={i} />
                    ))}
                </section>
            </header>
        </main>
    );
}

export default Home;
