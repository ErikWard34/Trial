let profiles = JSON.pars(localStorage.getItem("profiles")) || [];

function createProfile() {
  let name = document.getElementById("name").value;
  let role = document.getElementById("role").value;
  let game = document.getElementById("game").value;
  let customGame = document.getElementById("customGame").value;
  if(game === "Other" && customGame !== "") {
    game = customGame;
  }
  let profile = {
    name,
    role,
    game
  };
  progiles.push(profile);

localStorage.setItem("profiles",JSON.stringify(profiles));

alert("Profile Created!");
  displayProfiles(profiles);
}

function displayProfiles(list) {
  let results = document.getElementById("results");
  results.innerHTML = "";

list.forEach(profile => {
  let card = document.createElement("div");
  card.className = "profile-card";

  card.innerHTML = `
  <h3>${profile.name}</h3>
  <p>Role: ${profile.role}</p>
  <p>Game: ${profile.game}</p>
  `;
  results.appendChild(card);
});
}

function filterProfiles() {
  let role = document.getElementById("filterRole").value;
  let game = document.getElementById("filterGame").value;
  let filtered = profiles.filter(profile => {
    return (
      (!role || profile.role === role) &&
      (!game || profile.game === game)
      );
  });
  displayProfiles(filtered);
}
displayProfiles(profiles);
