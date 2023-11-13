// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import { faker } from '@faker-js/faker';

export function activate(context: vscode.ExtensionContext) {
	const fakers: [any, any] = [
		['vsf.fake.uuid', faker.string.uuid],
		['vsf.fake.fullname', faker.person.fullName],
	];

	context.subscriptions.push(
		...fakers.map(([name, func]) => {
			return vscode.commands.registerTextEditorCommand(name, (editor, edit) => {
				editor.selections.forEach((selection) => {
					edit.insert(selection.active, func());
				});
			});
		})
	);
}

export function deactivate() {}
