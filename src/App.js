import './App.css';
import {useAsyncList} from "react-stately";
import Table from "./Table";

function App() {
    const list = useAsyncList({
        async load({signal, cursor}) {
            const res = await fetch(cursor || 'https://pokeapi.co/api/v2/pokemon', {
                signal
            });
            const json = await res.json();
            return {
                items: json.results,
                cursor: json.next
            };
        },
        getKey() {
            return URL.createObjectURL(new Blob([])).slice(-36);
        }
    });

    return (
        <div className="App">
            <Table list={list}/>
            <button onClick={() => list.reload()}>reload</button>
        </div>
    );
}

export default App;
