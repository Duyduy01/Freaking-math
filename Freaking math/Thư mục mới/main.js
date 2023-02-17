let score = 0
let result = 0
let display_screen = 0
let time = 5
let finish = false

// hien thi ket qua
function result_disp(res, ans, op) {
	if (ans == 0) return res
	else {
		if (op == '+') return res + 2
		else return res - 2
	}
}
// lay phep tinh ngau nhien
function getOP() {
	let op = ['-', '+']
	return op[Math.floor(Math.random() * op.length)]
}
// khoi tao gia tri
function init() {
	let first = Math.floor((Math.random() * 10) + 1)
	let second = Math.floor((Math.random() * 10) + 1)
	let op = getOP()
	if (op == '+') {
		result = first + second
	}
	else {
		result = first - second
	}
	let ans = Math.floor((Math.random() * 2))
	display_screen = result_disp(result, ans, op)
	document.getElementById('disp').innerHTML = (first + ' ' + op + ' ' + second + ' = ' + display_screen)
}
// bat dau lai game
function reset() {
	location.reload()
}
// kiem tra ket qua
function choose_res(res) {
	let check = false
	if (res == 'false') {
		if (result != display_screen) check = true
		else check = false
	}
	else {
		if (result == display_screen) check = true
		else check = false
	}
	if (check == true) {
		score += 1
		time = 5
		document.getElementById('score').innerHTML = 'Score: ' + score
		init()
	}
	else {
		document.getElementById('true').style.display = 'none'
		document.getElementById('false').style.display = 'none'
		document.getElementById('result_disp').innerHTML = 'Thua!'
		alert('Thua!')
		finish = true
	}
}
// bat dau game
function start() {
	time = 5
	document.getElementById('score').innerHTML = 'Score: ' + score
	init()
	var run = setInterval(function () {
		time -= 1
		if (finish == false)
			document.getElementById('time').innerHTML = "Time: " + time
		if (time <= 0 && finish != true) {
			clearInterval(run)
			document.getElementById('true').style.display = 'none'
			document.getElementById('false').style.display = 'none'
			document.getElementById('result_disp').innerHTML = 'Thua!'
			alert('Thua!')
			finish = true
		}
	}, 1000)
}
//chay game
start()