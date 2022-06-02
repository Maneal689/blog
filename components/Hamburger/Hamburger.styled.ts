import styled from "styled-components";

export const Container = styled.div`
  --burger-width: 20px;
  --burger-space: 5px;

  display: inline-block;
  z-index: 1000;

  .hamburger {
    height: 2px;
    width: var(--burger-width);
    margin: calc(var(--burger-space) + 2px) 0;
    background-color: var(--white);
    position: relative;
    transition: all ease 0.3s;
    border-radius: 3px;
    z-index: 1000;

    &::before, &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: var(--burger-width);
      background-color: var(--white);
      transition: all ease 0.3s;
      border-radius: 3px;
    }

    &::before {
      top: calc(-1 * var(--burger-space));
    }

    &::after {
      top: var(--burger-space);
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
  display: none !important;
`
