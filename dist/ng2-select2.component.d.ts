import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges, Renderer2, OnInit } from '@angular/core';
import { Select2OptionData } from './ng2-select2.interface';
import { Options } from 'select2';
export declare class Select2Component implements AfterViewInit, OnChanges, OnDestroy, OnInit {
    private renderer;
    selector: ElementRef;
    data: Array<Select2OptionData>;
    value: string | string[];
    cssImport: boolean;
    width: string;
    disabled: boolean;
    options: Options;
    valueChanged: EventEmitter<unknown>;
    private element;
    private check;
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): Promise<void>;
    ngAfterViewInit(): Promise<void>;
    ngOnDestroy(): void;
    private initPlugin;
    private requireOldMatcher;
    private setElementValue;
    private style;
}
