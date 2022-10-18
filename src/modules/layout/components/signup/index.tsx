const Signup = () => {  
    return (
        <div className="container px-6 py-12 h-full">
             <div className="flex mt-8 justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
        <form>
          <div className="mb-6">
            <input
              type="text"
              className="form-control font-nunito  block w-full px-6 py-4 text-xl font-normal text-medium  text-grey70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="First Name"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              className="form-control font-nunito  block w-full px-6 py-4 text-xl font-normal text-medium  text-grey70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              className="form-control font-nunito  block w-full px-6 py-4 text-xl font-normal text-medium  text-grey70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <input
              type="number"
              className="form-control font-nunito  block w-full px-6 py-4 text-xl font-normal text-medium  text-grey70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Phone"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="form-control font-nunito  block w-full px-6 py-4 text-xl font-normal text-medium  text-grey70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-slate-500 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="form-group form-check">
            
              <label className="text-grey70 font-nunito hover:text-grey70-700 text-medium focus:text-grey70-700 active:text-grey70-800 duration-200 transition ease-in-out" id="exampleCheck2"
                >By creating an account , you agree to Kalaya, Privacy policy and Term of use </label>
              
            </div>
          </div>
          <button
            type="submit"
            className="py-3 px-5 mt-4 font-nunito text-center text-white bg-brown text-xxmedium uppercase rounded shadow-md hover: bg-brown-700 hover:shadow-lg focus:bg-brown-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-brown-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
        </div>
    )
    
}

export default Signup