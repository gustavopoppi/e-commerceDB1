import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 120px;
    background-color: #791E94;
    color: #fff;
    display: flex;    

    .container{           
        padding: 5px 20px;
        display: flex;
        align-items: center;
    }

        .logo{
            flex: 1;
            font-size: 25px;
        }

        nav{

            ul{
                display:flex;         
            }
                li{
                    list-style: none;
                    margin-left: 20px;
                    font-size: 25px;
                     
                    a{
                        color: #fff;

                        &:hover{
                            color: #F5BB00;
                        }
                    }
                    
                }
        }
`;
