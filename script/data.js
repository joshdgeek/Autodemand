fetch("./script/operators.json")
    .then((res) => res.json())
    .then((operators) => {
        const container = document.getElementById("operator-container");

        operators.forEach((operator) => {
            container.innerHTML += `
        <div class="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">${operator.name}</h3>

            <span class="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full">
              ${operator.availability}
            </span>
          </div>

          <p class="text-gray-600 mb-2">
            📍 ${operator.coverage.join(", ")}
          </p>

          <p class="text-gray-600 mb-6">
            🚚 ${operator.service}
          </p>

          <div class="flex gap-3">
            <a
              href="tel:${operator.phone}"
              class="flex-1 text-center bg-black text-white py-3 rounded-lg">
              Call
            </a>

            <a
              href="https://wa.me/${operator.whatsapp}"
              target="_blank"
              class="flex-1 text-center border py-3 rounded-lg">
              WhatsApp
            </a>
          </div>

        </div>
      `;
        });
    });