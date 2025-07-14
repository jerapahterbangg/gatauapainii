const message = `I don’t know if you’ll ever read this or not.\nBut if you do… I just want to say, I still miss you often.
\n\nSometimes, for no clear reason, memories of you just appear out of nowhere. I miss the way we used to share stories, laugh together, and play games together.
\n\nI know that maybe now we’re walking our own separate paths. But this feeling of longing still lingers, quietly waiting for a time when it might finally fade.\n\nI hope you’re doing well over there. If someday you find yourself missing me too, just know that I feel the same way here.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
