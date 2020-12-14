import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  placeholder: string = "Enter equipment";
  itemToEdit: string = null;

  constructor() { }

  ngOnInit() {
  }

  addEquipment(item: string) {
    if(!this.equipment.includes(item) && item){
      this.equipment.push(item);
    }
    (<HTMLInputElement>document.getElementById("addEquipment")).value = "";
  }

  edit(item: string) {
    this.itemToEdit = item;
  }

  save(newEquipmentName: string) {
    if(!this.equipment.includes(newEquipmentName)) {
      let index = this.equipment.indexOf(this.itemToEdit);
      this.equipment[index] = newEquipmentName;
    }
    this.itemToEdit = null;
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

}
