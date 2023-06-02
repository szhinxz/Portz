import React,{ useState,Form,InputGroup } from "react";
import {motion} from "framer-motion";
import {work} from "../mywork"
import { useEffect } from "react";
import { FiX} from "react-icons/fi"; 
import {BsSearch} from "react-icons/bs"

function Movie() {
    const [filtered,setFiltered] = useState([]);
    const [activeGenre,setActiveGenre] = useState(0);
    const [search, setSearch] = useState('')
    const [click, setClick ] = useState(false)
    const handleClick = () => setClick (!click)

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
                {/* <div className="filter-container">
                    <button onClick={() => setActiveGenre(0)} >All</button>
                    <button onClick={() => setActiveGenre("project")}>Project</button>
                    <button onClick={() => setActiveGenre("design")}>Design</button>
                </div> */}
                <ul className={click ? "active" : ""}>
                    <div className="inputBox">
                        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
                        <span>Search...</span>
                    </div>
                </ul>
                <div className="inputBox-mobile" onClick={handleClick}>
                {click ? (
                    <FiX />
                ): (
                    <BsSearch />
                )}
            </div>
        </div>

        <div className="box_movie">
        {work.filter((e) =>{
            return search.toLowerCase() === '' ? e :e.title.toLowerCase().includes(search) || search.toLowerCase() === '' ? e :e.type.toLowerCase().includes(search) 
        }).map((e,i)=> {
            // console.log(e)
            return(
                <div>
                <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{ opacity: 0}} className="card_movie" >
                    <div className="img_movie" >
                    <img  src={e.path} alt="" />
                    </div>
                    <div className="text_title">
                    {e.title}<br/>
                    {e.description}
                    </div>
                </motion.div>
                </div>
            )
        })}
        </div>
        </>
    )
}

export default Movie;