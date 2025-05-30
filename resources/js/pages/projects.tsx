import Welcome from "./welcome"
function Projects({projects}) {
    return <Welcome> <div>
        my Projects 
        {projects&&projects.map((e) => <h1>{e.titre}</h1>
        )}
    </div>
    </Welcome>
}
export default Projects