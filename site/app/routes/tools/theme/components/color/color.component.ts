import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color',
    templateUrl: './color.component.html',
    styleUrls: [ './color.component.less' ]
})
export class ColorComponent {
    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();

    @Input() rgba: boolean = false;

    change(res: any) {
        if (this.rgba) {
            const rgb = res.color.rgb;
            this.value = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
        } else {
            this.value = res.color.hex;
        }
        this.valueChange.emit(this.value);
    }
}
