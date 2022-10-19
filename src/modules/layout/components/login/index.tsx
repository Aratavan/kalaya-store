const Login = () => {  
    return (
        <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <form>
                <div className="mb-6">
                    <input
                    type="email"
                    className="form-control font-nunito block w-full px-6 py-4 text-xl font-normal text-medium  text-grey70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email Id"
                    />
                </div>
        
                <div className="mb-6">
                    <input
                    type="password"
                    className="form-control font-nunito block w-full px-6 py-4 text-xl font-normal text-medium text-slate-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    />
                </div>
                <div className="flex justify-between items-center mb-3">
                    <div className="form-group form-check">
                    <input type="checkbox" className="appearance mr-2 h-4 w-4 border checked:text-grey70-500" />
                    <label className="form-check-label font-nunito text-medium inline-block text-grey70 text-grey70-800"  id="exampleCheck2"
                        >Remember me</label
                    >
                    </div>
                </div>
                <a
                    className="font-nunito text-grey70 hover:text-grey70-700 text-medium focus:text-grey70-700 active:text-grey70-800 duration-200 transition ease-in-out underline underline-offset-4"
                    >Forgot password?</a
                    >
                <button
                    type="submit"
                    className="py-3 px-5 mt-5 text-center font-nunito text-white bg-brown text-xxmedium uppercase rounded shadow-md hover: bg-brown-700 hover:shadow-lg focus:bg-brown-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-brown-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    Login
                </button>
                </form>
            </div>
            </div>
        </div>
    )
    
}

export default Login