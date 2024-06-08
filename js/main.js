document.querySelector("#check-btn").addEventListener("click", numberValidator);

function numberValidator() {
  const input = document.querySelector("#user-input").value;
  const resultsDiv = document.querySelector("#results-div");
  let result = "";
  let error = "";
  const check = "0123456789-() ";
  if (!input) {
    alert("Please provide a phone number");
  } else {
    if (!input.split("").every((el) => check.includes(el))) {
      error = `Invalid US number: ${input}`;
    } else {
      let format = [
        "1 aaa-aaa-aaaa",
        "1 (aaa) aaa-aaaa",
        "1(aaa)aaa-aaaa",
        "1 aaa aaa aaaa",
        "aaaaaaaaaa",
        "aaa-aaa-aaaa",
        "(aaa)aaa-aaaa",
      ];
      const modifiedInput = input.split("").map((el, i) => {
        if (i === 0 && el === "1") {
          return 1;
        } else if ("0123456789".includes(el)) {
          return "a";
        } else return el;
      });
      const ans = format.some((el) => {
        return el === modifiedInput.join("");
      });
      if (ans) {
        result = `Valid US number: ${input}`;
      } else {
        error = `Invalid US number: ${input}`;
      }
    }
  }
  resultsDiv.innerHTML += `
  <p class='result'>${result}</p>
  <p class='error'>${error}</p>
  `;
  document.querySelector("#user-input").value = "";
}

document.querySelector("#clear-btn").addEventListener("click", clear);

function clear() {
  document.querySelector("#results-div").innerHTML = "";
}
