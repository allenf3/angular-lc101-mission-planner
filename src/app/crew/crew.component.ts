import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;
  placeholder: string = "Enter name";

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  
  add(name: string, first: boolean) {
    if(this.crew.filter(checkForName).length === 0) {
      this.crew.push({name: name, firstMission: first})
    }
    document.querySelector("input").value = "";

    function checkForName(member) {
      return member.name === name;
    }
  }
  
  remove(crewMember: object) {
    let index = this.crew.indexOf(crewMember)
    this.crew.splice(index, 1);
  }
  
  edit(crewMember: object) {
    this.memberBeingEdited = crewMember;
  }

  save(newName: string, crewMember: object) {
    if(this.crew.filter(checkForName).length ===  0) {
      crewMember['name'] = newName;
    }

    function checkForName(member) {
      return member.name === newName;
    }

    this.memberBeingEdited = null;
  }
}