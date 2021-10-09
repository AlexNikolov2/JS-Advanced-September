class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online(){
        return this._online;
    }
    set online(value){
        this._online = value;
        if(this.onlineDiv){
            this.onlineDiv.className = this._online ? 'title online' : 'title';
        }
    }

    elementTemplate(tag,content = ''){
        const element = document.createElement(tag);
        element.innerHTML = content;
        return element;
    }
    render(id){
        this.template = this.elementTemplate('article');
        this.onlineDiv = this.elementTemplate('div', `${this.firstName} ${this.lastName}`);
        this.infoButton = this.elementTemplate('button', '&#8505;');
        this.infoDiv = this.elementTemplate('div', `<span>&phone; ${this.phone}</span>
        <span>&#9993; ${this.email}</span>`);
        this.onlineDiv.className = this.online ? 'title online' : 'title'
        this.infoDiv.className = 'info';
        this.infoDiv.style.display = 'none';
        this.onlineDiv.appendChild(this.infoButton);
        this.template.appendChild(this.onlineDiv);
        this.template.appendChild(this.infoDiv);
        document.getElementById(id).appendChild(this.template);

        this.infoButton.addEventListener('click', () => {
            this.infoDiv.style.display = this.infoDiv.style.display = 'none'?'block':'none';
        })

    }


}