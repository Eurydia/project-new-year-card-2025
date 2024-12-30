import fs from "node:fs";
import path from "node:path";

function ivToHex(iv) {
  return Array.from(iv)
    .map((byte) => byte.toString(16).padStart(2, "0")) // Convert each byte to hex and pad to 2 digits
    .join(""); // Combine into a single string
}

const encryptDocument = async (plainText, passphrase) => {
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

// Source and destination directories
const sourceDir = "./content";
const destDir = "./public/assets/content";

// Function to copy a file
function copyFile(fileName) {
  const sourcePath = path.join(sourceDir, fileName);

  // Read the file content from the source directory
  fs.readFile(
    sourcePath,
    "utf8",
    async (err, rawContent) => {
      if (err) {
        console.error(
          `Error reading file ${fileName}:`,
          err
        );
        return;
      }

      const { encryptedDocument, iv } =
        await encryptDocument(rawContent, fileName);
      const destPath = path.join(
        destDir,
        `${fileName}-${iv}.enc`
      );

      // Write the file content to the destination directory
      fs.writeFileSync(
        destPath,
        encryptedDocument,
        (err) => {
          if (err) {
            console.error(
              `Error writing file ${fileName}:`,
              err
            );
          }
        }
      );
    }
  );
}

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
} else {
  fs.readdirSync(destDir).forEach((file) => {
    const filePath = path.join(destDir, file);
    fs.unlinkSync(filePath);
  });
}

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    return;
  }

  // Copy each file from the source directory to the destination directory
  files.forEach((file) => {
    copyFile(file);
  });
});
