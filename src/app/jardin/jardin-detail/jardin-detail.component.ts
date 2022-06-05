import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jardin } from '../jardin';
import { JardinService } from '../jardin.service';

@Component({
  selector: 'app-jardin-detail',
  templateUrl: './jardin-detail.component.html',
  styleUrls: ['./jardin-detail.component.css']
})
export class JardinDetailComponent implements OnInit {

  jardinId!: string;
  @Input() jardin!:Jardin;

  constructor(private route: ActivatedRoute, private jardinService:JardinService) {

     }

  getJardin(){
    this.jardinService.getJardinId(this.jardinId).subscribe(jardin=>{
      this.jardin=jardin;
    })
  }

  ngOnInit() {

    if(this.jardin==undefined){
      this.jardinId=this.route.snapshot.paramMap.get('id')!
      if (this.jardinId){
        this.getJardin();
      }
    }

  }

}
