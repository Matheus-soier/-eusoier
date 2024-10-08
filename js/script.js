function sharePage() {
    const pageUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: 'eusoier',
        url: pageUrl
      }).then(() => {
        console.log('Compartilhamento realizado com sucesso');
      }).catch((error) => {
        console.log('Erro ao compartilhar', error);
      });
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = pageUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      alert("Link copiado para a área de transferência!");
    }
  }