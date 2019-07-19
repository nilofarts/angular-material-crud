import { Component, OnInit } from '@angular/core';
import { shiftMasterTable } from './models/shiftMasterTable';
import { ShiftMasterTableService } from './shift-master-table.service';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-shift-master-table',
  templateUrl: './shift-master-table.component.html',
  styleUrls: ['./shift-master-table.component.css']
})
export class ShiftMasterTableComponent implements OnInit {
  shiftMasterArray: shiftMasterTable[];
  tableLength: number;
  addRowFlag: boolean[] = new Array();
  edit: boolean=false;
  selectedRow: number;
  shiftMasterTable: any;
  

 constructor(private shiftMasterTableService: ShiftMasterTableService) {}
 

  ngOnInit() {
  this.shiftMasterTableService.getData()
 .subscribe(responseMessage => {
  this.shiftMasterArray = responseMessage;
 //for pagination
this.edit=false;

 });
}

//for resize column
	// onResizeEnd(event: ResizeEvent, columnName): void {
	// 	if (event.edges.right) {
	// 		const cssValue = event.rectangle.width + 'px';
	// 		const columnElts = document.getElementsByClassName('mat-column-' + columnName);
	// 		for (let i = 0; i < columnElts.length; i++) {
	// 			const currentEl = columnElts[i] as HTMLDivElement;
	// 			currentEl.style.width = cssValue;
	// 		}
	// 	}
  // }
  ///Insert New row
  // addElement() {
  //   ELEMENT_DATA.push({position: 1, name: this.value1, weight: 1.0079, symbol: 'H'})
  //   this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  // }
  addNewRow(i:number) {
    
    var newshiftMasterTable: shiftMasterTable = new shiftMasterTable();
    this.shiftMasterArray.splice(this.selectedRow +1,0,newshiftMasterTable);
    this.shiftMasterArray = JSON.parse(JSON.stringify(this.shiftMasterArray));
    this.tableLength = this.shiftMasterArray.length + 1;
    this.edit=true;
    this.addRowFlag[this.selectedRow+1] = true;
  }
  forSelectRow(index) {
    this.selectedRow = index;
    // console.log("Selected Row=", index);
  }
  submit( shift: shiftMasterTable[]){
     
    // .createShiftMaster(this.shiftMasterArray).subscribe(data => {
      
      this.shiftMasterTableService.createShiftMaster(this.shiftMasterArray)
      .subscribe(data => {
        this.shiftMasterTable=data;
      })
    }
    delete(index){
      this.shiftMasterArray.splice(index, 1)
    }
  }
   
  

