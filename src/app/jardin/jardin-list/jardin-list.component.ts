import { Component, OnInit } from '@angular/core';
import { Jardin } from '../jardin';
import { JardinService } from '../jardin.service';

@Component({
  selector: 'app-jardin-list',
  templateUrl: './jardin-list.component.html',
  styleUrls: ['./jardin-list.component.css']
})
export class JardinListComponent implements OnInit {

  jardines:Array<Jardin>=[];

  constructor(private jardinService:JardinService) { }

  getJardines(){
    this.jardinService.getJardines().subscribe((jardines:any) => {
      this.jardines = jardines;
    });
  }

  ngOnInit() {
    this.getJardines();
  }


}
