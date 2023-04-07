const num = parseInt(prompt("Введите температуру в градусах Цельсия"));
alert(`Цельсий: ${num}, Фаренгейт: ${((9 / 5) * num + 32).toFixed(2)}`);
