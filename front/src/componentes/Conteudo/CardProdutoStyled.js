import styled from "styled-components";

export const CardProdutosContainer = styled.div`
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
    }

    .card {
        width: calc(33.33% - 20px);
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        text-align: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    .card h3,
    .card p {
        flex-grow: 1;
    }

    a{
        color: black;
    }

    select{
        font-size: 13px;
    }

`