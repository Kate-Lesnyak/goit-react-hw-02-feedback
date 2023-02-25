import styled from 'styled-components';

export const StyledFeedbackOptionItem = styled.li`
padding: 4px;
`;

export const StyledButton = styled.button`
font-size: 14px;
padding: 10px;
border: none;
border-radius: 8px;
text-transform: capitalize;
cursor: pointer;
background-color: #BFDC71;

transition-property: background-color, color, transform;
transform: scale(1);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover, :focus {
background-color: #236B0B;
color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
transform: scale(1.1);
}
`;
