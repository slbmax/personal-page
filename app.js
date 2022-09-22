let openInfo = false
let openProj = false
let openExp = false
const arr = ["./images/bull.jpg", "./images/one.jpg", "./images/two.jpg"]

function OpenInfo(){
    openInfo = !openInfo

    const info1 = document.getElementById("info1")
    const info2 = document.getElementById("info2")

    if (openProj) {
        openProj = false
        info2.style.display = "none"
        info1.style.display = "block"
    }
    else {
        if (openInfo) {
            info1.style.display = "block"
        } else {
            info1.style.display = "none"
        }
    }
}

function OpenProjects(){
    openProj = !openProj

    const info1 = document.getElementById("info1")
    const info2 = document.getElementById("info2")
    
    if (openInfo) {
        openInfo = false
        info1.style.display = "none"
        info2.style.display = "block"
    }
    else {
        if (openProj) {
            info2.style.display = "block"
        } else {
            info2.style.display = "none"
        }
    }
}

function OpenExpectations(){
    openExp = !openExp

    const exps = document.querySelectorAll(".expectations")
    exps.forEach((exp) => {
        if (openExp) {
            exp.classList.add("text-shown")
        } else {
            exp.classList.remove("text-shown")
        }
    })

}

function LoadRandomPhoto(){
    let value = Math.floor(Math.random()*(arr.length))
    const img = document.getElementById("mypic")
    img.setAttribute("src", arr[value])
}