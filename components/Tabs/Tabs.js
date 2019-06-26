class TabFilter {
    constructor(tabElement){

        // assign this.tabElement to the tabElement DOM reference
        this.tabElement = tabElement;

        // get the 'data-tab' value from the dataset of this.tabElement
        this.tabData = this.tabElement.dataset.tab;

        // check to see if 'all' is selected
        if(this.tabData === 'all'){

            // if true grab all the team members
            this.members = document.querySelectorAll('.member');
        } else {

            // else only select the team members with matching 'data-tab' values
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

// grab reference to tabs
let tabsNodeList = document.querySelectorAll('.tab');

// return a new instance of TabFilter for each tabsNodeList
tabsNodeList.forEach(tab => new TabFilter(tab))