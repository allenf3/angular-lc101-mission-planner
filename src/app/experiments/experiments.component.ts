import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  
  experiments: string[] = [ 'Mars soil sample', 'Plant growth in habitat', 'Human bone density' ];
  placeholder: string = "Experiment";
  experimentToEdit: string = null;

  constructor() { }

  ngOnInit() {
  }
  
  addExperiment(experiment: string) {
    if(!this.experiments.includes(experiment) && experiment) {
      this.experiments.push(experiment);
    }
    (<HTMLInputElement>document.getElementById("experiments")).value = ""
  }

  edit(experiment) {
    this.experimentToEdit = experiment;
  }

  save(newName: string) {
    if(!this.experiments.includes(newName)){
      let index = this.experiments.indexOf(this.experimentToEdit);
      this.experiments[index] = newName;
    }
    this.experimentToEdit = null;
  }

  remove(experiment) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }
}
