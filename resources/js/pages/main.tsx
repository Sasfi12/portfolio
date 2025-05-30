import "./main.css"
import Welcome from "./welcome"
function Main({folios}) {
    console.log(folios)
    return (
        <Welcome>
        <div className="h-full">
            <h1 className="text-3xl text-center hero">Welcome to {folios.prénom} {folios.nom}'s portfolio !</h1>
            <div className=" flex justify-center align-middle " >

            <img className="img_folio" src={folios.photo} alt={folios.prénom + " " + folios.nom + " picture" } />
            </div>
        </div>
        </Welcome>
    )
}
export default Main