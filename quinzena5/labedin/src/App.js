import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.6435-9/118284837_10219823044899796_8228161252046093803_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH_nYb9w_M7lzzGd2rNtuF1o-s6xUMSXW-j6zrFQxJdb6diYjhcC5PhKK7AbHxaLPg&_nc_ohc=sU1VJu9k6HoAX-CULEy&_nc_ht=scontent.fcgh10-1.fna&oh=18b7a467d0d97220401c85cef024879d&oe=616235C3" 
          nome="Matheus" 
          descricao="Oi, eu sou o Matheus."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.18169-9/16683983_1203288796457847_71144745010586091_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=b9115d&_nc_eui2=AeF1ldsrJ3-snwtO65nX2diImqXty6PjLY6ape3Lo-Mtjl49o-FFqdFQaztMiRf6m60&_nc_ohc=7cNfix1w8kUAX8cecy4&_nc_ht=scontent.fcgh10-1.fna&oh=1cecdb3c7ff7bdbe625b8e98a0cc03de&oe=616128EF" 
          nome="Matheus Dias Pereira Esporte Clube" 
          descricao="Jogador, técnico, presidente, CEO!" 
        />
        
        <CardGrande 
          imagem="https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.18169-9/14089017_934560116673464_1748167494765636092_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=b9115d&_nc_eui2=AeEDkrtW2TO6kE65AQn0QZXOSqHcP0svQTBKodw_Sy9BMDVMtGziCxs9rjPpURPMFSA&_nc_ohc=DOJEe18gc3cAX_YWsL3&_nc_ht=scontent.fcgh10-1.fna&oh=a3b506d0ee8f96b8b045dce2254da340&oe=615F03C8" 
          nome="Guaianazes Jaguares" 
          descricao="Jogador, técnico, presidente, CEO!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Endereco e e-mail</h2>
        <CardPequeno 
          endereco="RUA XYZ 135" 
          email="falsoemail@falsoemail.com.br" 
        />
        
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
