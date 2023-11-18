// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';
import { faker } from '@faker-js/faker';

export function activate(context: vscode.ExtensionContext) {
	const fakers: any[] = [
		['vsf.fake.uuid', faker.string.uuid],
		['vsf.fake.fullname', faker.person.fullName],
		['vsf.fake.paragraph', faker.lorem.paragraph],
		['vsf.fake.words', faker.lorem.words],
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
	context.subscriptions.push(
		vscode.commands.registerTextEditorCommand('vsf.fake.picture.run', (editor, edit, x='120') => {
			editor.selections.forEach((selection) => {
				edit.insert(selection.active, `https://picsum.photos/${x}/${x}`);
			});
		}),
		vscode.commands.registerCommand('vsf.fake.picture', async () => {
			const x = await vscode.window.showInputBox({ placeHolder: 'Size: ' });
			vscode.commands.executeCommand('vsf.fake.picture.run', x);
		}),
	);
}

export function deactivate() {}
