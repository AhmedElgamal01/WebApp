import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-flow: column;
  padding: 5em 1em 3em 1em;
  text-align: center;
  align-items: center;
  color: #333;
  width: 100%;
  background: ${({ variant }) => (variant === 'dark' ? 'rgb(235, 236, 240)' : 'white')};
  ${({ rounded }) => (rounded ? // eslint-disable-next-line
      'border-radius: 50% 50%;\nwidth: 200%;\npadding: 3em 2em;' : '')
}`;

const SectionTitle = styled.h1`
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 2em;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 1em;
    font-size: 24px;
  }
`;

const SectionTitleBold = styled.span`
  color: ${props => props.theme.colors.brandBlue};
  font-weight: bold;
`;

const Step = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 18px;
  padding: 8px;
  background: rgb(243, 243, 247);
  width: 600px;
  max-width: 100%;
  margin-top: 1rem;
  border-radius: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const StepNumber = styled.div`
  width: 24px;
  height: 24px;
  background: ${props => props.theme.colors.brandBlue};
  color: white;
  border-radius: 4px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50px;
    height: 50px;
    min-width: 50px;
    font-size: 36px;
  }
`;

const StepLabel = styled.p`
  font-weight: bold;
  color: #333;
  margin: 0 .7rem;
  text-align: left;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: auto .7rem;
    font-size: 16px;
  }
`;

const GetStarted = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 3em 0;
  width: 450px;
  max-width: 100%;
`;

const ButtonContainer = styled.div`
  margin-left: -134px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  margin: 2em 3em;
  flex-flow: row wrap;
  width: 960px;
  max-width: 90vw;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-flow: column-reverse;
  }
`;

const DescriptionLeftColumn = styled.div`
  display: flex;
  flex-flow: column;
  width: 70%;
  justify-content: center;
  text-align: left;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const DescriptionImageColumn = styled.div`
  width: 30%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const Description = styled.p`
  color: #333;
  font-size: 18px;
`;

const Image = styled.img`
  width: 100%:
`;

const Bold = styled.span`
  font-weight: bold;
`;

const NetworkContainer = styled.div`
  width: 960px;
  max-width: 90vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 2em;
  padding-bottom: 3em;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-flow: column nowrap;
  }
`;

const NetworkImage = styled.img`
  width: 45%;
  margin-top: 2em;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 70vw;
  }
`;

const SignUpContainer = styled.div`
  width: 350px;
  padding-bottom: 2em;
  max-width: 90vw;
`;

export {
  SectionTitle,
  SectionTitleBold,
  Step,
  StepNumber,
  StepLabel,
  GetStarted,
  ButtonContainer,
  DescriptionContainer,
  DescriptionLeftColumn,
  DescriptionImageColumn,
  Description,
  Image,
  Bold,
  NetworkContainer,
  NetworkImage,
  SignUpContainer,
};

export default Section;
