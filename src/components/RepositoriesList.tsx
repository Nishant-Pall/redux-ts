import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    // get the searchRepositories action from the hook
    const { searchRepositories } = useActions();
    // Using typed selector to let react-redux know the
    // type of data we have in redux store
    const { data, error, loading } = useTypedSelector(
        (state) => state.repositories
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error &&
                !loading &&
                data.map((name) => <div key={name}>{name}</div>)}
        </div>
    );
};

export default RepositoriesList;
