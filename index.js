let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");

let homeScore = 0;
let guestScore = 0;

function leadTeam() {
    if (homeScore > guestScore) {
        homeCount.style.color = 'green'
        guestCount.style.color = 'red'
    } else if (homeScore < guestScore) {
        homeCount.style.color = 'red'
        guestCount.style.color = 'green'
    } else if (homeScore == guestScore) {
        homeCount.style.color = 'grey'
        guestCount.style.color = 'grey'
    }
}

function homeAdd1() {
    homeScore += 1
    homeCount.textContent = homeScore
    leadTeam()
}
function homeAdd2() {
    homeScore += 2
    homeCount.textContent = homeScore
    leadTeam()
}
function homeAdd3() {
    homeScore += 3
    homeCount.textContent = homeScore
    leadTeam()
}
function guestAdd1() {
    guestScore += 1
    guestCount.textContent = guestScore
    leadTeam()
}
function guestAdd2() {
    guestScore += 2
    guestCount.textContent = guestScore
    leadTeam()
}
function guestAdd3() {
    guestScore += 3
    guestCount.textContent = guestScore
    leadTeam()
}