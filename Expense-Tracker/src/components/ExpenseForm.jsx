import styles from 'styled-components';

const ExpenseForm = () => {
    return (
        <Container>
            <ContainerOne>
                <Title>Expense Tracker</Title>
                <TitleTwo>Total: $0</TitleTwo>
            </ContainerOne>
            <Form>
                <TitleThree>Add New Expense</TitleThree>
                <Row>
                    <Input type="text" placeholder="Title" />
                    <Input type="number" placeholder="Amount" />
                    <Input type="date" />
                    <Button>Add Expense</Button>
                </Row>
            </Form>
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

const ContainerOne = styles.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 50vw;
    padding: 0 1rem;
    border-bottom: 0.5px solid #ccc;

    // background-color: #ACE8D6;
`

const Title = styles.h1`
    font-size: 2rem;
    color: #ACBAE8;
`

const TitleTwo = styles.h2`
    font-size: 1.3rem;
    font-weight: normal;
    color: #333;
`

const Form = styles.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    width: 50vw;
    padding: 1rem 1rem;

    // background-color: #ACE8D6;
`

const TitleThree = styles.h3`
    text-align: left;
    font-size: 1.3rem;
    font-weight: bold;
    width: 100%;
    margin: 0;
    padding-bottom: 10px;
    color: #333;
`

const Row = styles.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
`

const Input = styles.input`
    width: 25%;
    padding: 10px 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    outline: none;
    transition: border-color 0.3s ease;
    border-radius: 5px;

    input:focus {
        border-color: #4A90E2;
    }
`

const Button = styles.button`
    padding: 10px 15px;
    font-size: 1rem;
    background-color: #4A90E2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:focus {
        outline: 2px solid #1C5FAF;
    }

    &:active {
        transform: scale(0.97);
    }

    &:hover {
        background-color: #357ABD;
    }
`

export default ExpenseForm;