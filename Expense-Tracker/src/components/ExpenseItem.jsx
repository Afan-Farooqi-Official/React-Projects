import styles from 'styled-components'

const ExpenseItem = ({title, amount, date}) => {
    return (
        <Container>
            <Item>Groceries — $50 — 2024-01-10</Item>
            <Item>Electricity Bill — $120 — 2024-01-05</Item>
            <Item>Movie Night — $30 — 2024-01-03</Item>
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

export default ExpenseItem;