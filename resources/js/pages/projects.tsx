import Welcome from "./welcome"
function Projects({projects}) {
    console.log(projects)
    return <Welcome> <div>
        my Projects 
        {projects&&projects.map((e) =>
        <div> 
            <h1>{e.titre}</h1>
            <img src={e.image} alt={e.titre + " image"} />
        </div>
        )}
    </div>
    </Welcome>
}
export default Projects