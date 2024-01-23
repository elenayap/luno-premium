import promptSync from "prompt-sync";

const prompt = promptSync();

export async function checkCryptoPrice() {
  const user_Input = prompt("Enter cryptocurrency name:").toUpperCase();

  return user_Input; // return use when need to return back the value in the varaible
}
