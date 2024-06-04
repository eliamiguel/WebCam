
const video = document.getElementById('video')
var canvas = document.querySelector('canvas')
const baixar = document.getElementById('baixar')

const ligarCamera = () =>{
  navigator.mediaDevices.getUserMedia({video:true})
          .then(stream =>{
              video.srcObject = stream;
              video.play()
          })
          .catch(error => {
            console.log(error)
          })
}

ligarCamera()


const tirarFoto = ()=>{
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;   

  let context = canva.getContext('2d')
   context.drawImage( video, 0, 0)

   botaoBaixarFoto()
}

const botaoBaixarFoto = ()=>{
  const link = document.createElement('a')
   link.download = 'foto.png'
   link.href = canvas.toDataURL()
   link.textContent= 'Baixar foto'

   baixar.appendChild(link)
   baixar.classList.remove('baixar')
   document.getElementById('button').classList.add('baixar')
   return link 
}


document.getElementById('button').addEventListener('click', tirarFoto)



