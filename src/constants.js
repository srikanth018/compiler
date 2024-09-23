// constants.js
export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `function customPrompt(message) { return prompt(message); }\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\ngreet(customPrompt("What is your name?"));\n`,
  typescript: `function customPrompt(message: string): string { return prompt(message) || ''; }\ntype Params = { name: string; }\nfunction greet(data: Params) { console.log("Hello, " + data.name + "!"); }\ngreet({ name: customPrompt("What is your name?") });\n`,
  python: `def customPrompt(message): return input(message)\ndef greet(name):\n\tprint("Hello, " + name + "!")\ngreet(customPrompt("What is your name?"))\n`,
  java: `import java.util.Scanner;\nclass HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tScanner scanner = new Scanner(System.in);\n\t\tSystem.out.println("Enter your name: ");\n\t\tString name = scanner.nextLine();\n\t\tSystem.out.println("Hello, " + name + "!");\n\t}\n}\n`,
  csharp: 'using System;\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Enter your name:");\n\t\t\tstring name = Console.ReadLine();\n\t\t\tConsole.WriteLine("Hello, " + name + "!");\n\t\t}\n\t}\n}\n',
  php: `<?php\necho "What is your name?";\n$name = readline();\necho "Hello, $name!";\n?>\n`,
};
