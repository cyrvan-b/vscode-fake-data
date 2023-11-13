// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import { faker } from '@faker-js/faker';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('vscode-fake-data.fake.uuid', async (editor, edit) => {
		editor.selections.forEach((selection) => {
			edit.insert(selection.active, faker.string.uuid());
		});
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
