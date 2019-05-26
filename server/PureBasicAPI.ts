import {
	ProposedFeatures,
	createConnection
} from 'vscode-languageserver';

import { DocTokenizer } from './DocTokenizer';
import { PureBasicCompletion } from './PureBasicCompletion';
import { PureBasicDocumentation } from './PureBasicDocumentation';
import { PureBasicIndentation } from './PureBasicIndentation';
import { PureBasicLine } from './PureBasicLine';

export * from './PureBasicDataModels';

export namespace pb {
	/**
	 * Provide functions used to parse and modify line structure and data
	 */
	export const line = new PureBasicLine();
	/**
	 * Provide functions used to parse and modify text structure and data
	 */
	export const text = new DocTokenizer();
	/**
	 * Provide functions used to display code autocompletion list
	 */
	export const completion = new PureBasicCompletion();
	/**
	 * Provide functions used to calculate and modify text indentation
	 */
	export const indentation = new PureBasicIndentation();
	/**
	 * Provide functions used to find and manage text documents.
	 * This doc manager handles full document sync events.
	 */
	export const documentation = new PureBasicDocumentation();
	/**
	 * Provide a connection for the server. The connection uses Node's IPC as a transport.
	 * Also include all preview / proposed LSP features.
	 */
	export const connection = createConnection(ProposedFeatures.all);
}