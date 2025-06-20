import { router } from "@inertiajs/react"
import "./main.css"
import Welcome from "./welcome"
import { useState } from "react"
function Main({folios}) {
    console.log(folios)
    const [skillToDeleteId , setSkilltoDeleteId] = useState()
    const deleteSkill = (e : any , id : number) => {
        e.preventDefault()
        router.delete(`/skills/delete/${id}`)
    }
    return (
        <Welcome>
        <div className="h-screen w-screen">
            <h1 className="text-3xl text-center hero">Welcome to {folios.prénom} {folios.nom}'s portfolio !</h1>
            <div className=" flex justify-center items-center flex-col" >
            <img className="img_folio" src={folios.photo} alt={folios.prénom + " " + folios.nom + " picture" } />
            <p>About me : {folios.bio}</p>
            </div>
        <div className="pes_container w-screen flex justify-center items-center flex-col">
            <div className="p_container ">
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
                {folios.experiences.map((e) => (
                    <>
                   <h1>{e.titre} : {e.entreprise}</h1> 
                   </>
                ))}
            </div>
            <div className="s_container">
                <h1>My Skills</h1>
                {folios.skills.map((e) => (
                    <div>
                        <h1>{e.nom}</h1> 
                        <form >
                             <button type="submit" onClick={(a) => deleteSkill(a, e.id)} className="border">Remove</button>
                        </form>
                        <a href={`/skills/edit/${e.id}`}>edit</a>
                   </div>
                ))}
                <a href="/skills/create">Add a new skills</a>
            </div>
        </div>
        </div>
        </Welcome>
    )
}
export default Main