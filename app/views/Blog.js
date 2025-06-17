import { ProductionNote } from '../components/ProductionNote.js';
import { html } from '../../core/modules/html.js';

export const Blog = () => {
	return html` <div>${ProductionNote()}</div> `;
};
