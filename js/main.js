const pole = document.getElementById('pole')
let row = null
let column = null
function createTable(rows, columns) {
	for (i = 0; i < rows; i++) {
		row = document.createElement('div')
		row.classList.add('row')
		for (j = 0; j < columns; j++) {
			column = document.createElement('div')
			column.classList.add('column')
			row.appendChild(column)
		}
		pole.appendChild(row)
	}
}
createTable(3, 3)

let counter = 0
let columns = document.querySelectorAll('.column')
let columnsArray = []
for (i = 0; i < columns.length; i++) {
	columnsArray.push(columns[i])
}
console.log(columnsArray);

columns.forEach(function (col) {
	col.addEventListener('click', function (e) {
		if (counter % 2 === 0) {
			col.innerHTML = 'O'
		} else {
			col.innerHTML = 'X'
		}
		function isVictory(cells) {
			let combs = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];
		
			for (let comb of combs) {
				if (
					cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
					cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
					cells[comb[0]].innerHTML != ''
				) {
					return alert('Вы победили');
				}
			}
		
			return false;
		}
		counter++
	})
})

const btn = document.getElementById('btn')
btn.onclick = function () {
	columnsArray.map(function (elem) {
		elem.innerHTML = ''
	})
}









