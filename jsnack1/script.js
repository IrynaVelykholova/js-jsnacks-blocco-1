
const nomi = ["Franca", "Franco", "Franchina", "Franchino", "Franchetta"];
const cognomi = ["Rossi", "Ferrari", "Baudo", "Bianchi", "Colombo"];

for (let i = 0; i < 15; i++) {
    const randomCognomi = Math.floor(Math.random() * cognomi.length);
    const randomNomi = Math.floor(Math.random() * nomi.length);
    
    const lista = nomi[randomNomi] + " " + cognomi[randomCognomi];
    const listaContainer = document.getElementById("lista");
    
    const invitato = document.createElement("div");
    invitato.classList.add("text-center");
    
    invitato.append(lista);
    listaContainer.append(invitato); 
}

``