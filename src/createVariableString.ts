function createVariableString(text: string, variables: Record<string, any>): string {
  return text.replace(
    new RegExp('{([^{]+)}', 'g'),
    (_, name) => variables[name]
  );
}

export default createVariableString;