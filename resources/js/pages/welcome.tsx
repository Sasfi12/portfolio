import "./main.css"
function Welcome({folios}) {
    console.log(folios)
    return (
        <div>
            <h1 className="text-9xl">Welcome to {folios.prénom} {folios.nom}'s portfolio !</h1>
            <img className="h-20 w-20" src={folios.photo} alt={folios.prénom + " " + folios.nom + " picture" } />
        </div>
    )
}
export default Welcome