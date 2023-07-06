import './hello-world-button.css';
class HelloworldButton{
    render(){
        const button =document.createElement('button');
        const body =document.querySelector('body');
        button.innerHTML ='Hello wrold!';
        button.classList.add('hello-world-button');
        body.appendChild(button);
    }
}
export default HelloworldButton; //connect