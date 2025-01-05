const ivToHex = (iv: Uint8Array) => {
  return Array.from(iv)
    .map((byte) => byte.toString(16).padStart(2, "0")) // Convert each byte to hex and pad to 2 digits
    .join(""); // Combine into a single string
};

const hexToUint8Array = (hexIv: string) => {
  const length = hexIv.length;
  const uint8Array = new Uint8Array(length / 2);
  for (let i = 0; i < length; i += 2) {
    uint8Array[i / 2] = parseInt(hexIv.substr(i, 2), 16); // Parse every two hex characters
  }
  return uint8Array;
};

export const encryptDocument = async (
  plainText: string,
  passphrase: string
) => {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: new TextEncoder().encode("unique-salt"),
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encryptedData = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    new TextEncoder().encode(plainText)
  );
  return {
    encryptedDocument: btoa(
      String.fromCharCode(...new Uint8Array(encryptedData))
    ),
    iv: ivToHex(iv),
  };
};

export const decryptDocument = async (
  encryptedDocument: string,
  iv: string,
  passphrase: string
) => {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: new TextEncoder().encode("unique-salt"),
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
  const encryptedBytes = Uint8Array.from(
    atob(encryptedDocument),
    (c) => c.charCodeAt(0)
  );
  const ivBytes = hexToUint8Array(iv);
  const decryptedData = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: ivBytes },
    key,
    encryptedBytes
  );
  return new TextDecoder().decode(decryptedData);
};
