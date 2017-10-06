/* 
Build an ES6 President class with the following properties set by the constructor: name, politicalParty, yearsInOffice, and homeState.
*/
class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }
  
/*
Add following methods to the class:
1. veto — returns NO!
2. passBill — returns You can do that!
3. doCharity — returns I like to help people.
4. conductPressInterview — returns I am proud to be an American.
5. sayHi — returns Hi, my name is <name>. I am from <homestate>. I represent the <politicalParty>s, and was in office <yearsInOffice>.
*/
  
  veto() {
    return 'NO!';
  }
 
  passBill() {
    return 'You can do that!';
  }
  
  doCharity() {
    return 'I like to help people.';
  }
  
  conductPressInterview() {
    return 'I am proud to be an American.';
  }
  
  sayHi() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + "."
  }
}

var GeorgeWashington = new President("George Washington", "Demo", 10, "DC");
