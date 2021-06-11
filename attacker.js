class Attacker extends BaseClass {
  constructor(x,y){
    super(x,y,30,30);
  
  }

  display() {
   
    fill("red");
    super.display();
  }
}
