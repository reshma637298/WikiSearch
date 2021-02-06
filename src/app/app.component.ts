import { Component } from '@angular/core';
import { GetWikiService } from './get-wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:any =[];

 
  constructor(private getWikiService:GetWikiService){}
  searchTerm(word:string) {
    this.getWikiService.getWikiContent(word).subscribe((res:any)=>{
      this.data = res;
      this.data=this.data.query.search;
      console.log(this.data);
    });
  }

  title = 'wikiSearch';
}
