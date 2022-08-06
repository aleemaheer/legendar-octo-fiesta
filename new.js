const fs = require("fs");
const path = "./data";

class Todo {
	constructor() {
		this.init();
	}

	init() {
		try {
			if (!fs.existsSync(path)) {
				fs.mkdirSync("data");
			}
			if (!fs.existsSync("./data/todos.json")) {
				fs.writeFile("./data/todos.json", JSON.stringify([]), (err) => {
					if (err) {
						console.log(err);
					}
					// File written successfully
				});
				fs.writeFile("./data/users.json", JSON.stringify([]), (err) => {
					if (err) {
						console.log(err);
					}
					// File written successfully
				});
			}
		} catch (err) {
			console.log(err);
		}
	}

	// Function to read todos
	async readTodos() {
		try {
			const data = await fs.readFileSync("./data/todos.json", "utf-8");
			return JSON.parse(data);
		} catch (err) {
			console.log(err);
		}
	}

	// Function to read users data
	async readUsers() {
		try {
			const data = fs.readFileSync("./data/users.json", "utf-8");
			return JSON.parse(data);
		} catch (err) {
			console.log(err);
		}
	}

	// Get Todo
	getTodo(userId, todoId) {
		return new Promise(async (resolve, reject) => {
			try {
				let targetTodo;
				const todosData = await this.readTodos();
				for (let i = 0; i < todosData.length; i++) {
					if (
						todosData[i].userId === userId &&
						parseInt(todosData[i].todoId) === parseInt(todoId)
					) {
						targetTodo = todosData[i];
					}
				}
				/// ------ Another method to search -------/////////
				//const targetTodo = data.find((item) => item.todoId === parseInt(this.id));
				resolve(JSON.stringify(targetTodo));
			} catch (err) {
				console.log(err);
				reject();
			}
		});
	}

	// Delete todo
	deleteTodo(userId, todoId) {
		return new Promise(async (resolve, reject) => {
			let targetTodo = -1;
			let filteredTodos = [];
			const todosData = await this.readTodos();
			for (let i = 0; i < todosData.length; i++) {
				if (
					todosData[i].userId === parseInt(userId) &&
					todosData[i].todoId === parseInt(todoId)
				) {
					targetTodo = i;
					break;
				}
			}
			if (targetTodo === -1) {
				resolve();
			} else {
				todosData.splice(targetTodo, 1);
				fs.writeFile("./data/todos.json", JSON.stringify(todosData), (err) => {
					if (err) {
						console.log(err);
						reject();
					}
					// file writed
					fs.readFile("./data/todos.json", "utf-8", (err, data) => {
						if (err) {
							console.log(err);
							reject();
						}
						data = JSON.parse(data);
						for (let i = 0; i < data.length; i++) {
							if (data[i].userId === parseInt(this.userId)) {
								filteredTodos.push(data[i]);
							}
						}
						resolve(JSON.stringify(filteredTodos));
					});
				});
			}
		});
	}

	// Update status of todo, i.e., completed or not
	updateTodoStatus(todoId, userId, status) {
		return new Promise(async (resolve, reject) => {
			const todosData = await this.readTodos();
			let targetTodo;
			for (let i = 0; i < todosData.length; i++) {
				if (
					todosData[i].todoId === parseInt(todoId) &&
					todosData[i].userId === parseInt(userId)
				) {
					targetTodo = i;
					break;
				}
			}
			if (targetTodo || targetTodo === 0) {
				todosData[targetTodo].isCompleted = status;
				fs.writeFile("./data/todos.json", JSON.stringify(todosData), (err) => {
					if (err) {
						console.log(err);
						reject();
					}
					// File written successfully
				});
				resolve(todosData[targetTodo]);
			} else {
				resolve();
			}
		});
	}

	// Update todo
	updateTodo(todoId, userId, title, description) {
		return new Promise(async (resolve, reject) => {
			let targetTodo;
			const todosData = await this.readTodos();
			for (let i = 0; i < todosData.length; i++) {
				if (
					todosData[i].userId === parseInt(userId) &&
					todosData[i].todoId === parseInt(todoId)
				) {
					targetTodo = i;
					break;
				}
			}
			console.log(targetTodo);
			// Update todo
			if (!targetTodo && targetTodo !== 0) {
				resolve();
			} else {
				todosData[targetTodo].title = title;
				todosData[targetTodo].description = description;
				fs.writeFile("./data/todos.json", JSON.stringify(todosData), (err) => {
					if (err) {
						console.log(err);
						reject();
					}
					// File written
				});
				resolve(JSON.stringify(todosData[targetTodo]));
			}
		});
	}

	// Create a new todo testing
	createTodo(userId, todoTitle, todoDescription) {
		return new Promise(async (resolve, reject) => {
			const todosData = await this.readTodos();
			const usersData = await this.readUsers();
			let existUser = false;
			for (let i = 0; i < usersData.length; i++) {
				if (usersData[i].userId === userId) {
					existUser = true;
					break;
				}
			}
			if (existUser) {
				let id = todosData.length;
				id++;
				let todo = {
					todoId: id,
					userId: userId,
					title: todoTitle,
					description: todoDescription,
					isCompleted: false,
				};
				todosData.push(todo);
				fs.writeFile("./data/todos.json", JSON.stringify(todosData), (err) => {
					if (err) {
						console.log(err);
						reject();
					}
				});
				resolve(todo);
			} else {
				resolve();
			}
		});
	}

	// Get Todos with user id
	getTodos(userId) {
		return new Promise(async (resolve) => {
			const todosData = await this.readTodos();
			const usersData = await this.readUsers();
			console.log(todosData);
			let filteredTodos = [];
			let i = 1;
			for (i = 0; i < todosData.length; i++) {
				if (todosData[i].userId === parseInt(userId)) {
					filteredTodos.push(todosData[i]);
				}
			}
			let existUser = false;
			console.log(usersData);
			for (let i = 0; i < usersData.length; i++) {
				if (usersData[i].userId === parseInt(userId)) {
					existUser = true;
					break;
				}
			}
			console.log(existUser);
			if (!existUser) {
				resolve(JSON.stringify("This user does not exist"));
			} else {
				if (!filteredTodos[0]) {
					resolve(JSON.stringify([]));
				} else {
					resolve(JSON.stringify(filteredTodos));
				}
			}
		});
	}
}

module.exports = {
	Todo,
};
