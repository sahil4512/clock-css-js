function Dateupdate() {
  const secondHand = document.querySelector(".sec-hand");
  const minsHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  const now = new Date();

  const seconds = now.getSeconds();
  const secondsdegree = (seconds / 60) * 360 + 90;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsdegree}deg)`;
}
setInterval(Dateupdate, 1000);
