const Contact = ()=>{
    return (
        <div>
            <h1 className="text-4xl font-mono font-semibold text-center"> Contact us</h1>
            <div className="w-[40%] h-[70vh] rounded-2xl bg-gray-100 mx-auto my-5 p-5">
                <form className="flex flex-col items-center justify-center h-full w-[70%] mx-auto">
                    <input className="text-2xl p-3 rounded-lg my-3 w-full" type="text" placeholder="Name"></input>
                    <textarea className="text-2xl p-3 rounded-lg my-3 w-full h-[60%]" placeholder="Description"></textarea>
                    <button className="pay-btn px-12"> Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;


