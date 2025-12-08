import styles from 'styled-components'
import React, {useContext} from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const ExpenseItem = () => {

    const {expenses} = useContext(ExpenseContext);

    return (
        <Container>
            <TitleThree>Expenses List</TitleThree>
            {
                expenses.length === 0 ? (
                    <p>No Expenses Yet</p>
                ) : (
                    expenses.map(exp => (
                        <Item key={exp.id}>
                            {exp.title} - ${exp.amount} - {exp.date}
                        </Item>
                    ))
                )
            }
        </Container>
    )
}

const Container = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // background-color: #E8B6AC;
    width: 52vw;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Item = styles.div`
    
    width: 50vw;
    padding: 1rem 1rem;
    border-bottom: 0.5px solid #ccc;
    font-size: 1.2rem;
`

const TitleThree = styles.h3`
    text-align: left;
    font-size: 1.3rem;
    font-weight: bold;
    width: 50vw;
    margin: 0;
    padding: 10px 0;
    color: #333;
`

export default ExpenseItem;