import styled from 'styled-components'

export const FavouriteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #EAEAEA;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  padding: 0;
    &:focus {
      outline: transparent;
      background: green;
    }
`