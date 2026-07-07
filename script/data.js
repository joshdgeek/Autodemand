let operators = [];

fetch("./script/operators.json")
    .then(res => res.json())
    .then(data => {
        operators = data;
        renderOperators(operators);
    });

function renderOperators(list) {

    const container = document.getElementById("operator-container");

    container.innerHTML = "";

    list.forEach(operator => {

        container.innerHTML += `
            <div class="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">

                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">
                        ${operator.name}
                    </h3>

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

                <div class="flex flex-col sm:flex-row gap-3">

                    <a href="tel:${operator.phone}"
                        class="flex-1 text-center bg-black text-white py-3 rounded-lg">
                        Call
                    </a>

                    <a href="https://wa.me/${operator.whatsapp}"
                        target="_blank"
                        class="flex-1 text-center border py-3 rounded-lg">
                        WhatsApp
                    </a>

                </div>

            </div>
        `;
    });
}

const select = document.getElementById("location");

select.addEventListener("change", () => {

    const value = select.value;

    if (value === "all") {
        renderOperators(operators);
        return;
    }

    const filtered = operators.filter(operator => {
        for (let i = 0; i < operator.coverage.length; i++) {
            if (operator.coverage[i].toLowerCase() === value.toLowerCase()) {
                return true;
            }
        }
        return operator.area.toLowerCase() === value.toLowerCase();
    });

    renderOperators(filtered);

});