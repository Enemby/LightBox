@script RequireComponent(Light)
var Force : float = 20;
var Health : int = 3;
var LightMaterial : Material;
var DarkMaterial : Material;
enum OrbMode {
	Bright,
	Dark,
}
var Mode : OrbMode = OrbMode.Bright;
var Switch : AudioClip;
function Update () {
	if(Health <= 0){
		Application.LoadLevel("Titlescreen");
	}
	if(Mode == OrbMode.Bright){
		MoveInput();
		this.GetComponent(Light).enabled = true;
		this.GetComponent(Renderer).material = LightMaterial;
		this.GetComponent(Rigidbody).useGravity = false;
	}
	else{
		this.GetComponent(Light).enabled = false;
		this.GetComponent(Renderer).material = DarkMaterial;
		this.GetComponent(Rigidbody).useGravity = true;
	}
	if(Input.GetButtonDown("Switch")){
		ChangeMode();
	}
	VarLimiter(-40,40,this.GetComponent(Rigidbody).velocity.x);
	VarLimiter(-40,40,this.GetComponent(Rigidbody).velocity.y);
	VarLimiter(0,0,this.GetComponent(Rigidbody).velocity.z);
}
function MoveInput(){
	if(Input.GetAxis("Horizontal")){
		this.GetComponent(Rigidbody).velocity.x = Force * Input.GetAxis("Horizontal");
	}
	if(Input.GetAxis("Vertical")){
		this.GetComponent(Rigidbody).velocity.y = Force * Input.GetAxis("Vertical");
	}	
}
function ChangeMode(){
	this.GetComponent(AudioSource).PlayOneShot(Switch);
	if(Mode == OrbMode.Dark){
		Mode = OrbMode.Bright;
	}
	else{
		Mode = OrbMode.Dark;
	}
}
function Damage(amount){
	Health-=amount;
}
function VarLimiter(min,max,changedvar){
	if(changedvar > max){
		changedvar = max;
	}
	if(changedvar < min){
		changedvar = min;
	}
}
function GetMode(){
	if(Mode == OrbMode.Dark){
		return "Dark";
	}
	else{
		return "Light";
	}
}
function OnGUI() {
GUI.color = Color.green;
GUI.backgroundColor = Color.green;
GUI.Button(Rect(0, 0, 100 * Health, 100), "Health: "+Health);
}