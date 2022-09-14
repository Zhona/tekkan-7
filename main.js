let fighters = ["heihachi", "kazuya", "bryan", "anna", "feng", "steve", "hwoarang", "jin", "lars", "paul", "eddy", "yoshimitsu", "ganryu", "claudio", "king", "kuma"]

// Recreate the Fighters grid using this function

const fighterUrl = (name) => {
  return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
}

let fightersGrid = document.getElementById("fighters-grid")
console.log(fightersGrid, "fighters grid")

fighters.forEach((fighter)=> {
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = fighterUrl(fighter)
    //div.style.height = "100px"
    //div.style.width = "100px"
    div.classList.add("fighter-thumb")
    img.style.height = "100px"
    img.style.width = "100px"
    fightersGrid.append(div)
    div.append(img)
})

