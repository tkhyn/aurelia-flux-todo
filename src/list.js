import {inject} from 'aurelia-framework';
import {Dispatcher} from 'aurelia-flux';

@inject(Dispatcher)
export class List {
	constructor(dispatcher) {
		this.dispatcher = dispatcher;
	}

	addItem(text:Object) {
		let newItemText = (text.value || '').trim();

		if(newItemText === '') {
			return;
		}

		this.dispatcher.dispatch('list.addItem', newItemText);
        
        text.value = '';
	}	
}
