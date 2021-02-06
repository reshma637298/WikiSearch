import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Output() keyWord = new EventEmitter<string>();
  word='';
  search(event:any){
    event.preventDefault();
    this.keyWord.emit(this.word);
  }

  ngOnInit(): void {
  }

}
