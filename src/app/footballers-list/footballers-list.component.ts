import { Component, OnInit } from '@angular/core';
import  footballers from '../models/footballers' ;
import { FootballServiceService } from '../football-service.service';
import {Observable,of} from 'rxjs';
import {map,filter} from 'rxjs/operators';
import { MatPaginator, MatTableDataSource,MatTable } from '@angular/material';
import { ViewChild } from "@angular/core";
import { DataSource } from '@angular/cdk/table';



@Component({
  selector: 'app-footballers-list',
  templateUrl: './footballers-list.component.html',
  styleUrls: ['./footballers-list.component.css']
})
export class FootballersListComponent implements OnInit {
  
   public footballersList:footballers[];
   
   selectedValue: string;
   displayedColumns: string[] = ['id', 'name','position','rating','value','select'];
   public dataSource;
    @ViewChild(MatPaginator) paginator: MatPaginator;

     public filters :any = [
    {code: 'GK', name: 'Goal Keepers'},
    {code: 'MF', name: 'Mid Fielders'},
    {code: 'DF', name: 'Defenders'},
    {code: 'FW', name: 'Forward Players'},
     {code: 'ALL', name: 'All'}
  ];

  constructor(public footballSvc:FootballServiceService) { }

  ngOnInit() {

/**Using material Desing table, Assign dataSource to table */

this.footballersList=this.footballSvc.Footballerslist;
this.footballersList.map(list => list.name = list.name.toUpperCase());
this.footballersList.map(list => {
  if(list.position == "GK"){
    list.position = "Goal Keepers"
  }
  else if(list.position =="MF"){
    list.position ="Mid Fielders"
  }
  else if(list.position =="DF"){
    list.position="Defenders"
  }
  else if(list.position =="FW"){
    list.position ="Forward Players"
  }
})

this.dataSource = new MatTableDataSource<footballers>(this.footballersList);

this.dataSource.paginator=this.paginator;

}
   


  // On selection of a player from grid

  public OnSelect(selectedPlayer:any):void{
    alert("Selected Player's Details  ID = "+ selectedPlayer.id + " Name : " +selectedPlayer.name  +" , Club : Manchester United"  );
  }

 public createRange(number):number[]{
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  //Filter players position wise

public filterChange():void{
  
  if(this.selectedValue == "All")
  {
    this.dataSource = new MatTableDataSource<footballers>(this.footballersList);

    this.dataSource.paginator=this.paginator;
  }
  else
  {
   
  this.dataSource = new MatTableDataSource<footballers>(this.footballersList.filter(filter => filter.position == this.selectedValue));

  this.dataSource.paginator=this.paginator;
  }
  

}

// Find player who was paid highest
public getHighestPaid(): string{
  var highest_paid = this.footballersList.reduce( (a, b) => a.value > b.value ? a : b );
  return highest_paid.name;
}
 
 // Find total cost of whole team
 public getTotalCost():any {
    return this.footballersList.map(t => t.value).reduce((acc, value) => acc + value, 0);
  }

}
