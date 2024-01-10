import {useEffect} from "react";

type CounterComponentProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Decrement: React.FC<CounterComponentProps> = ({count, setCount}) => {
    const decrementCounter = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        console.log("CounterComponentがマウントされました。");

        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);
        return () => {
            console.log("CounterComponentがアンマウントされました。");
            clearInterval(interval);
        }
    }, [setCount]);


    return (
        <div>
            <h2>カウンター: {count}</h2>
            <button onClick={decrementCounter}>カウントダウン</button>
        </div>
    )
}

export default Decrement;