var radio_one = window.document.getElementById('radio1');
var radio_two = window.document.getElementById('radio2');

var number_sexo = 0;

function receber_param(sexo) {
    var sexo;
    number_sexo = sexo;
}

function verificacao(){
    var campo = window.document.getElementById('numbertxt2');
    var mudar_palavra = window.document.getElementById('mudar_palavra');
    var ano = 0
    var contador_ano = Number.parseInt(campo.value);

    if (campo === void(0)) {
        alert('Digite o ano que voçê nasceu!!!')
    }

    contador_ano += 1;
    
    do{
        contador_ano += 1

        ano += 1

    }while(contador_ano <= 2023);

    if (ano >= 0 && ano <= 5 && number_sexo == 1) {
        mudar_palavra.innerHTML = 'Detectamos um Bebê masculino com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://images.tcdn.com.br/img/img_prod/744201/conjunto_bebe_menino_verao_camisa_cambraia_e_bermuda_moletinho_tropical_2_pecas_tam_m_a_gg_paraiso_4821_2_4a3e66db24717f782bda153165d09b16.jpeg" width = "250px">'
        
    }else if (ano >= 0 && ano <= 5 && number_sexo == 2) {
        mudar_palavra.innerHTML = 'Detectamos um Bebê feminino com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://i.pinimg.com/236x/91/1f/24/911f24dc3935d99ca98e690154867113--beautiful-children-beautiful-babies.jpg" width = "250px">'
    
    }
    
    if(ano > 5 && ano < 12 && number_sexo == 1){
        mudar_palavra.innerHTML = 'Detectamos um criança masculino com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://www.macetesdemae.com/wp-content/uploads/2022/03/fala-da-crianca-900x600.png" width = "250px">'
    
    }else if(ano > 5 && ano < 12 && number_sexo == 2){
        mudar_palavra.innerHTML = 'Detectamos um criança feminino com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://www.macetesdemae.com/wp-content/uploads/2022/03/fala-da-crianca-900x600.png" width = "250px">'
    
    }
    
    if (ano > 12 && ano < 21 && number_sexo == 1){
        mudar_palavra.innerHTML = 'Detectamos um adolescnete masculino com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://i.pinimg.com/736x/da/b8/d1/dab8d1f985b5f28138459cd43e687fcf.jpg" width = "250px">'

    }else if (ano > 12 && ano < 21 && number_sexo == 2){
        mudar_palavra.innerHTML = 'Detectamos um adolescente feminino com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://i.pinimg.com/736x/0e/57/65/0e5765db42677f9a0ae97a79502187ac.jpg" width = "250px">'
    }
    
    if(ano >= 21 && number_sexo == 1){
        mudar_palavra.innerHTML = 'Detectamos um Homem adulto com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://img.freepik.com/fotos-premium/jovem-adulto-bonito-sorrindo-parecendo-feliz-positivo-confiante-e-bem-sucedido-com-os-dois-polegares-para-cima_1194-215353.jpg" width = "250px">'
    }else if(ano >= 21 && number_sexo == 2){
        mudar_palavra.innerHTML = 'Detectamos um Mulher adulta feminino com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://psicologafabiola.com.br/wp-content/uploads/2016/01/psicologo-para-adulto-3-1200x900.jpg" width = "250px">'
    }

    if(ano >= 60 && ano <= 130 && number_sexo == 1){
        mudar_palavra.innerHTML = 'Detectamos um Homem idoso com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCkdcfcztjmJJNKfPFpWtkboYwhKf902pQQ&usqp=CAU" width = "250px">'
    }else if(ano >= 60 && ano <= 130 && number_sexo == 2){
        mudar_palavra.innerHTML = 'Detectamos um Mulher idosa feminino com ' + ano + 'anos';
        document.getElementById('fotos').innerHTML = '<img src = "https://gwebs3.redacms.com/images/Coracy-Arantes-4.2e16d0ba.fill-1120x700.png" width = "250px">'
    }

    if (ano >= 130) {
        mudar_palavra.innerHTML = 'Digite o ano correto em que voçê nasceu!!!';
        document.getElementById('fotos').innerHTML = '<img src = "" width = "250px">'
    }
}
