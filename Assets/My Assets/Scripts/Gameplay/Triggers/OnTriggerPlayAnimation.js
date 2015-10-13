//var MyAnimation : Animation;
function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "Player"){
		this.transform.parent.GetComponent.<Animation>().Play("Elevator 50 Meters");
	}
}