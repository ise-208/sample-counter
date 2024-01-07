type CounterComponentProps = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterComponent: React.FC<CounterComponentProps>  = ({count, setCount}) => {
    const decrementCounter = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h2>カウンター: {count}</h2>
            <button onClick={decrementCounter}>カウントダウン</button>
        </div>
    )
}

export default CounterComponent;