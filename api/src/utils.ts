const generateUniqueCode = (existingGameCodes: string[]): string => {
  let code = ""
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const codeLength = 6
  do {
    code = ""
    for (var i = 0; i < codeLength; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (existingGameCodes.includes(code));

  return code
}

export { generateUniqueCode }
