import { styled } from "styled-components";

export default function MainTemplate({ textHeader, children, dataTest }) {
    return (
        <StyledMain>
            <header>
                <h1 data-test={dataTest}>{textHeader}</h1>
            </header>
            {children}
        </StyledMain>
    );
}

MainTemplate.defaultProps = {
    dataTest: ""
};

const StyledMain = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
        color: white;
        font-size: 26px;
        font-weight: 700;
        line-height: 31px;
        text-align: left;

        width: 326px;
        height: 78px;

        display: flex;
        align-items: center;
    }

    & > div {
        width: 326px;
        display: flex;
        justify-content: space-between;
    }

    .container-buttons {
        margin-top: 13px;
    }
`;