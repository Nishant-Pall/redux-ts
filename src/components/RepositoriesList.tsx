import React from "react";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RepositoriesList = () => {
    const [term, setTerm] = useState("");
    const { searchRepositories } = useActions();
    const { data, loading, error } = useTypedSelector(
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
            {error && <div>{error}</div>}
            {loading && <div>loading...</div>}
            {!error &&
                !loading &&
                data.map((name) => <div key={name}>{name}</div>)}
        </div>
    );
};
