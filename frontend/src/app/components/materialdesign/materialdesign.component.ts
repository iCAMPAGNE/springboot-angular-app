import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import {FloatLabelType, MatFormField, MatLabel} from '@angular/material/form-field';
import {
  MatCell, MatCellDef,
  MatColumnDef, MatFooterCellDef,
  MatFooterRowDef, MatHeaderCell, MatHeaderCellDef,
  MatHeaderRowDef,
  MatNoDataRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatIcon} from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatTooltip} from "@angular/material/tooltip";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-materialdesign',
  templateUrl: './materialdesign.component.html',
  imports: [
    ReactiveFormsModule,
    MatCheckbox,
    MatSlideToggle,
    MatRadioGroup,
    MatRadioButton,
    MatFormField,
    MatIcon,
    MatPaginator,
    MatTable,
    MatColumnDef,
    MatLabel,
    MatSelect,
    MatOption,
    MatTooltip,
    MatToolbar,
    MatToolbarRow,
    MatFooterRowDef,
    MatNoDataRow,
    MatHeaderRowDef,
    MatRowDef,
    MatFooterCellDef,
    MatHeaderCellDef,
    MatCell,
    MatHeaderCell,
    MatCellDef,
    MatInput
  ],
  styleUrls: ['./materialdesign.component.scss']
})
export class MaterialdesignComponent implements AfterViewInit {
  private _formBuilder: FormBuilder = inject(FormBuilder);

  writeControl = new FormControl(false);
  directionControl = new FormControl(false);
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
    direction: this.directionControl
  });

  direction = this.directionControl.value;

  readonly  = true;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  @ViewChild('paginator2') paginator2!: MatPaginator;
  @ViewChild('paginatorPageSize2') paginatorPageSize2!: MatPaginator;

  pageSizes = [3, 5, 7];

  families = [{name:'Parents', address:'78-th Avenue 534'}, {name:'Brother', address:'Central Square 22'}, {name: 'Sister',
    address: 'High street 17'}];
  selectedFamily = {name: null, address: null};
  showing: boolean = false;
  expanding: boolean = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  elements = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  dataSource = new MatTableDataSource(this.elements);
  dataSourceWithPageSize = new MatTableDataSource(this.elements);
  dataSource2 = new MatTableDataSource(this.elements);
  dataSourceWithPageSize2 = new MatTableDataSource(this.elements);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
    this.dataSource2.paginator = this.paginator2;
    this.dataSourceWithPageSize2.paginator = this.paginatorPageSize2;
  }

  preventDefault() {
    if (!this.writeControl.value) {
      this.directionControl.setValue(this.direction);
    }
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  toggle(): void {
    this.showing = !this.showing;
  }

  expandCollaps(): void {
    this.expanding = !this.expanding;
  }

  prefillAdres(family: any): void {
    this.selectedFamily = family;
    this.expandCollaps();
  }
}
