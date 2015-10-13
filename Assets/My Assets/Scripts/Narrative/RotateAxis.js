enum Axis {
x,
y,
z
}
var rotate : Axis;
var RotateSpeed : float = 30;
function RotateMe(MyAxis : Axis){
if(MyAxis == Axis.x){
this.transform.Rotate(Vector3(RotateSpeed * Time.deltaTime,0,0));
}
if(MyAxis == Axis.y){
this.transform.Rotate(Vector3(0,RotateSpeed * Time.deltaTime,0));
}
if(MyAxis == Axis.z){
this.transform.Rotate(Vector3(0,0,RotateSpeed * Time.deltaTime));
}
}
function Update () {
RotateMe(rotate);
}