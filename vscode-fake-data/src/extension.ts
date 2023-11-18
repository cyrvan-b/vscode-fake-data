// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import { faker } from '@faker-js/faker';

export function activate(context: vscode.ExtensionContext) {
	const fakers: [any, any] = [
		['vsf.fake.uuid', faker.string.uuid],
		['vsf.fake.fullname', faker.person.fullName],
		['vsf.fake.paragraph', faker.lorem.paragraph],
		['vsf.fake.words', faker.lorem.words],
		['vsf.fake.avatar', faker.image.avatar],
	];

	context.subscriptions.push(
		...fakers.map(([name, func, ...args]) => {
			return vscode.commands.registerTextEditorCommand(name, (editor, edit) => {
				editor.selections.forEach((selection) => {
					edit.insert(selection.active, func(...args));
				});
			});
		})
	);
}

export function deactivate() {}
