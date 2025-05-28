function Welcome({folios}) {
    console.log(folios)
    return (
        <div>
            <h1>Welcome to {folios.prénom} {folios.nom}'s portfolio !</h1>
            <img src={folios.photo} alt={folios.prénom + " " + folios.nom + " picture" } />
        </div>
    )
}
export default Welcome