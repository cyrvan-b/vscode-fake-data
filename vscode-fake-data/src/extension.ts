// The module 'vscode' contains the VS Code extensibility API
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('vscode-fake-data.fake', () => {
		vscode.window.showInformationMessage('Hello World from vscode-fake-data!');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
