import { router } from "@inertiajs/react"
import { useState } from "react"
import Welcome from "./welcome"
function skillCreate() {
    const [values , setValues] = useState(
        {
            nom : "",
            niveau : 0,
            user_id : 1
         }
    )
    
    const handleSubmit = (e) => {
            e.preventDefault()
            router.post("/skills/store" , values, {
                onSuccess: (data) => {
                    router.get('/')
                }
            });
    }  
    console.log(values)
                /*  
                    $table->string("nom");
                    $table->integer("niveau");
                */
    // return <div>
    //     <form onSubmit={handleSubmit}>
    //         <div>
    //             <input  type="text" placeholder="nom" />
    //         </div>
    //         <div>
    //             <input  type="number" placeholder="niveau" />
    //         </div>
    //         <div>
    //             <button type="submit">Add</button>
    //         </div>
    //     </form>
    // </div>


return <Welcome><form onSubmit={handleSubmit} className="max-w-sm mx-auto">
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill Name</label>
    <input onChange={(e) => setValues({...values , nom: e.target.value})} type="string" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="skill" required />
  </div>
  <div className="mb-5">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skill Level</label>
    <input onChange={(e) => setValues({...values , niveau: parseInt(e.target.value)})} type="number" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="level" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
    </div>
    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</Welcome>
}

export default skillCreate