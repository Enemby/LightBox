var zDistance : float = 20;
function Update () {
Follow(FindPlayer());
}
function FindPlayer(){
	var Player = GameObject.Find("Player");
	return Player;
}
function Follow(Player){
	this.transform.position = Player.transform.position;
	this.transform.position.z = -zDistance;
}