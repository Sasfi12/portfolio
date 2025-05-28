import "./main.css"
function Welcome({folios}) {
    console.log(folios)
    return (
        <div className="h-full">
            <h1 className="text-3xl text-center">Welcome to {folios.prénom} {folios.nom}'s portfolio !</h1>
            <div className="w-full flex justify-center align-middle " >
            <img className="h-20 w-20 " src={folios.photo} alt={folios.prénom + " " + folios.nom + " picture" } />
            </div>
        </div>
    )
}
export default Welcome