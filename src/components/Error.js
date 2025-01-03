import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1> Oops!!!</h1>
            <h2> Something went wrong!</h2>
            <div>{err.data}</div>
            <div>{err.status + " "+err.statusText}</div>
        </div>
    )
}

export default Error;