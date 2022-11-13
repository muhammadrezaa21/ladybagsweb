import React from 'react'
import styled from 'styled-components'
import CategoryItem from '../CategoryItem';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.div`
    display: flex;
    flex: 1
    width: 100%;
    height: 95vh;
    padding: 20px;
    position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
  white-space: nowrap;
  transition: all 1.5s ease;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    display: flex;
    border-radius: 50%;
    background-color: #fff7f7;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "20px"};
    right: ${props => props.direction === "right" && "20px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Categories = ({data}) => {
  const dataCategory = data.data;
  const handleClick = (direction) => {
    const slider = document.getElementById('row');
    if(direction === 'left'){
      slider.scrollLeft = slider.scrollLeft - 800;
    }
    else {
      slider.scrollLeft = slider.scrollLeft + 800;
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>
      <Wrapper id="row">
        {dataCategory.map((item) => (
            <CategoryItem item={item} key={item._id} />
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Categories