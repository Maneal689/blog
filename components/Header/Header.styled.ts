import styled from "styled-components";

export const Container = styled.header`
  background: rebeccapurple;

  .header {
    margin: 0 auto;
    padding: 0.45rem 1.0875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      margin: 0 1em 0 0;
    }

    .nav {
      transition: all ease 0.3s;
      overflow: hidden;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: 0;
      background-color: var(--primary);
      z-index: 999;

      ul {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-top: 4em;
        list-style-type: none;

        li {
          width: 100%;
          padding: 0.5em 10%;
          text-align: center;
          display: flex;
          align-items: center;

          a {
            color: var(--gray);
            text-decoration: none;
            transition: all ease 0.3s;

            &.active {
              color: var(--white);
            }
          }

          &:hover a {
            color: var(--white);
          }
        }

        .input {
          background-color: var(--white);
          border: none;
          position: relative;
          border-radius: 3em;

          &:focus {
            border: none;
          }

          input {
            transition: all ease 0.3s;
            border-radius: 3em;
            padding: 10px 1.5em;
            outline: none;
            border: none;
            width: 100%;

            &:focus {
              box-shadow: 0 0 8px cyan;
            }
          }

          button {
            position: absolute;
            border: none;
            right: 0.5em;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }

      &.active {
        height: 100vh;
      }
    }
  }

  @media (min-width: 992px) {
    .header {
      justify-content: flex-start;

      .nav {
        font-size: 0.8em;
        position: relative;
        overflow: visible;
        height: 100%;

        ul {
          margin: 0;
          flex-direction: row;

          li {
            width: auto;
            margin: 0;
            padding: 0;

            &:not(:last-child) {
              margin-right: 1em;
            }
          }
        }
      }
    }
  }
`
