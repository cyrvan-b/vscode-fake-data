// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import { faker } from '@faker-js/faker';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerTextEditorCommand('vscode-fake-data.fake.uuid', async (editor, edit) => {
		editor.selections.forEach((selection) => {
			edit.insert(selection.active, faker.string.uuid());
		});
	}));
}

export function deactivate() {}
