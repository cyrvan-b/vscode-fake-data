// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('vscode-fake-data.fake', (editor, edit) => {
		editor.selections.forEach((selection, i) => {
			let text = "FooBar " + i;
			edit.insert(selection.active, text);
		});
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
