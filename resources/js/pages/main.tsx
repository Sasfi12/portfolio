import "./main.css"
import Welcome from "./welcome"
function Main({folios}) {
    console.log(folios)
    return (
        <Welcome>
        <div className="h-full ">
            <h1 className="text-3xl text-center hero">Welcome to {folios.prénom} {folios.nom}'s portfolio !</h1>
            <div className=" flex justify-center align-middle " >
            <img className="img_folio" src={folios.photo} alt={folios.prénom + " " + folios.nom + " picture" } />
            </div>
        <div className="pes_container">
            <div className="p_container">
                <h1>My Projects</h1>
                {folios.projects.map((e) => (
                    <>
                   <h1>{e.titre}</h1> 
                   <img className="project_img" src={e.image} alt={e.image + " image"} />
                   </>
                ))}
            </div>
            <div className="e_container">
                <h1>My Experiences</h1>
            </div>
            <div className="s_container">
                <h1>My Skills</h1>
            </div>
        </div>
        </div>
        </Welcome>
    )
}
export default Main