import React from 'react';
import styled, { css } from 'styled-components';

const Btn = styled.button`
    appearance: none;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-weight: ${({ theme }) => theme.typography.bold};
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    border: 0;
    border-radius: 40px;
    outline: none;
    cursor: pointer;
    transition: background-color 0.4s, color 0.4s, opacity 0.4s;
    background: ${props =>
        props.primary
            ? props.theme.colors.primary
            : props.theme.colors.default};
    ${({ margin }) =>
        margin &&
        css`
            margin: ${margin};
        `}

    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.gray};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        color: rgba(0, 0, 0, 0.6);
        background: ${props =>
            props.primary
                ? props.theme.colors.primary
                : props.theme.colors.default};
    }
`;

const ShadowButton = styled(Btn)`
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
`;

const Button = ({ primary, margin, children, handleClick, isDisabled }) => {
    return (
        <ShadowButton
            primary={primary}
            margin={margin}
            onClick={handleClick}
            disabled={isDisabled}
        >
            {children}
        </ShadowButton>
    );
};
export default Button;
