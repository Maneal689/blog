import styled from "styled-components";

export const Container = styled.div`
  --burger-width: 20px;
  --burger-space: 5px;

  display: inline-block;
  z-index: 1000;

  .hamburger {
    height: 2px;
    width: var(--burger-width);
    margin: (var(--burger-space) + 2px) 0;
    background-color: var(--white);
    position: relative;
    transition: all ease 0.3s;
    border-radius: 3px;
    z-index: 1000;

    &::before {
      content: "";
      position: absolute;
      top: -var(--burger-space);
      height: 2px;
      width: var(--burger-width);
      background-color: var(--white);
      transition: all ease 0.3s;
      border-radius: 3px;
    }

    &::after {
      content: "";
      position: absolute;
      top: var(--burger-space);
      height: 2px;
      width: var(--burger-width);
      background-color: var(--white);
      transition: all ease 0.3s;
      border-radius: 3px;
    }

    &.active {
      background-color: transparent;

      &::before {
        transform: rotate(45deg) translateY(7px);
      }

      &::after {
        transform: rotate(-45deg) translateY(-7px);
      }
    }
  }
}

@media (min-width: 992px) {
  .hamburger-container {
    display: none !important;
  }
`
