import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filtered: Object[]
  ngOnInit() {}
  data = [];
  listArr = [];

  searchField;
  clearSearchField() {
    this.searchField = '';
  }
  onClickSubmit(result) {
    this.data.push(result);
    this.filtered = this.listArr.filter(element => element.phnnumber === result.phnnumber)
    // console.log(result);
    console.log(this.filtered);
  }

  addToList() {
    this.listArr.push(this.data);
    // console.log(this.listArr);
  }
  removeItem(index: number) {
    this.listArr.splice(index, 1);
  }
}
