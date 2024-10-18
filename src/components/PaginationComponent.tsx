import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type FlagsProps = {
    prevFlag: boolean
    nextFlag: boolean
}
const PaginationComponent: FC<FlagsProps> = (flag) => {

    const [query, setQuery] = useSearchParams({page: '1'});

    const onClickPrevHandler = () => {
        const page = query.get('page');

        if (page && +page > 0) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()})
        }
    };

    const onClickNextHandler = () => {
        const page = query.get('page');

        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }
    };


    return (
        <div>
            <button onClick={onClickPrevHandler} disabled={flag.prevFlag}>prev</button>
            <button onClick={onClickNextHandler} disabled={flag.nextFlag}>next</button>
        </div>
    );
};

export default PaginationComponent;
