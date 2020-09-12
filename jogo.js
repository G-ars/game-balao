function iniciajogo(){

  var url= window.location.search;

  var nivel_jogo = url.replace("?", "")
  
  alert (nivel_jogo);

  var tempo_segundos = 0;

  if(nivel_jogo == 1){
  	tempo_segundos = 120;
  }//fácil ->  120 segundos 

   if(nivel_jogo == 2){
   	tempo_segundos = 60;
  }// normla -> 60 segundos
  
   if(nivel_jogo == 3){
   	tempo_segundos = 30;
  }// dificil -> 30 segundos

	//inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quantidade de balões
	var qtd_baloes = 10;			
	cria_baloes(qtd_baloes);

 }
 funtion cria_baloes(qtd_baloes){

 	for(var i =1 ; i<= qtd_baloes; i++){

 		var balao = document.creatElement ("img");
 		balao.src = 'imagens/balao_azul_pequeno.png'

 		document.getElementById('cenario').appendChild(balao);


 	}
 }