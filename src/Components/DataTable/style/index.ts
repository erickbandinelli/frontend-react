import styled from 'styled-components';

const DataTableStyle = styled.section`
    display: block;
    margin: 48px auto;
    padding: 20px 21px;
    width: 96%;
    background-color: #fff;

    h1 {
        color: #333;
        font-family: 'Coustard',serif;
        font-size: 25px;
        padding: 8px 0;
    }

    .table-responsive{
        overflow-x: initial;

        @media screen and (max-width: 700px){
            overflow-x: scroll;
        }

        .table {
            .thead-dark {
                border: 1px solid #f0efef;

                th {
                    color: #333;
                    border-color: #f0efef;
                    background-color: #f0efef;
                    font-family: 'Coustard', serif;
                    font-size: 15px;
                }
            }

            tbody {
                border: 1px solid #f0efef;

                tr {
                    color: #333;
                    font-family: 'Source Serif Pro', serif;
                    font-size: 12px;
                    letter-spacing: 1px;
                    opacity: 1;

                    td {
                        &:nth-child(1) {
                            width: 300px;
                        }
                    }
                }
            }
        }
    }
`;

export default DataTableStyle;
