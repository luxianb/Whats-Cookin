import styled from "styled-components";

const ChipContainer = styled.div`
  color: ${prop => prop.color || 'black'};
  background-color: ${prop => prop.backgroundColor || `rgba(0,0,0,.2)`};
  padding: 3px 6px;
  border-radius: 6px;
`
const Text = styled.p`
  margin: 0;
  font-size: .8rem;
`

const EstTimeChip = (props) => {
  const {hour, minutes} = props.time;

  return (
    <ChipContainer color={'#1F93FF'} backgroundColor={'rgba(31, 147, 255, .2)'}>
      <Text>
        <i class="fa-regular fa-clock" style={{marginRight: 6}}/>
        {hour ? `${hour}hr ` :  ''}
        {minutes ? `${minutes}min` :  ''}
      </Text>
    </ChipContainer>
)}

const ShoppingListChip = (props) => {
  const {shoppingList} = props;
  const itemsGot = shoppingList.filter((item) => item.got === true).length

  return (
    <ChipContainer color={'#404040'} backgroundColor={'rgba(64, 64, 64, .2)'}>
      <Text>
        <i class="fa-solid fa-basket-shopping" style={{marginRight: 6}}/>
        {`${itemsGot} of ${shoppingList.length}`}
      </Text>
    </ChipContainer>
)}

const Chip = {
  EstTime: EstTimeChip,
  ShoppingList: ShoppingListChip
};

export default Chip;