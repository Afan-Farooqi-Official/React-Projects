import ExpenseForm from "../components/ExpenseForm";
import Filters from "../utils/Filters";
import ExpenseItem from "../components/ExpenseItem";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
    return (
        <div>
            <ExpenseForm />
            <Filters />
            <ExpenseItem />
            <ExpenseList />
        </div>
    )
}

export default Dashboard;