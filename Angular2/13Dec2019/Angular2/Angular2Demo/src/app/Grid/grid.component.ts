import {Component,Input,Output } from '@angular/core'

@Component({
    selector: 'grid-ui',
    templateUrl:'app/Grid/grid.html'
})

export class gridcomponent {
    gridColumns: Array<object> = new Array<object>();

    gridData: Array<object> = new Array<object>();
    @Input("grid-entityName")
    gridEntityName: string = "";

    @Input("grid-Data")
    set gridDataSet(_gridData: Array<object>) {
        if (_gridData.length > 0) {
            var columnNames = Object.keys(_gridData[0]).values;
            for (var index in columnNames) {
                this.gridColumns.push(columnNames[index]);
            }
            this.gridData = _gridData;
        }
    }
}