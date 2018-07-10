function post(){                                    //cod.para 'twittar'
	var text2 = document.getElementById('text').value;
	var newPost = document.getElementById('newPost');
	var newP = document.createElement('div');
	var date = new Date()
	newP.innerHTML = text2 + '<br/>' + date.getHours() + ':' + date.getMinutes();
	newP.setAttribute('class', 'boxPost' );
	newPost.appendChild(newP);
	document.getElementById('text').value='';
	document.getElementById('text').focus(text);
	button.removeEventListener('click', post);

};

function counter_textarea() {   //cod.contador
  var deal = 140;
  var total = text.value.length;
  var residual = deal - total;
  contactor.textContent = residual;

  if (residual >= 120 && total < residual) {
    contactor.style.color = 'blue';
  }  if (residual >= 130) {
    contactor.style.color = 'green';
  } if (residual >= 131  ) {
    contactor.style.color = 'orange';
  } if (residual <=0 || residual === 0) {
    contactor.style.color = 'red';
  }
	 if (total >=0 || total <= 140){
   var button = document.getElementById('button');
	 button.addEventListener('click', post);

	 }
}

onKeyPressTextMessage = function(){           //cod.para alterar tamanho da textarea//
	var textArea = event.currentTarget;
  textArea.style.height = 'auto';
  textArea.style.height = textArea.scrollHeight + 'px';
};
