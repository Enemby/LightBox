var TargetTag : String = "Player";
var clock : float;
var VelocityLimit : float = 20;
var Force : float = 20;

function Timer(){
if(clock > 1.2){
clock=0;}
clock+= Time.deltaTime;
return clock;
}
function VarLimiter(min,max,changedvar){
	if(changedvar > max){
		changedvar = max;
	}
	if(changedvar < min){
		changedvar = min;
	}
}
function OnCollisionEnter(otherobj : Collision){
/*
	if(otherobj.gameObject.tag == Hittag){
		this.rigidbody.freezeRotation = false;
		this.rigidbody.AddForce(otherobj.relativeVelocity);
		Destroy(otherobj.gameObject);
		this.gameObject.tag = "Untagged";
		this.enabled = false;
	}
	*/
}
function Update(){
	Timer();
	VarLimiter(-VelocityLimit,VelocityLimit,this.GetComponent.<Rigidbody>().velocity.z);
	VarLimiter(-VelocityLimit,VelocityLimit,this.GetComponent.<Rigidbody>().velocity.x);
	VarLimiter(-VelocityLimit,VelocityLimit,this.GetComponent.<Rigidbody>().velocity.y);
	var player = GameObject.FindWithTag (TargetTag);
		this.transform.LookAt(player.transform);
		this.GetComponent.<Rigidbody>().velocity = this.transform.forward * 40;
}