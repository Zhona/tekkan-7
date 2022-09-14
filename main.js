let fighters = ["bryan", "anna", "feng", "steve","hwoarang","jin","lars","paul","eddy", "yoshimitsu",
"heihachi", "kazuya"]

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
    div.style.height = "100px"
    div.style.height = "100px"
    img.style.height = "100px"
    img.style.height = "100px"
    fightersGrid.append(div)
    div.append(img)
})

