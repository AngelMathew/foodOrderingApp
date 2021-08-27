import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SortService } from '../services/sort.service';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss'],
})
export class SortFilterComponent implements OnInit {
  @Input() selectedSort: string;
  clicked = false;
  constructor(
    private modalCtrl: ModalController,
    private sortService: SortService
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
  sortItem() {
    console.log('sortItem');
    this.sortService.sortString.emit('dealAmount');
    this.clicked = true;
  }
}
