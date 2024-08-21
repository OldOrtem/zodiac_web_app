
interface ILangStore {    
    getlang(): string;
    setLang(lang: string): void;
    setDefaultTheme(defaultLang: string): void;
}

export default ILangStore;