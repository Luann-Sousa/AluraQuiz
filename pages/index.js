import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget/index';
import  QuizBackground from '../src/components/QuizBackground/index'
import Footer from '../src/components/Footer/index';
import GitHubCorne from '../src/components/GitHubCorne/index';



const Title = styled.h1`background-image: url(${db.bg});
  font-size: 50px;
  color: ${({ theme }) => theme.colors.success};
`;

//criando componente BACKGROUND
//const BackgroundImage = styled.div`

  //flex:1;
  //background-size:auto;
  //background-repeat:no-repeat;
  //background-position:center;
  //background-attachment:fixed;
  //overflow: hidden;


//`;//

//criando componente QUIZCONTAINER
export const QuizContainer = styled.div`
width: 100%;
max-width:350;
padding-top:45;
margin:auto 10%;
@media screen and (max-whidth:500px){
  margin:auto;
  padding:15px;

}
`;


export default function Home(){
  return(
   <QuizBackground backgroundImage={db.bg}>
     <QuizContainer>
        <Widget>
        <Widget.Header>
              <h1>The o legend of zelda</h1>
            </Widget.Header>
          <Widget.Content>
            
            <p>loren ipusun dolor ament ....</p>
            </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>loren ipusun dolor ament ....</p>
          </Widget.Content>
        </Widget>
        <Footer/>
     </QuizContainer>
     <GitHubCorne projectUrl="https://github.com/Luann244"/>
   </QuizBackground>
  );
}