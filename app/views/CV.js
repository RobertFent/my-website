import { ProductionNote } from '../components/ProductionNote.js';
import { html } from '../../core/modules/html.js';

export const CV = () => {
	return html` <div>${ProductionNote()}</div> `;
};
