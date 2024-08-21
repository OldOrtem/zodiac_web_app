import { makeAutoObservable } from "mobx";
import ruDict from "./../assets/locales/ru.json"
import enDict from "./../assets/locales/en.json"
import ILangStore from "../model/langStore";
import IDictionary from "../model/dictionary";


class LangStore implements ILangStore{   

    private static instance: LangStore;

    public lang: string;
    public dictionary: IDictionary;

    private constructor() {
        this.dictionary = {
            ru: ruDict,
            en: enDict,
        }
        
        this.lang = "en";
        this.loadFromLocalStorage();
        
        
        makeAutoObservable(this);
    }

    public static getInstance(): LangStore {
        if (!LangStore.instance) {
            LangStore.instance = new LangStore();
        }
        return LangStore.instance;
    }

    public getlang(): string {
        return this.lang;
    }

    public setLang(lang: string): void {
        this.lang = lang;
        this.saveToLocalStorage();
    }

    public setDefaultTheme(defaultLang: string): void {
        if (!this.loadFromLocalStorage()){
            this.lang = defaultLang;
        }
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('lang', this.lang);
    }

    private loadFromLocalStorage(): boolean {
        const lang = localStorage.getItem('lang');
        if (lang) {
            this.lang = lang;
        }
        return !!lang;
    }
}

export default LangStore.getInstance();