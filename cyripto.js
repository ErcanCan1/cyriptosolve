const caesarCipher = (string, shift) => {
    return string.replace(/[a-zA-Z]/g, function (c) {
      const base = c < "a" ? 65 : 97;
      return String.fromCharCode(
        ((c.charCodeAt(0) - base + shift) % 26) + base
      );
    });
  };

  // Function to translate the input text to Caesar Cipher
  const translate = () => {
    const plaintextValue = document.querySelector("textarea").value;
    const shiftValue = parseInt(document.getElementById("shift").value, 10);
    const outputValue = caesarCipher(plaintextValue, shiftValue);
    document.getElementById("output").innerHTML = outputValue;
  };

  // Attach translate function to input events
  document.querySelector("textarea").addEventListener("input", translate);
  document.getElementById("shift").addEventListener("input", translate);

  // Perform an initial translation on page load
  translate();