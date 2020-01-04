import React, {useState} from 'react'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex:1;
  background-color:#E4DBFA;
`
const Header = styled.View`
  width:100%;
  height:60px;
  align-items:center;
  justify-content:center;
`
const Title = styled.Text`
  font-size:28px;
  font-weight:bold;
  color:#625E6B;
`
const Bodie = styled.View`
  align-items:center;
  margin:20px;
`
const InputArea = styled.TextInput`
  width:350px;
  height:50px;
  border:1px solid #635470;
  padding:10px;
  border-radius:25px;
  background-color:#fff;
`
const Botao = styled.TouchableOpacity`
  margin:20px;
  width:200px;
  height:50px;
  justify-content:center;
  align-items:center;
  border:1px solid #635470;
  border-radius:25px;
`
const ButtonTitle = styled.Text`
  font-size:16px;
  color:#635470;
`
const TextTop = styled.Text`
  width:350px;
  height:70px;
  text-align:center;
  margin-bottom:-90px;
  color:#fff;
  font-size:22px;
  z-index:1;
`
const AreaImagem = styled.View`
  width:400px;
  height:500px;
  justify-content:center;
  align-items:center;
`
const TextBottom = styled.Text`
  width:350px;
  height:70px;
  text-align:center;
  margin-top: -80px;
  color:#fff;
  font-size:22px;
  z-index:1;
`
const Imagem = styled.Image`
  width:350px;
  height:400px;
  margin:20px;
`
const App = () => {
  const [fraseUm, setFraseUm] = useState('')
  const [fraseDois, setFraseDois] = useState('')
  
  function escrever(t) {
    setFraseUm(t)
  }

  const criarFrase = () => {
    let novoTexto = fraseUm.toLowerCase()

    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i')
    novoTexto = novoTexto.replace(/(á|à|ã|â)/g, 'i')
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i')
    novoTexto = novoTexto.replace(/(í|ì|î)/g, 'i')
    novoTexto = novoTexto.replace(/(ó|ò|ô)/g, 'i')
    novoTexto = novoTexto.replace(/(ú|ù|û)/g, 'i')

    setFraseDois(novoTexto)
  }

  return(
    <Container>
        <Header>
          <Title>Criador de MIMIMI</Title>  
        </Header>
        <Bodie>
          <InputArea placeholder={'Digite sua frase'} onChangeText={escrever}/>
          <AreaImagem>
            <TextTop>{fraseUm.toUpperCase()}</TextTop>
            <Imagem source={require('./src/img/mimimi.jpg')} />
            <TextBottom>{fraseDois.toUpperCase()}</TextBottom>
          </AreaImagem>
          <Botao onPress={criarFrase}>
            <ButtonTitle>Criar Frase</ButtonTitle>
          </Botao>
        </Bodie>
    </Container>
  )
}

export default App
