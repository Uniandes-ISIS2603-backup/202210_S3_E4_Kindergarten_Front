import { Component, OnInit } from '@angular/core';
import { Jardin } from './jardin';
import { JardinService } from './jardin.service';

@Component({
  selector: 'app-jardin',
  templateUrl: './jardin.component.html',
  styleUrls: ['./jardin.component.css']
})
export class JardinComponent implements OnInit {

  constructor(private jardinService:JardinService) { }

  jardines: Array<Jardin> = [];

  getJardines() {
    this.jardinService.getJardines().subscribe((jardines:any)=>{this.jardines=jardines;});
  }
  ngOnInit() {
    this.getJardines();
  }

}
