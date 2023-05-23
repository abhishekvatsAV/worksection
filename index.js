const boxes = document.getElementById("boxes");

let temp = "";

let obj = [
  {
    one: "Open Imagination",
    two: "Media, Icons",
  },
  {
    one: "Locked Steel Gate",
    two: "Illustrations",
  },
  {
    one: "Mac Sunglasses",
    two: "Graphics, UI Elements",
  },
  {
    one: "Morning Dew",
    two: "Icons, Illustrations",
  },
  {
    one: "Console Activity",
    two: "UI Elements, Media",
  },
  {
    one: "Shake It!",
    two: "Illustrations, Graphics",
  },
  {
    one: "Backpack Contents",
    two: "UI Elements, Icons",
  },
  {
    one: "Sunset Bulb Glow",
    two: "Graphics",
  },
];

for (let i = 1; i <= 8; i++) {
  temp += `<div class="relative group flex flex-col">
  <div
    class="flex items-center justify-center h-full group-hover:h-[70%] overflow-hidden transition-all ease-in-out duration-500"
  >
    <img src="./assets/${i}.jpg" alt="" />
  </div>

  <div
    class="absolute top-0 left-0 group-hover:h-[70%] h-full box-border w-full flex items-center flex-col justify-center bg-black/50 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500"
  >
    <div class="group-hover:block">
      <button
        class="rounded-full bg-white w-10 h-10 text-center hover:text-[#1abc9c]"
      >
        +
      </button>
      <button
        class="rounded-full bg-white w-10 h-10 text-center hover:text-[#1abc9c]"
      >
        <span class="-translate-y-5"> ... </span>
      </button>
    </div>
  </div>

  <div
    class="bg-white group-hover:block absolute box-border w-full h-0 transition-all ease-in-out duration-500 overflow-hidden group-hover:h-[30%] bottom-0"
  >
    <h3 class="hover:text-[#1abc9c] mt-3 ml-2">${obj[i - 1].one}</h3>
    <p class="text-[#6E757C] hover:text-black ml-2">${obj[i - 1].two}</p>
  </div>
</div>`;
}

boxes.innerHTML = temp;
