import {Component, OnInit} from '@angular/core';
import {RaceListService} from "../../../data/services/race/race-list.service";
import {MatTableDataSource} from "@angular/material/table";
import {RaceModel} from "../../../data/model/race-model";

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css']
})
export class RaceListComponent implements OnInit {

  races = [];
  dataSource: MatTableDataSource<RaceModel> = new  MatTableDataSource<RaceModel>();
  public displayedColumns = ['id', 'name', 'country', 'date', 'distance', 'itraPoints']
  constructor(private raceListService: RaceListService) {}

  ngOnInit(): void {
    this.raceListService
      .getRaces()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<RaceModel>(data);
        console.log(data);
      })
  }



}
