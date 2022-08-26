import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import "./style.css";
import { Title } from "../Redux/Action";
function Template() {
    const dataBase = useSelector((state) => state);

    const [search, setSearch] = useState(null);
    const dispatch = useDispatch();
    const searchHandler = (e) => {
        setSearch(e?.target?.value);
    };
    // Debounce function
    // function debounce(fn, delay) {
    //     let timeOut;
    //     return function () {
    //         if (timeOut) {
    //             clearTimeout(timeOut);
    //         }
    //         timeOut = setTimeout(() => {
    //             fn();
    //             console.log("2 second");
    //         }, delay);
    //         console.log(search);
    //     };
    // }
    // const optimize = debounce(searchHandler, 2000);
    // console.log(search);

    const searchByKeyword = (tag) => {
        if (search === "" || search === null) {
            return tag;
        } else if (tag.title.toLowerCase().includes(search.toLowerCase())) {
            return tag;
        } else if (tag.author.toLowerCase().includes(search.toLowerCase())) {
            return tag;
        } else if (tag.catagory.toLowerCase().includes(search.toLowerCase())) {
            return tag;
        }
    };
    const titleHandler = (author) => {
        console.log(author);
        dispatch(Title(author));
    };
    return (
        <div>
            <div>
                <div className="ser">
                    <nav className="bg-slate-100 shadow-md">
                        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
                            <a href="index.html">
                                <img
                                    id="lws"
                                    className="h-10"
                                    src="https://raw.githubusercontent.com/Learn-with-Sumit/think-in-a-redux-way/8f0d972d3ba07b8c7952074dcf2fed283f49def8/html_template/assets/lws.svg"
                                    alt="Learn with Sumit"
                                />
                            </a>
                        </div>
                    </nav>

                    <div className="bo">
                        <DebounceInput
                            id="inp"
                            minLength={2}
                            onChange={searchHandler}
                            className="outline-none border-none bg-gray-500 h-full w-full mr-2"
                            type="search"
                            name="search"
                            placeholder="Search Any Title..."
                            debounceTimeout={700}
                        />
                        <img
                            id="im"
                            className="inline h-50 cursor-pointer"
                            src="https://raw.githubusercontent.com/Learn-with-Sumit/think-in-a-redux-way/8f0d972d3ba07b8c7952074dcf2fed283f49def8/html_template/assets/search.svg"
                            alt="Search"
                        />
                    </div>
                </div>
            </div>

            <div className="box-m">
                {dataBase.filter(searchByKeyword).map((data, index) => {
                    return (
                        <div key={index} className="box">
                            <div className="img">
                                <img src={data.img} alt="poto" />
                            </div>
                            <div>
                                <span className="catagory">{data.catagory}</span> <br />
                                <div className="ait">
                                    <p className="text">{data.title}</p>
                                </div>
                            </div>
                            <div className="box-2">
                                <img onClick={() => titleHandler(data.author)} src={data.author_img} alt="author" />
                                <div className="date">
                                    <span onClick={() => titleHandler(data.author)} className="name">
                                        {data.author}
                                    </span>
                                    <div>
                                        <span className="date2">{data.date}</span>
                                        <span>{data.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Template;
