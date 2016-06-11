import {Component, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {OptionData} from './select2.interface';

@Component({
    moduleId: module.id,
    selector: 'select2',
    templateUrl: 'select2.component.html',
    styleUrls: ['select2.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class Select2Component {
    // data for select2 dropdown
    @Input() data:Array<OptionData>;
    @ViewChild('selector') selector;

    // Optional options for select2
    @Input() width:string;
    @Input() templateSelection;
    @Input() templateResult;

    private element:JQuery;

    ngAfterViewInit() {
        if(this.data) {
            this.element = jQuery(this.selector.nativeElement);
            this.element.select2({
                width: this.width,
                data: this.data,
                templateResult: this.templateResult,
                templateSelection: this.templateSelection
            }); 
        }        
    }
}