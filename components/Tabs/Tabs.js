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

        // map over the newly converted NodeList we just created in our if statement above. Convert each this.members element into a new instance of the MemberSection class. Pass in a member object to the MemberSection class.
        this.members = Array.from(this.members).map(element => new MemberSection(element));

        // adds an click event listener to the tab element which calls the selectRole method
        this.tabElement.addEventListener('click', () => this.selectRole());
    }

    selectRole(){

        // selects all the tabs with the class name .tab
        const tabs = document.querySelectorAll('.tab');

        // interate through the NodeList removing all the .active-tab class from each element
        tabs.forEach(tab => tab.classList.remove('active-tab'))

        // select all the section elements with the class name member
        const members = document.querySelectorAll('section.member')

        // loop through the NodeList of members, setting their style display to none
        members.forEach(member => member.style.display = 'none')
        
        // add the class of 'active-tab' to this.tabElement
        this.tabElement.classList.add('active-tab')

        // loop through this NodeList and invoke the selectRole method
        this.members.forEach(member => member.selectRole())
    }
}

class MemberSection {
    constructor(memberElement){

        // assign this.memberElement to the memberElement DOM reference
        this.memberElement = memberElement;
    }
    selectRole(){

        // update the display style of this.memberElement to flex
        this.memberElement.style.display = 'flex';
    }
}

// grab reference to tabs
let tabsNodeList = document.querySelectorAll('.tab');

// return a new instance of TabFilter for each tabsNodeList
tabsNodeList.forEach(tab => new TabFilter(tab))