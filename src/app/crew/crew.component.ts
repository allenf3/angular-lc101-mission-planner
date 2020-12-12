import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(name: string, first: boolean) {
    this.crew.push({name: name, firstMission: first})
  }

  remove(crewMember: object) {
    let index = this.crew.indexOf(crewMember)
    this.crew.splice(index, 1);
  }

  edit(crewMember: object) {
    this.memberBeingEdited = crewMember;
  }

  save(newName: string, crewMember: object) {
    crewMember['name'] = newName;
    this.memberBeingEdited = null;
  }
}