import { MenuElement } from './MenuElement';
import { Input, Choice, UserOption, SelectChoice } from './Input';

export class Menu{

    mainMenu: Choice[] = [];
    
    //choice's menu
    soupMenu: Choice[] = [];
    chefSpecialsMenu: Choice[] = [];
    chickenMenu: Choice[] = [];
    beefMenu: Choice[] = [];
    beveragesMenu: Choice[] = [];
    //options' menu
    soupOptions: MenuElement[] = [];
    chefSpecialsOptions: MenuElement[] = [];
    chickenOptions: MenuElement[] = [];
    beefOptions: MenuElement[] = [];
    beveragesOptions: MenuElement[] = [];
        
    constructor() {
        this.fillMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }

    //Methods
    fillMainMenu(): void{
        this.mainMenu = [
            { option: 1, message: 'Soup' },
            { option: 2, message: 'Chefs Specials' },
            { option: 3, message: 'Chicken' },
            { option: 4, message: 'Beef' },
            { option: 5, message: 'Beverages' },
            { option: 6, message: 'Exit' }
          ];
    }

    fillOptions(): void{
        this.soupOptions = [
            new MenuElement('Wonton Soup (Chicken)', 2.25, '🍛'),
            new MenuElement('Chicken Corn Soup', 1.95, '🥠'),
            new MenuElement('Vegetable Corn Soup', 2.25, '🍲'),
        ];
        
        this.chefSpecialsOptions = [
            new MenuElement('Orange Beef', 8.95, '🍘'),
            new MenuElement('Kung Pao Shrimp', 8.50, '🍤')
        ];

        this.chickenOptions = [
            new MenuElement('Lemon Chicken', 9.95, '🍃'),
            new MenuElement('Sesame Chicken', 9.95, '🍂'),
            new MenuElement('Hunan Chicken.', 10.50, '🍗')
        ];

        this.beefOptions = [
            new MenuElement('Pepper Steak', 9.95, '🥩'),
            new MenuElement('Manchurian Beef', 11.95, '🧆')
        ];

        this.beveragesOptions = [
            new MenuElement('Piña Colada', 3.00, '🍸'),
            new MenuElement('Spanish Coffee', 5.50, '☕')
        ];
    }

    fillSubMenus(){
        this.soupMenu = this.soupOptions.map((i: MenuElement) => ({
            name: i.id,
            message: i.printOption(),
        }));
        this.chefSpecialsMenu = this.chefSpecialsOptions.map((i: MenuElement) => ({
        name: i.id,
        message: i.printOption(),
        }));
        this.chickenMenu = this.chickenOptions.map((i: MenuElement) => ({
        name: i.id,
        message: i.printOption(),
        }));
        this.beefMenu = this.beefOptions.map((i: MenuElement) => ({
        name: i.id,
        message: i.printOption(),
        }));
        this.beveragesMenu = this.beveragesOptions.map((i: MenuElement) => ({
        name: i.id,
        message: i.printOption(),
        }));
    }

    async showSubMenuOption(
        message: string,
        subMenu: Choice[],
        subMenuOptions: MenuElement[]
    ) {
    const input = await Input.getSelectById(message, subMenu);
    const option = subMenuOptions.find((e: MenuElement) => input.data === e.id);
    console.log(`Total: ${option?.emoji}.... ${option?.price}`);
    }

    async showMainMenu() {
        let option = -1;
        let input: UserOption;
        while (option !== 6) {
        input = await Input.getSelect('Select a menu option', this.mainMenu);
        option = input.data;
        switch (option) {
        case 1:
            await this.showSubMenuOption(
            'Select your Soup',
            this.soupMenu,
            this.soupOptions
            );
            break;
        case 2:
            await this.showSubMenuOption(
            `Select your Chef's Specials`,
            this.chefSpecialsMenu,
            this.chefSpecialsOptions
            );
            break;
        case 3:
            await this.showSubMenuOption(
            'Select your Chicken',
            this.chickenMenu,
            this.chickenOptions
            );
            break;
        case 4:
            await this.showSubMenuOption(
            'Select your Beef',
            this.beefMenu,
            this.beefOptions
            );
            break;
        case 5:
            await this.showSubMenuOption(
            'Select your Beverages',
            this.beveragesMenu,
            this.beveragesOptions
            );
            break;
        case 6:
            console.log(`Bye`);
            break;
        }
    }
    }
}