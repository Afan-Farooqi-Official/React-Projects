import styles from 'styled-components'

const ExpenseList = ({category, price}) => {
    return (
        <Container>
            <Title>BreakDown</Title>
            <Label>Total this {category}: ${price}</Label>
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
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const Title = styles.h3`
    text-align: left;
    font-size: 1.3rem;
    font-weight: bold;
    width: 50vw;
    padding-left: 10px;
    padding-bottom: 10px;
    color: #333;
    border-bottom: 0.5px solid #ccc;
`

const Label = styles.p`
    font-size: 1rem;
    color: #555;
    margin-top: 10px;
    text-align: left;
    width: 50vw;
`

export default ExpenseList;