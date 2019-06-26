// console.log('hello world')

class TabFilter {
    constructor(tabElement){
        this.tabElement = tabElement;

        this.tabData = this.tabElement.dataset.tab;

        // console.log(this.tabData);

        if(this.tabData === 'all'){
            this.members = document.querySelectorAll('.member');
        } else {
            this.members = document.querySelectorAll(`.member[data-tab="${this.tabData}"]`);
        }

        this.members = Array.from(this.members).map(element => new MemberSection(element));

        this.tabElement.addEventListener('click', () => this.selectRole());
    }

    selectRole(){
        const tabs = document.querySelectorAll('.tab');

        tabs.forEach(tab => tab.classList.remove('active-tab'))

        const members = document.querySelectorAll('section.member')

        members.forEach(member => member.style.display = 'none')

        this.tabElement.classList.add('active-tab')

        this.members.forEach(member => member.selectRole())
    }
}

class MemberSection {
    constructor(memberElement){
        this.memberElement = memberElement;
    }
    selectRole(){
        this.memberElement.style.display = 'flex';
    }
}

let tabsNodeList = document.querySelectorAll('.tab');
// console.log(tabsNodeList)

tabsNodeList.forEach(tab => new TabFilter(tab))