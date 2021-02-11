import styled from 'styled-components'

export const FavouriteButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: none;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  padding: 10px;
    &:focus {
      outline: transparent;
    }
    &:hover {
      box-shadow: 0px 2px 10px 5px #949899;
    }
`