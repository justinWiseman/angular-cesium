import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BillboardDrawerService } from '../../services/drawers/billboard-drawer/billboard-drawer.service';

/**
 * Don't use this component. Use ac-billboard-desc instead.
 */
@Component({
	selector: 'ac-billboard',
	template: ''
})
export class AcBillboardComponent implements OnChanges {

	@Input()
	props: Object;

	private key: any = Symbol();

	constructor(private billboardDrawer: BillboardDrawerService) {
	}

	ngOnChanges(changes: SimpleChanges) {
		const props = changes['props'];
		if (props.currentValue !== props.previousValue) {
			// this.billboardDrawer.addOrUpdate(this.key, props.currentValue);
		}
	}

}