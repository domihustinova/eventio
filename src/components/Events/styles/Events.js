import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

import { EVENTS_VIEW } from '../../../utils/consts'

export const Container = styled.div`
  width: 100%;
  max-width: 1215px;
  margin-top: 100px;
`

export const Menu = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Filter = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 32px;
  font-family: Hind;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${({ active }) => (active ? '323c46' : '#a9aeb4')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #323c46;
  }
`

export const FilterGroup = styled.div`
  margin-bottom: 40px;
`

export const Toggle = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  padding: 0;
  cursor: pointer;

  .toggle {
    fill: ${({ active }) => (active ? '#323C46' : '#d9dce1')};
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    .toggle {
      fill: #323c46;
    }
  }
`

export const ToggleGroup = styled.div``

export const Frame = styled.div`
  display: flex;
  flex-direction: ${({ view }) => (view === EVENTS_VIEW.GRID ? 'row' : 'column')};
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`

export const Add = styled(Link)`
  display: inline-block;
  padding: 18px 15px;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background-color: #323c46;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #565d5a;
  }
`
