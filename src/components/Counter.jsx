import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incement, reset } from "../store/counterSlice";
import style from "../index.module.css";

const Counter = () => {
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    return (
        <div className={style.main__counter__block}>
            <div className={style.counter__block}>
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                <h2>{counter}</h2>
                <div className={style.container}>
                    <button
                        className={style.btn}
                        onClick={() => dispatch(incement(1))}>
                        click here
                    </button>
                    <button
                        className={style.btn2}
                        onClick={() => dispatch(reset())}>
                        reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
