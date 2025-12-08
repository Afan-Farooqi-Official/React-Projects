import ExpenseForm from "../components/ExpenseForm";
import Filters from "../utils/Filters";
import ExpenseItem from "../components/ExpenseItem";
import { ExpenseProvider } from "../context/ExpenseContext";

const Dashboard = () => {
    return (
        <div>
            <ExpenseProvider>
                <ExpenseForm />
                <Filters />
                <ExpenseItem />
            </ExpenseProvider>
        </div>
    )
}

export default Dashboard;