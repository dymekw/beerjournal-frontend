export default function ToastService(){

    function generateToast(message,type,duration){

        var toast = document.createElement('div'),
            paragraph = document.createElement('p');

        toast.setAttribute('class','toast '+type);
        paragraph.innerHTML = message;
        toast.appendChild(paragraph);
        document.body.appendChild(toast);

        setTimeout(function(){
            document.body.removeChild(toast);
        },duration);
    }

    this.showToast = function(message,type,duration) {

        generateToast(message,type,duration);
    };
}