import styles from 'styled-components';

const Filters = () => {
    return (
        <Container>
            <Dropdown>
                <Option>Filter by Date</Option>
                <Option value='today'>Today</Option>
                <Option value='week'>Last 7 Days</Option>
                <Option value='month'>This Month</Option>
                <Option value='year'>This Year</Option>
            </Dropdown>
            <Dropdown>
                <Option>Filter by Category</Option>
                <Option value='food'>Food</Option>
                <Option value='transport'>Transport</Option>
                <Option value='entertainment'>Entertainment</Option>
                <Option value='utilities'>Utilities</Option>
            </Dropdown>
            <Dropdown>
                <Option>Sort by Amount</Option>
                <Option value='asc'>Low to High</Option>
                <Option value='desc'>High to Low</Option>
            </Dropdown>
        </Container>
    )
}

const Container = styles.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    // background-color: #E8B6AC;
    width: 52vw;
    margin: auto;
    margin-top: 20px;
`

const Dropdown = styles.select`
    margin: 10px;
    padding: 8px;
    font-size: 16px;
    background-color: #fff;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:focus {
        outline: none;
        box-shadow: 0 0 5px rgba(172, 186, 232, 1);
    }

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`

const Option = styles.option`
    font-size: 16px;
    padding: 8px;
`

export default Filters;