import React,{ useState,Form,InputGroup } from "react";
import {motion} from "framer-motion";
import {work} from "../mywork"

function Movie() {
    const [filtered,setFiltered] = useState([]);
    const [activeGenre,setActiveGenre] = useState(0);
    const [search, setSearch] = useState('')
    // useEffect(() => {
    //     {work.map((e,i) => {
    //     if(activeGenre === 0) {
    //         setFiltered(e);
    //         return;
    //     }
    //     const filtered = e.filter(types=>types.type.includes(activeGenre)) || e.filter(types =>types.title.includes(activeGenre));
    //     setFiltered(filtered); 
    // })}
    // }, [activeGenre])

    // const filterItem = (categItem) =>{
    //     const updateItems = Object.values(test).filter((curElem) =>{
    //         return curElem.known_for_department.toString() === categItem.toString()
    //     })
    //     console.log(updateItems)
    //     setItem(updateItems)

    // }
    return(
        <>
        {/* <img src={"http://image.tmdb.org/t/p/w500" + movie.result} alt="" /> */}
        <div className="seacrhs">
                <div className="filter-container">
                    <button >All</button>
                    <button >Project</button>
                    <button >Design</button>
                </div>
                <div className="inputBox">
                    <input type="text" onChange={(e) => setSearch(e.target.value)}/>
                    <span>Search...</span>
                </div>
        </div>

        <div className="box_movie">
        {work.map((e,i)=> {
            // console.log(e)
            return(
                <>
                <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{ opacity: 0}} className="card_movie">
                    <div className="img_movie">
                    <img key={i} src={e.path} alt="" />
                    </div>
                    <div className="text_title">
                    {e.title}<br/>
                    {e.description}
                    </div>
                </motion.div>
                </>
            )
        })}
        </div>
        </>
    )
}

export default Movie;