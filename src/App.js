import './App.scss';
import employees from './data/employees.json';

const SimpleList = ({ items, itemIdCode, ItemComponent }) => {
	return (
		<div className="simpleList">
			{items.map((item, i) => (
				<ItemComponent key={i} {...{ [itemIdCode]: item }} />
			))}
		</div>
	)
}

const NumberedList = ({ items, itemIdCode, ItemComponent }) => {
	return (
		<div className="numberedList">
			{items.map((item, i) => (
				<>
					<div className="itemArea">
						<h3>{i + 1}.</h3>
						<ItemComponent key={i} {...{ [itemIdCode]: item }} />
					</div>
				</>
			))}
		</div>
	)
}

const Employee = ({ employee }) => {
	const { firstName, lastName } = employee;
	return (
		<div className="employee">
			<div>{firstName} {lastName}</div>
		</div>
	)
}

function App() {
	return (
		<div className="App">
			<section className="container">
				<SimpleList items={employees} itemIdCode="employee" ItemComponent={Employee} />
				<NumberedList items={employees} itemIdCode="employee" ItemComponent={Employee} />
			</section>
		</div>
	);
}

export default App;